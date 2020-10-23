<template>
  <div :class="`grid-container ${direction}`">
    <div
      class="content"
      ref="content"
      :style="`height:${$attrs.height || '100%'};width:${
        $attrs.width || '100%'
      };${CalcClass()}`"
    >
      <slot><!--内置了小卡片，小卡片的宽高受grid-content大小的影响--></slot>
    </div>
  </div>
</template>
<script lang="ts">
// 想要的方式就是取代最外层的div，并且预设几种宽度，将栅格布局简化到最简单,并且可以通过配置文件全部统一修改栅格的样式，大大提高效率
// 比普通栅格好的地方就在于，可以自由或批量的调节栅格的宽高,
// 每一个栅格内的小card绝不能转行,内部的card一般都是横向的
import {
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Watch,
  Component,
} from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop({ default: "row" })
  public direction: string; //row,col
  @Prop({ default: "center" })
  public justify: string; // top,bottom,center,between,around
  @Prop({ default: "center" })
  public align: string; // top,bottom,center,full,text
  @Prop({ default: "0 10px" })
  public margin?: string;

  @Watch("margin")
  public W_margin(value: any, old: any) {
    for (let i of this.$refs.content["children"]) {
      i.style["margin"] = this.margin;
    }
  }

  public mounted() {
    for (let i of this.$refs.content["children"]) {
      i.style["margin"] = this.margin;
    }
  }

  public CalcClass() {
    let cls = [];
    switch (this.direction) {
      case "row":
        cls.push("flex-direction:row");
        break;
      case "col":
        cls.push("flex-direction:column");
        break;
    }
    switch (this.justify) {
      case "top":
        cls.push("justify-content:flex-start");
        break;
      case "center":
        cls.push("justify-content:center");
        break;
      case "bottom":
        cls.push("justify-content:flex-bottom");
        break;
      case "space-between":
        cls.push("justify-content:space-between");
        break;
      case "space-around":
        cls.push("justify-content:space-around");
        break;
    }
    switch (this.align) {
      case "top":
        cls.push("align-items:flex-start");
        break;
      case "center":
        cls.push("align-items:center");
        break;
      case "bottom":
        cls.push("align-items:flex-end");
        break;
      case "baseline":
        cls.push("align-items:baseline");
        break;
      case "full":
        cls.push("align-items:stretch");
        break;
    }
    return cls.join(";");
  }
}
</script>
<style lang="scss" scoped>
.grid-container {
  .content {
    display: flex;
  }
}
.row,
.row .content {
  width: 100%;
}
.col,
.col .content {
  height: 100%;
}
</style>