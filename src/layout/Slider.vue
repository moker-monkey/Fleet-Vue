<template>
  <div class="slide">
    <sliderFace class="slide__face" :circleUrl="faceSrc" :username="username" :fold="fold"></sliderFace>
    <Menu @select="select" class="slide__inner"></Menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import Menu from "./components/el-slide-menu/menu.vue";
import SliderFace from "./components/el-slide-menu/slider_face.vue";

@Component({
  name: "Slider",
  components: {
    Menu,
    SliderFace,
  },
})
export default class Slider extends Vue {
  public faceSrc: string = "";
  public username: string = "";
  @State public fold: any;
  @Mutation("changeActive") public changeActive: any;
  public menuSelect(this: any, index: string, indexPath: string[]) {
    this.changeActive({ to: index, active: index });
  }
  public select(this: any, value: any) {
    let i = {
      index: value,
    };
    this.menuSelect(value.index, value.indexPath);
  }
  public mounted() {
    this.faceSrc = window.localStorage.lops_portrait;
    this.username = window.localStorage.lops_username;
  }
}
</script>
<style lang="sass" scoped>
</style>