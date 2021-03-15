const { exportMod, exportPage } = require('./exportCode');
const { line2Hump, transComponentsMap } = require('./utils');

module.exports = function(schema, option) {
  // get blocks json
  const blocks = [];

  // 判断缩放比例
  const scale = 750 / (option.responsive && option.responsive.width || 750);

  // componentsMap 格式化，以 object 格式输出
  const componentsMap = transComponentsMap(option.componentsMap);

  // 赋值到 options 上
  option.scale = scale;
  option.componentsMap = componentsMap;


  // schema block 文件名格式化
  function schemaHandler(option) {
    const { json, scale, index } = option;
    switch (json.componentName.toLowerCase()) {
      case 'block':
        // fileName 处理
        json.fileName = json.fileName || `block_${json.id.slice(0, 6)}` || `block_${index}`;
        if (
          json.smart &&
          json.smart.layerProtocol &&
          json.smart.layerProtocol.module &&
          json.smart.layerProtocol.module.type
        ) {
          json.fileName = json.smart.layerProtocol.module.type.replace(
            /[@|\/]/g,
            ''
          );
        }
        json.fileName = json.fileName === 'index' ? json.fileName : line2Hump(json.fileName);
        blocks.push(json);
        break;
      default:
        break;
    }
    if (json.children && json.children.length > 0 && Array.isArray(json.children)) {
      json.children.forEach((child, index) => {
        schemaHandler({
          json: child,
          scale,
          index
        });
      });
    }
  }

  // invoke
  schemaHandler({
    json: schema,
    scale
  });

  // export module code
  let panelDisplay = [];
  blocks.length > 0 &&
    blocks.forEach(block => {
      const result = exportMod(block, option);
      panelDisplay = panelDisplay.concat(result);
    });
  // export Page code
  if (schema.componentName === 'Page') {
    const result = exportPage(schema, option);
    panelDisplay = panelDisplay.concat(result);
  }

  return {
    panelDisplay,
    // 设置为自定义模板模式
    noTemplate: true
  };
};
