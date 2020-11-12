// tslint:disable
/**
 * 用法，
 * 只能够直接套在被执行元素，
 * 1. state 去控制动画的开启，true为开启动画，flase为不再启动
 * 2. num 去控制执行次数
 * 3. name 去给子元素添加动画的类
 * 4. 该组件目前针对的是button，input，div单标签的动画效果，不支持v-if的方式，主要就是方便简洁易维护
 * 5. trigger触发类型
 * 6. 动画应该停留在最后一帧
 */

import { Component, Prop } from 'vue-property-decorator';
import Vue, { CreateElement, VNode } from 'vue'
import { get, debounce, set } from 'lodash'
@Component({
})
export default class ApiAnimate extends Vue {
  @Prop({ default: 'paused' }) // running

  public state?: string;
  @Prop()
  public name!: string;
  public isAsyncPlaceholder(node: VNode): boolean {
    return node.isComment && node.asyncFactory
  }
  public getFirstComponentChild(children: Array<VNode>): VNode {
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        const c = children[i]
        if (this.isDef(c) && (this.isDef(c.componentOptions) || this.isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }
  public isDef(v: any): boolean {
    return v !== undefined && v !== null
  }
  public getRealChild(vnode: VNode): VNode {

    // @Prop({ default: 'paused' })
    // public state: string = '';
    const compOptions: any = vnode && vnode.componentOptions;
    // @ts-ignore: Unreachable code error
    if (compOptions && compOptions.Ctor.options.abstract) {
      return this.getRealChild(this.getFirstComponentChild(compOptions.children as VNode[]))
    } else {
      return vnode
    }
  }
  // tslint:disable-next-line: member-ordering
  public abstract = true;

  public render(this: any, h: CreateElement) {
    const vnode: VNode = this.$slots.default[0];
    console.log(this.$slots.default[0])
    this.getRealChild(vnode).data.attrs.style = 'background:yellow;'
    this.getRealChild(vnode).data.attrs.class = [
      this.name
    ]
    const node = vnode.elm as HTMLBaseElement
    // console.log('%O', node)
    // node.style = ''
    if (vnode) {
      const event = get(vnode, 'data.on.click');
      if (typeof event === 'function') {
        set(vnode, 'data.on.click', debounce(event, 1000))
      }
    }
    return vnode;
  }
}

