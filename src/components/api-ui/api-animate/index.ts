// tslint:disable
// 实现中断，问题在于无法通过高级组件的变量去控制动画的启动与暂停，高级主键的最主要作用是一次性添加一些方法和处理，而不需要改动内部逻辑。现在该功能改为由自定义组件去实现
/**
 * 用法，
 * 与transition的区别是，transition控制的是元素的显影，而api-animate的作用是控制单个元素的显影
 * 只能够直接套在被执行元素，
 * 1. state 去控制动画的开启，true为开启动画，flase为不再启动
 * 2. num 去控制执行次数
 * 3. name 去给子元素添加动画的类
 * 4. 该组件目前针对的是button，input，div单标签的动画效果，不支持v-if的方式，主要就是方便简洁易维护
 * 5. trigger触发类型
 * 6. 动画应该停留在最后一帧
 * 7. 支持velocity,以及css3
 * 8. 
 */

import { Component, Prop, Watch } from 'vue-property-decorator';
import Vue, { CreateElement, VNode, VNodeData } from 'vue'
import { get, debounce, set } from 'lodash'
@Component({
})
export default class ApiAnimate extends Vue {
  public state: boolean = false;
  @Prop({ default: 'css' })
  public animate_type!: string;
  @Prop()
  public keyframes_name!: string;  //关键帧的名称
  @Prop()
  public class_name!: string; // 类名
  @Prop({ default: 'hover' }) // 
  public trigger?: string;
  public isAsyncPlaceholder(node: VNode): boolean {
    return node.isComment && node.asyncFactory
  }
  // tslint:disable-next-line
  public getFirstComponentChild(children: Array<VNode>): VNode {
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        const c = children[i]
        if (this.isDef(c) && (this.isDef(c.componentOptions) || this.isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
    return children[0] //为解决报错添加的，如有错误再考虑
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
  public setAnimateState(state: boolean, dom: HTMLBaseElement) {
    let style = `animation-play-state:${state ? 'running' : 'paused'}; `
    // dom.style = style;
  }
  // tslint:disable-next-line: member-ordering
  public abstract = true;
  public childNode!: VNode;;
  public render(this: any, h: CreateElement) {
    const vnode: VNode = this.$slots.default[0];
    const realNode: VNode = this.getRealChild(vnode) as VNode
    this.childNode = realNode;
    if (realNode) {
      let { data } = realNode
      let { attrs } = data as VNodeData
      if (this.state) {

      }
      console.log(vnode)
      this.setAnimateState(this.state as boolean)
      attrs!.class = [
        this.name
      ]
    }

    if (vnode) {
      const event = get(vnode, 'data.on.click');
      if (typeof event === 'function') {
        set(vnode, 'data.on.click', event)
      } else {
        set(vnode, 'data.on.click', (event: any) => {
          this.state = !this.state
          this.setAnimateState(this.state as boolean, this.$slots.default[0].$el)
          // this.$children[0].$el.style = 'animation-play-state:;'
          // console.log(this.setAnimateState())
          // this.data.attrs.style = ''
        })
      }
    }
    return vnode;
  }
}

