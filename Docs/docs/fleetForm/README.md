# fleet-form

## 简介

> fleet-form 是一个根据**标准化数据结构**快速创建表单的组件，虽然它默认只提供了简洁的样式和配置，但是也提供灵活的自定义表单组件；除了基础功能也提供表单校验，自定义表单校验，api管理等功能

## 使用步骤

自动化生成form的原理就是从api的请求参数中提取出数据结构，因此第一步是定义api的请求参数，这些请求参数被称为params，params中的每一个值称为param。

### 定义数据结构（params)

1. 新建一个params.ts文件
2. 引入你的api声明文件和./Model/Api
3. 定义该api的请求方法和对应的参数
4. 使用`api.setParams(Method,Param[])`来设置一个对应的params

对应的param定义为

```typescript
 interface Param {
    key: string,  // 表明该api对应的字段名
    require: boolean,  // 表明该字段必须存在
    value?: any, // 用于生成默认值
    type: paramsType,   // string,number,boolean,object等四种类型
    isNull: boolean,   // 表明该字段的值是否可以为null,undefined
    validate?: (validate[] | any[]),   // 校验方法的name，需要通过Api.setValidate('name',callback)注册
    label?: string, // 自动生成form时对应的字段中文名
    quote?: string, // 如果type为object,则必须注册一个quote
    options?: any[],  //如果type是一个list类型,那么options可以限定可选项的值，并且options必须是写死的值（也可能是一个异步的options回调方法，因为
    __name?: string,  // 这个name用于在深层的校验中找到最顶层的名称
    describe?: string, // 描述该字段应该输入怎么样的内容
    isMultiValue?: boolean,  // 是否是多值的参数
    separator?: string, // 该参数必须是一个多值的参数，实际上的值应该是被分隔符分隔的字符串
    component?: component, // 在自动生成表单表明生成什么样类型的组件
}
interface validate {
    name: string, // 名称
    argument:any // 用于为验证提供参数
}

```

下面是一个和学校相关的params：

