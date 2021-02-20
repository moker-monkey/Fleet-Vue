import { format } from '@/utils';
import { Form } from 'element-ui';
import Vue from 'vue';
import { api, Param } from './Model';

export enum type {
    'input' = 'input',
    'select' = 'select',
    'radio' = 'radio',
    'checkbox' = 'checkbox',
    'inputNumber' = 'inputNumber',
    'cascader' = 'cascader',
    'switch' = 'switch',
    'slider' = 'slider',
    'timePicker' = 'timePicker',
    'datePicker' = 'datePicker',
    'dateTimePicker' = 'dateTimePicker',
    'upload' = 'upload',
    'rate' = 'rate',
    'colorPicker' = 'colorPicker',
    'transfer' = 'transfer',
    'list' = 'list'
}

interface FormItem { // 表示字段名与类型对应，也代表了表单从上至下的顺序
    key: string,
    type: string
}

export default class FleetForm {
    public api: api | null = null;
    public create: any = {
        input: (item: Param) => {
            const template = `<input v-model="${item.key}"></input>`
            const item_template =
                `<el-form-item label="${item.label}" prop="${item.key}" required="${item.require}">
                    ${template}
                </el-form-item>`
        },
        select: () => {

        },
        list: () => { }
    }
    constructor(api: api) {
        this.api = api;
    }
    public createForm() {
        // 只会生成字符串模板，在外面放在script中生成Vue.extend({template})中并在Vue.extend中注册成组件的形式全局注册为组件，该组件中每一个字段都有自己的slot,如果需要自定义，那么只需要插入对应的插槽即可
        // 需要定义一个form组件，该组件配置api即可，调用form组件的validate时会触发一次校验，校验会返回组件路径，然后通过dom找到对应data-prop的组件，并渲染错误信息
        if (this.api && this.api.paramsSet) {
            if (this.api.paramsSet) {
                for (const item of this.api.paramsSet) {
                    for (const i of item.params) {
                        this.createFormItem(i)
                    }
                }
            }
        }
    }
    public createFormItem(item: Param) {
        // 每一个字段占据一个item
        if (item.component) {
            this.create[item.component.type](item)
        }
    }
}
