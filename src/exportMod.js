const {
  toString,
  existImport,
  parseLoop,
  parseStyle,
  deepClone,
  parseFunction,
  parseProps,
  parseState,
  parseLifeCycles,
  replaceState,
  parseCondition,
  generateCSS,
  parseDataSource,
  line2Hump,
  getText,
  isExpression
} = require('./utils');

function exportMod(schema, option) {
  const { prettier, scale, componentsMap } = option;

  const fileName = schema.fileName;

  // imports
  let imports = [];

  // imports mods
  let importMods = [];

  // inline style
  const style = {};

  const styleRpx = {};

  // Global Public Functions
  const utils = [];

  // states
  let statesData = null;

  // useState
  let useState = [];

  // methods
  const methods = [];

  // life cycles
  let lifeCycles = [];

  // init
  const init = [];

  
  /**
   * 导入对应组件的依赖
   *
   * @param {*} componentName
   */
  const collectImports = componentName => {
    let componentMap = componentsMap[componentName] || {};
    let packageName = componentMap.package || componentMap.packageName || componentName;
    if (packageName && ['view', 'image', 'text', 'picture'].indexOf(packageName.toLowerCase()) >= 0) {
      packageName = `rax-${packageName.toLowerCase()}`;
    }
    const singleImport = `import ${componentName} from '${packageName}'`;
    if (!existImport(imports, singleImport)) {
      imports.push({
        import: singleImport,
        package: packageName,
        version: componentMap.dependenceVersion || '*'
      });
    }
  };

  // generate render xml
  const generateRender = schema => {
    const componentName = schema.componentName;
    const type = schema.componentName.toLowerCase();
    const className = schema.props && schema.props.className;
    const classString = className ? ` className="${className}"` : '';
    
    let styles = {}
    let codeStyles = {}
    Object.keys(schema.props.style || {}).forEach(key => {
      if (isExpression(schema.props.style[key])) {
        codeStyles[key] = schema.props.style[key]
      } else {
        styles[key] = schema.props.style[key]
      }
    });

    schema.props.codeStyle = codeStyles;

    if (className) {
      style[className] = parseStyle(styles, scale);
      styleRpx[className] = parseStyle(deepClone(styles), scale, 'rpx');
    }

    let xml;
    let props = '';

    Object.keys(schema.props).forEach(key => {
      if (['className', 'style', 'text', 'src', 'key', 'codeStyle'].indexOf(key) === -1) {
        // 添加自定义属性
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }

      if (key === 'codeStyle') {
        if(JSON.stringify(schema.props[key]) !== '{}') {
          props += ` style={${parseProps(schema.props[key])}}`;
        }
      }

      // fix attr when type is not text
      if (type !== 'text' && ['text'].includes(key)) {
        props += ` ${key}={${parseProps(schema.props[key])}}`;
      }

      // 无障碍能力
      if (['onClick'].indexOf(key) === 0) {
        props += ` accessible={true} role="link" aria-label={\`${getText(schema)}\`}`;
      }
    });

    // 无障碍能力
    if (type === 'link' && !props.match('accessible')) {
      props += ` accessible={true} aria-label={\`${getText(schema)}\`}`;
    }

    switch (type) {
      case 'text':
        collectImports('Text');
        let innerText = parseProps(schema.props.text || schema.text, true);
        if (innerText.match(/this\.props/)) {
          innerText = innerText.replace(/this\./, '');
        }
        xml = `<Text${classString}${props}>${innerText || ''}</Text>`;
        break;
      case 'image':
        collectImports('Image');
        if (!props.match('onClick')) {
          props += ' aria-hidden={true}';
        }
        if (schema.props.source && schema.props.source.uri) {
          xml = `<Image${classString}${props} />`;
        } else {
          let source = parseProps(schema.props.src);
          source = (source && `source={{uri: ${source}}}`) || '';
          xml = `<Image${classString}${props} ${source} />`;
        }
        break;
      case 'div':
      case 'view':
      case 'page':
      case 'block':
      case 'component':
        collectImports('View');
        if (schema.children && schema.children.length) {
          xml = `<View${classString}${props}>${transform(
            schema.children
          )}</View>`;
        } else {
          xml = `<View${classString}${props} />`;
        }
        break;
      default:
        collectImports(schema.componentName);
        if (
          schema.children &&
          schema.children.length &&
          Array.isArray(schema.children)
        ) {
          xml = `<${componentName}${classString}${props}>${transform(
            schema.children
          )}</${componentName}>`;
        } else if (typeof schema.children === 'string') {
          xml = `<${componentName}${classString}${props} >${schema.children}</${componentName}>`;
        } else {
          xml = `<${componentName}${classString}${props} />`;
        }
    }

    if (schema.loop) {
      const parseLoopData = parseLoop(
        schema.loop,
        schema.loopArgs,
        xml,
        statesData,
        schema,
      );
      xml = parseLoopData.value;
      useState = useState.concat(parseLoopData.hookState);
    }
    
    xml = replaceState(xml);

    if (schema.condition) {
      xml = parseCondition(schema.condition, xml);
    }
    if (schema.loop || (schema.condition && typeof schema.condition === 'string')) {
      xml = `{${xml}}`;
    }
    return xml;
  };

  // parse schema
  const transform = schema => {
    let result = '';
    const blockName = schema.fileName || schema.id;
    if (Array.isArray(schema)) {
      schema.forEach(layer => {
        result += transform(layer);
      });
    } else {
      const type = schema.componentName.toLowerCase();

      // 如果是 page 容器组件
      // TODO: blockName === fileName 的判断没有看明白，通过 entry 的处理，应该都会走到这里来
      if (['page'].indexOf(type) !== -1 || blockName === fileName) {
        // 容器组件处理: state/method/dataSource/lifeCycle
        const states = [];

        // state 数据处理
        if (schema.state) {
          states.push(`state = ${toString(schema.state)}`);
          statesData = toString(schema.state);
        }

        // 自定义方法处理
        if (schema.methods) {
          Object.keys(schema.methods).forEach(name => {
            const { params, content } = parseFunction(schema.methods[name]);
            methods.push(`function ${name}(${params}) {${content}}`);
          });
        }

        // 异步数据处理
        if (schema.dataSource && Array.isArray(schema.dataSource.list)) {
          schema.dataSource.list.forEach(item => {
            if (typeof item.isInit === 'boolean' && item.isInit) {
              init.push(`${item.id}();`);
            } else if (typeof item.isInit === 'string') {
              init.push(`if (${parseProps(item.isInit)}) { ${item.id}(); }`);
            }
            const parseDataSourceData = parseDataSource(item, imports);
            methods.push(parseDataSourceData.value);
            imports = parseDataSourceData.imports;
          });

          if (schema.dataSource.dataHandler) {
            const { params, content } = parseFunction(
              schema.dataSource.dataHandler
            );
            methods.push(`const dataHandler = (${params}) => {${content}}`);
            init.push(`dataHandler()`);
          }
        }

        // 生命周期处理
        if (schema.lifeCycles) {
          lifeCycles = parseLifeCycles(schema, init);
        }

        // state 转换为 hooks
        if (statesData) {
          useState.push(parseState(statesData));
        }
      } else if (['block'].indexOf(type) !== -1) {
        // 模块导入处理

        let props = '';
        Object.keys(schema.props).forEach(key => {

          // 处理自定义 props;
          if (['className', 'style', 'text', 'src', 'key'].indexOf(key) === -1) {
            props += ` ${key}={${parseProps(schema.props[key])}}`;
          }
        });

        result += `<${line2Hump(blockName)} ${props} />`;

        importMods.push({
          import: `import ${line2Hump(blockName)} from '../${blockName}';`,
        });
      } else {
        result += generateRender(schema);
      }
    }

    return result;
  };

  // 初始化全局公共函数
  if (option.utils) {
    Object.keys(option.utils).forEach(name => {
      utils.push(`const ${name} = ${option.utils[name]}`);
    });
  }

  // start parse schema
  transform(schema);

  // output
  const prettierJsOpt = {
    parser: 'babel',
    printWidth: 120,
    singleQuote: true
  };
  const prettierCssOpt = {
    parser: 'css'
  };
  const hooksView = generateRender(schema);
  const hasDispatch = hooksView.match('dispatch');
  const indexValue = prettier.format(
    `
    'use strict';
    import { createElement, useState, useEffect, memo } from 'rax';
    ${imports.map(i => i.import).join('\n')}
    ${importMods.map(i => i.import).join('\n')}
    ${hasDispatch ? "import { IndexContext } from '../../context';" : ''}

    import './${fileName}.css';

    ${utils.join('\n')}
    export default memo((props) => {
      ${useState.join('\n')}
      ${
        hasDispatch
          ? 'const { state: { txt }, dispatch} = useContext(IndexContext);'
          : ''
      }
      ${lifeCycles.join('\n')}
      ${methods.join('\n')}
      ${hooksView.match(/^\{true\ \&\& /) ? `return (<View>${hooksView}</View>)`: `return (${hooksView})`}
    });
  `,
    prettierJsOpt
  );

  const prefix = schema.props && schema.props.className;

  return [
    {
      panelName: `${fileName}.jsx`,
      panelValue: indexValue,
      panelType: 'js',
      panelImports: imports
    },
    {
      panelName: `${fileName}.css`,
      panelValue: prettier.format(`${generateCSS(style, prefix)}`, prettierCssOpt),
      panelType: 'css'
    },
    {
      panelName: `${fileName}.rpx.css`,
      panelValue: prettier.format(`${generateCSS(styleRpx, prefix)}`, prettierCssOpt),
      panelType: 'css'
    }
  ];
}

module.exports = exportMod;
