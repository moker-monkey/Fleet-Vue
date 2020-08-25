<template></template>
<script lang="ts">
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
export default class SliderFace extends Vue {
  public size: number = 70;
  @Prop({ default: "" })
  public faceImg?: string;
  @Prop({ default: false })
  public fold?: boolean;
  @Watch("fold")
  public changeFold(this: any) {
    if (this.fold) {
      this.size = 30;
      this.$refs.slide.style.height = "56px";
    } else {
      this.size = 70;
      this.$refs.slide.style.height = "160px";
    }
  }
  @Prop({ default: "" })
  public username?: string;
}
</script>
<style lang="scss" scoped>
.slider-face {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.slider-face-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 120px;
}
</style>