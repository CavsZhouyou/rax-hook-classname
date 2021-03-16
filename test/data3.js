module.exports = {
  componentName: 'Block',
  id: '8110a8e0-7686-11eb-b3ee-7958b1e85796',
  props: {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    className: 'headerMod',
  },
  artboardImg:
    'https://img.alicdn.com/imgextra/i3/O1CN01N1mfIb1RIo2k26JsU_!!6000000002089-2-tps-686-405.png',
  rect: {
    x: 0,
    y: 0,
    width: 686,
    height: 405,
  },
  pluginVersion: '4.0.0',
  smart: {
    layerProtocol: {
      group: {
        type: 'group',
      },
      classPre: {
        type: 'header',
      },
      module: {
        type: 'smartModule',
        param: {
          labels: ['module_label_A', 'module_label_B'],
        },
      },
    },
    nodeIdentification: {
      bizModule: ['smartModule'],
    },
    nodeCustom: {
      bizModule: {
        isConfident: true,
        label: 'smartModule',
        score: 0.9007546901702881,
        type: 'bizModule',
        meta: {
          threshold: 0.9,
          props: {
            labels: ['module_label_A', 'module_label_B'],
          },
        },
        rect: {
          x: 0,
          y: 0,
          width: 686,
          height: 405,
        },
        selfId: null,
      },
    },
  },
  layerProtocols: ['group', 'classPre'],
  name: '#group#classPre:header#顶部区域',
  reference: 'sketch',
  restore_id: '22868800-9167-428c-bf47-32a83a1e1794',
  children: [
    {
      componentName: 'Div',
      id: '63364d30-86bc-4d02-a067-67e6c46d6fb7',
      props: {
        style: {
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          flexDirection: 'column',
          width: '686px',
          height: '404px',
        },
        className: 'headerBd',
      },
      rect: {
        x: 0,
        y: 0,
        width: 686,
        height: 404,
      },
      children: [
        {
          componentName: 'Div',
          id: '6a3d6473-e7b4-4197-85a4-a5b8d60bda03',
          props: {
            style: {
              display: 'flex',
              position: 'relative',
              alignItems: 'center',
              flexDirection: 'column',
            },
            className: 'headerOuter',
          },
          rect: {
            x: 279,
            y: 0,
            width: 128,
            height: 160,
          },
          smart: {
            layerProtocol: {
              group: {
                type: 'group',
              },
            },
          },
          selfId: '1D9F5DBD-577D-48F2-AA5D-F31C5CCCF38E',
          children: [
            {
              componentName: 'Image',
              id: '8110cff0-7686-11eb-b3ee-7958b1e85796',
              props: {
                style: {
                  position: 'relative',
                  width: '112px',
                  height: '112px',
                },
                src:
                  'https://img.alicdn.com/imgextra/i3/O1CN01YUcizF25Opt34qiMQ_!!6000000007517-2-tps-224-224.png',
                className: 'headerPic',
              },
              rect: {
                x: 287,
                y: 0,
                width: 112,
                height: 112,
              },
              selfId: 'E6EAC11D-05A2-4121-8C36-51CDEDD9E807',
              smart: {
                nodeIdentification: {
                  baseComponent: ['sliderbar_low_confident'],
                },
                nodeCustom: {
                  baseComponent: {
                    isConfident: true,
                    label: 'sliderbar_low_confident',
                    score: 0.9176293611526489,
                    type: 'baseComponent',
                    meta: {
                      threshold: 0.9,
                    },
                    rect: {
                      x: 287,
                      y: 0,
                      width: 112,
                      height: 112,
                    },
                    selfId: 'E6EAC11D-05A2-4121-8C36-51CDEDD9E807',
                  },
                },
                layerProtocol: {
                  component: {
                    type: 'sliderbar_low_confident',
                  },
                },
              },
            },
            {
              componentName: 'Text',
              id: '8110cff1-7686-11eb-b3ee-7958b1e85796',
              props: {
                style: {
                  position: 'relative',
                  marginTop: '12px',
                  lineHeight: '36px',
                  whiteSpace: 'nowrap',
                  color: '#111111',
                  fontSize: '32px',
                  fontWeight: 500,
                },
                text: '交易成功',
                lines: 1,
                className: 'headerTxt',
              },
              rect: {
                x: 279,
                y: 124,
                width: 128,
                height: 36,
              },
              selfId: '72391375-12E4-45F8-8686-185E28CAAF6B0',
            },
          ],
        },
        {
          componentName: 'Div',
          id: 'afe42b93-bb17-4e27-a08d-aa4b4b81e3ac',
          props: {
            style: {
              display: 'flex',
              position: 'relative',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: '64px',
            },
            className: 'headerGrid',
          },
          rect: {
            x: 111,
            y: 224,
            width: 464,
            height: 80,
          },
          smart: {
            layerProtocol: {
              group: {
                type: 'group',
              },
              component: {
                type: 'sliderbar_low_confident',
              },
            },
            nodeIdentification: {
              baseComponent: ['sliderbar_low_confident'],
            },
            nodeCustom: {
              baseComponent: {
                isConfident: true,
                label: 'sliderbar_low_confident',
                score: 0.9069626331329346,
                type: 'baseComponent',
                meta: {
                  threshold: 0.9,
                },
                rect: {
                  x: 111,
                  y: 224,
                  width: 464,
                  height: 80,
                },
                selfId: '5C26F93C-DFD9-4670-9E1A-5D8803E0635D',
              },
            },
          },
          selfId: '5C26F93C-DFD9-4670-9E1A-5D8803E0635D',
          children: [
            {
              componentName: 'Div',
              id: '9c4cf341-8d53-46d4-b78d-4140a0e9ee54',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginRight: '24px',
                  borderRadius: '8px',
                  backgroundColor: '#111111',
                  width: '220px',
                  height: '80px',
                },
                className: 'headerCol',
              },
              rect: {
                x: 111,
                y: 224,
                width: 220,
                height: 80,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: 'group',
                  },
                  repeat: {
                    type: 'repeat',
                    repeatId: '1614160563497208',
                    repeatIndex: '0',
                  },
                  component: {
                    type: 'arrow-left',
                  },
                },
                nodeIdentification: {
                  baseComponent: ['arrow-left'],
                },
                nodeCustom: {
                  baseComponent: {
                    isConfident: true,
                    label: 'arrow-left',
                    score: 0.956544041633606,
                    type: 'baseComponent',
                    meta: {
                      threshold: 0.9,
                    },
                    rect: {
                      x: 111,
                      y: 224,
                      width: 220,
                      height: 80,
                    },
                    selfId: 'A7190FE7-6609-40F1-9F65-7515BA713289',
                  },
                },
              },
              selfId: 'A7190FE7-6609-40F1-9F65-7515BA713289',
              children: [
                {
                  componentName: 'Text',
                  id: '8110cff4-7686-11eb-b3ee-7958b1e85796',
                  props: {
                    style: {
                      maxWidth: '208px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: '26px',
                      whiteSpace: 'nowrap',
                      color: '#ffffff',
                      fontSize: '26px',
                      fontWeight: 500,
                    },
                    text: '返回首页',
                    lines: 1,
                    className: 'headerButton',
                  },
                  rect: {
                    x: 169,
                    y: 249,
                    width: 104,
                    height: 30,
                  },
                  selfId: 'CFB3D943-29BF-4F05-9C83-23CDCCA384F90',
                  smart: {
                    nodeIdentification: {
                      baseComponent: ['sliderbar_low_confident'],
                    },
                    nodeCustom: {
                      baseComponent: {
                        isConfident: true,
                        label: 'sliderbar_low_confident',
                        score: 0.9445950984954834,
                        type: 'baseComponent',
                        meta: {
                          threshold: 0.9,
                        },
                        rect: {
                          x: 169,
                          y: 249,
                          width: 104,
                          height: 30,
                        },
                        selfId: 'CFB3D943-29BF-4F05-9C83-23CDCCA384F90',
                      },
                    },
                    layerProtocol: {
                      component: {
                        type: 'sliderbar_low_confident',
                      },
                    },
                  },
                },
              ],
            },
            {
              componentName: 'Div',
              id: '817d7470-7686-11eb-afbb-4b60bf6acf35',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  backgroundColor: '#FFDD00',
                  width: '220px',
                  height: '80px',
                },
                className: 'headerCol_1',
              },
              rect: {
                x: 355,
                y: 224,
                width: 220,
                height: 80,
              },
              smart: {
                layerProtocol: {
                  group: {
                    type: 'group',
                  },
                  repeat: {
                    type: 'repeat',
                    repeatId: '1614160563497208',
                    repeatIndex: '1',
                  },
                  multiStatus: {
                    type: 'multiStatus',
                    protocol: {
                      autoDetected: false,
                      statusId: '16141605635019580',
                      statusIndex: 0,
                      statusCount: 2,
                    },
                  },
                  component: {
                    type: 'sliderbar_low_confident',
                  },
                },
                nodeIdentification: {
                  baseComponent: [
                    'sliderbar_low_confident',
                    'sliderbar_low_confident',
                  ],
                },
                nodeCustom: {
                  baseComponent: {
                    isConfident: true,
                    label: 'sliderbar_low_confident',
                    score: 0.9967733025550842,
                    type: 'baseComponent',
                    meta: {
                      threshold: 0.9,
                    },
                    rect: {
                      x: 355,
                      y: 224,
                      width: 220,
                      height: 80,
                    },
                    selfId: '7A843488-91CB-4463-BDCB-285EA533A85F',
                  },
                },
              },
              selfId: '7A843488-91CB-4463-BDCB-285EA533A85F',
              children: [
                {
                  componentName: 'Text',
                  id: '817d7471-7686-11eb-afbb-4b60bf6acf35',
                  props: {
                    style: {
                      maxWidth: '208px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: '26px',
                      whiteSpace: 'nowrap',
                      color: '#111111',
                      fontSize: '26px',
                      fontWeight: 500,
                    },
                    text: '立即评价',
                    lines: 1,
                    className: 'headerButton_1',
                  },
                  rect: {
                    x: 413,
                    y: 249,
                    width: 104,
                    height: 30,
                  },
                  selfId: '9289442D-1357-428F-B34D-DBE819DB92870',
                  smart: {
                    nodeIdentification: {
                      baseComponent: ['sliderbar_low_confident'],
                    },
                    nodeCustom: {
                      baseComponent: {
                        isConfident: true,
                        label: 'sliderbar_low_confident',
                        score: 0.9999874830245972,
                        type: 'baseComponent',
                        meta: {
                          threshold: 0.9,
                        },
                        rect: {
                          x: 413,
                          y: 249,
                          width: 104,
                          height: 30,
                        },
                        selfId: '9289442D-1357-428F-B34D-DBE819DB92870',
                      },
                    },
                    layerProtocol: {
                      component: {
                        type: 'sliderbar_low_confident',
                      },
                    },
                  },
                },
              ],
              condition: true,
            },
            {
              componentName: 'Div',
              id: '817d9b80-7686-11eb-afbb-4b60bf6acf35',
              props: {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  backgroundColor: '#FFDD00',
                  width: '220px',
                  height: '80px',
                },
                className: 'headerCol3',
              },
              rect: {
                x: 355,
                y: 224,
                width: 220,
                height: 80,
              },
              name: '矩形备份 5',
              selfId: '799B7621-5032-4685-8E1E-5BFAA641090E',
              children: [
                {
                  componentName: 'Text',
                  id: '817d9b81-7686-11eb-afbb-4b60bf6acf35',
                  props: {
                    style: {
                      maxWidth: '208px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: '26px',
                      whiteSpace: 'nowrap',
                      color: '#111111',
                      fontSize: '26px',
                      fontWeight: 500,
                    },
                    text: '查看订单',
                    lines: 1,
                    className: 'headerButton_2',
                  },
                  rect: {
                    x: 58,
                    y: 25,
                    width: 104,
                    height: 30,
                  },
                  name: '查看订单',
                  selfId: '581A56B5-22EE-4511-8C53-63FBEA37D35A0',
                  smart: {
                    nodeIdentification: {
                      baseComponent: ['arrow-left'],
                    },
                    nodeCustom: {
                      baseComponent: {
                        isConfident: true,
                        label: 'arrow-left',
                        score: 0.9995974898338318,
                        type: 'baseComponent',
                        meta: {
                          threshold: 0.9,
                        },
                        rect: {
                          x: 58,
                          y: 25,
                          width: 104,
                          height: 30,
                        },
                        selfId: '581A56B5-22EE-4511-8C53-63FBEA37D35A0',
                      },
                    },
                    layerProtocol: {
                      component: {
                        type: 'arrow-left',
                      },
                    },
                  },
                },
              ],
              smart: {
                layerProtocol: {
                  multiStatus: {
                    type: 'multiStatus',
                    protocol: {
                      autoDetected: false,
                      statusId: '16141605635019580',
                      statusIndex: 1,
                      statusCount: 2,
                    },
                  },
                },
              },
              condition: false,
            },
          ],
        },
      ],
      smart: {
        nodeIdentification: {
          baseComponent: ['sliderbar_low_confident'],
        },
        nodeCustom: {
          baseComponent: {
            isConfident: true,
            label: 'sliderbar_low_confident',
            score: 0.936575710773468,
            type: 'baseComponent',
            meta: {
              threshold: 0.9,
            },
            rect: {
              x: 0,
              y: 0,
              width: 686,
              height: 404,
            },
            selfId: null,
          },
        },
        layerProtocol: {
          component: {
            type: 'sliderbar_low_confident',
          },
        },
      },
    },
    {
      componentName: 'Div',
      id: '5611b739-2b2c-4a79-8f0c-6f716ea939ce',
      props: {
        style: {
          display: 'flex',
          position: 'relative',
          alignItems: 'flex-start',
          flexDirection: 'column',
          marginTop: '1px',
          height: '0px',
        },
        className: 'headerFt',
      },
      rect: {
        x: 0,
        y: 405,
        width: 686,
        height: 0,
      },
      children: [
        {
          componentName: 'Div',
          id: '8110f704-7686-11eb-b3ee-7958b1e85796',
          props: {
            style: {
              position: 'relative',
              marginTop: '-1px',
              backgroundColor: '#E5E5E5',
              width: '686px',
              height: '1px',
            },
            className: 'headerColor',
          },
          rect: {
            x: 0,
            y: 404,
            width: 686,
            height: 1,
          },
          selfId: 'BAD5133E-354E-400D-99A1-7E133EED7FEF',
          smart: {
            nodeIdentification: {
              baseComponent: ['arrow-left'],
            },
            nodeCustom: {
              baseComponent: {
                isConfident: true,
                label: 'arrow-left',
                score: 0.9877306818962097,
                type: 'baseComponent',
                meta: {
                  threshold: 0.9,
                },
                rect: {
                  x: 0,
                  y: 404,
                  width: 686,
                  height: 1,
                },
                selfId: 'BAD5133E-354E-400D-99A1-7E133EED7FEF',
              },
            },
            layerProtocol: {
              component: {
                type: 'arrow-left',
              },
            },
          },
        },
      ],
    },
  ],
  imgcook: {
    restore_id: '22868800-9167-428c-bf47-32a83a1e1794',
  },
};
