<template>
  <div class="slide">
    <slider-logo v-if="showLogo" title="api-element-admin" :collapse="isCollapse" />
    <!-- <sliderFace class="slide__face" :circleUrl="faceSrc" :username="username" :fold="fold"></sliderFace> -->
    <Menu @select="select" :collapse="isCollapse"></Menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import Menu from './components/el-slide-menu/menu.vue';
import SliderFace from './components/el-slide-menu/slider_face.vue';
import sliderLogo from './components/slideLogo/slideLogo.vue';
import setting from '../setting';

@Component({
  name: 'Slider',
  components: {
    Menu,
    SliderFace,
    sliderLogo,
  },
})
export default class Slider extends Vue {
  get isCollapse() {
    return this.fold;
  }
  public faceSrc: string = '';
  public username: string = '';
  public showLogo: boolean = true;
  @State public fold: any;
  @Mutation('changeActive') public changeActive: any;
  @Watch('fold')
  public W_fold(this: any, value: boolean) {
    this.isCollapse = value;
  }
  public menuSelect(this: any, index: string, indexPath: string[]) {
    this.changeActive({ to: index, active: index });
  }
  public select(this: any, value: any) {
    const i = {
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