```javascript
import * as api from './api'
import Api, { paramsType, type } from "./Model"

api.empty.setParams('GET', [{
    key: 'name',
    label: '我的姓名',
    require: true,
    describe: '用户的姓名，至少三个字',
    type: paramsType.string,
    isNull: false,
    validate: ['string_length'],
    value: 'abx',
    component: {
        type: type.input
    }
}, {
    key: 'age',
    label: '年龄',
    require: false,
    type: paramsType.number,
    isNull: true,
    validate: ['type'],
    value: 0,
    component: {
        type: type.inputNumber
    }
}, {
    key: 'teacher',
    label: '教师信息',
    require: true,
    type: paramsType.object,
    isNull: true,
    validate: ['type'],
    quote: 'teacher',
    value: { name: 'sh' }
}, {
    key: 'address',
    label: '地址',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    isMultiValue: true
}, {
    key: 'class',
    label: '教授课程',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    isMultiValue: true,
    value: '',
    component: {
        type: type.cascader,
        options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                    value: 'yizhi',
                    label: '一致'
                }, {
                    value: 'fankui',
                    label: '反馈'
                }, {
                    value: 'xiaolv',
                    label: '效率'
                }, {
                    value: 'kekong',
                    label: '可控'
                }]
            }, {
                value: 'daohang',
                label: '导航',
                children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                }]
            }]
        }, {
            value: 'zujian',
            label: '组件',
            children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                }, {
                    value: 'color',
                    label: 'Color 色彩'
                }, {
                    value: 'typography',
                    label: 'Typography 字体'
                }, {
                    value: 'icon',
                    label: 'Icon 图标'
                }, {
                    value: 'button',
                    label: 'Button 按钮'
                }]
            }, {
                value: 'form',
                label: 'Form',
                children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                }, {
                    value: 'input',
                    label: 'Input 输入框'
                }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                }, {
                    value: 'select',
                    label: 'Select 选择器'
                }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                }, {
                    value: 'switch',
                    label: 'Switch 开关'
                }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                }, {
                    value: 'upload',
                    label: 'Upload 上传'
                }, {
                    value: 'rate',
                    label: 'Rate 评分'
                }, {
                    value: 'form',
                    label: 'Form 表单'
                }]
            }, {
                value: 'data',
                label: 'Data',
                children: [{
                    value: 'table',
                    label: 'Table 表格'
                }, {
                    value: 'tag',
                    label: 'Tag 标签'
                }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                }, {
                    value: 'badge',
                    label: 'Badge 标记'
                }]
            }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                }, {
                    value: 'loading',
                    label: 'Loading 加载'
                }, {
                    value: 'message',
                    label: 'Message 消息提示'
                }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                }, {
                    value: 'notification',
                    label: 'Notification 通知'
                }]
            }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                }]
            }, {
                value: 'others',
                label: 'Others',
                children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                }, {
                    value: 'card',
                    label: 'Card 卡片'
                }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                }]
            }]
        }, {
            value: 'ziyuan',
            label: '资源',
            children: [{
                value: 'axure',
                label: 'Axure Components'
            }, {
                value: 'sketch',
                label: 'Sketch Templates'
            }, {
                value: 'jiaohu',
                label: '组件交互文档'
            }]
        }]
    }
}, {
    key: 'gender',
    label: '性别',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    value: 'male',
    component: {
        type: type.radio,
        options: [{
            label: '男',
            value: 'male'
        }, {
            label: '女',
            value: 'Female'
        }]
    }
}, {
    key: 'course',
    label: '课程',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    value: [],
    isMultiValue: true,
    component: {
        type: type.checkbox,
        options: [{
            label: '政治',
            value: '0'
        }, {
            label: '生理卫生',
            value: '1'
        }, {
            label: '心理健康',
            value: '2'
        }, {
            label: '语文',
            value: '3'
        }, {
            label: '数学',
            value: '4'
        }]
    }
}, {
    key: 'holiday',
    label: '休假',
    require: true,
    type: paramsType.boolean,
    isNull: false,
    validate: ['type', { name: 'string_length', argument: { min: 3, max: 20 } }],
    value: true,
    component: {
        type: type.switch,
    }
}])

```




### 新建验证方式


:::tip 
**验证函数只需要校验字符串或数字的合法性即可**
> 其一，从param的角度来看，params中的每一个field的value都存在着两种值，第一种是单值，第二种是多值，因此校验时都需要校验单值与多值；多值本质上是单值的重复，为了简化多值的校验情况，避免写复杂的逻辑，fleet-form的内部逻辑为，第一将params拆解为param并验证param的value，第二判断param的值是否是多值，第三如果是多值则将value遍历传入验证函数中，若value是object则找到对应的quote，递归调用，直到拆解到非object，再传入验证函数，因此验证函数只需要校验非object的单值即可。


> 其二，内置了基本type类型校验，用户无需对类型进行校验，只需要校验字符串或数字的合法性即可
:::

1. 引入Model.ts的Api类
2. 使用`Api.setValidate(name,callback)`创建一个验证函数
3. 在param中的validate中使用验证函数

```javascript
Api.setValidate('string_length', (value: any, field_obj: any, argument: any) => {
    // 校验前必须是传入完整的数据结构，在校验完成后再组合成正常的数据结构
    // 添加的验证必须返回一个布尔值
    // 如果是一个object那么就调用api的一个方法validateQuote去获取，然后递归调用
    // 如果value是一个Multi，则调用validateMulti方法，并传入当前的递归方法名，即可
    if (field_obj.type === 'string') {
        if (value.length < argument.min) {
            return { key: field_obj.key, message: `字符串长度不能小于${argument.min}`, value, __name: field_obj.__name }
        }
    }
    return true
})
Api.setQuote('teacher', [{
    key: 'name',
    label: '教师名字',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: [{ name: 'string_length', argument: { min: 3, max: 20 } }],
    component: {
        type: type.input
    }
}])
```

