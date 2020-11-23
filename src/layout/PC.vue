<template>
  <el-container class="layout-global-pc">
    <Slider />
    <el-container class="layout-content-wrap-pc">
      <el-header class="layout-header-pc" :height="headerHeight">
        <Header :notNeedTools="['crumbs']" />
        <TagsView :routes="routes" :visitedViews="visitedViews" />
      </el-header>
      <div class="layout-content-pc">
        <Views :visitedViews="visitedViews" />
      </div>
    </el-container>
  </el-container>
</template>
<script lang="ts">
// PC 端采用flex，填充式布局，整个页面会随着分辨率的大小而变化，为了防止样式变乱需要设置最小值
// 最好的响应式布局，必须兼顾到设计稿的精准度，以及使用方便度，那么可以使用媒体查询，将设计稿尺寸按照某个公式去算出当前所适应的方式
// 有多种适配方式，pc端与移动端不一样，pc端上应该是百分比适配，例如一个卡片的宽度在设计稿上本来应该是200px，在更大的尺寸上应该是300px,在更小的尺寸上应该是显示100px,不会小于最小值，在pc端上一切分辨率与像素比都是1：1也就是说，在设计稿的分辨率下，将获得最大化的实际效果体验，因此在开发时最好将分辨率设置为设计稿分辨率，如果实际分辨率大于设计稿时，可以通过两侧留白来将宽度定死在最优分辨率，如果宽度小于设计稿时则通过整体字体的缩小来达到内容变小，整体布局保持原状的目的，但是我们在pc端上通常使用百分比布局来获得最大化的展示空间，保证信息最大化，一屏幕能够展示完整。
// 因此移动端有留白和改变字体两种自适应方式
// pc端有几种布局，滚动画布式布局，后端信息化布局，商业布局，每一种布局要获得较好的效果，不能够只使用某种单一的布局方式，而是多种布局方式的组合，而响应式布局的核心是flex弹性盒子
//
import {
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Watch,
  Component,
} from "vue-property-decorator";
import Slider from "./Slider.vue";
import Header from "./Header.vue";
import Views from "./View.vue";

import TagsView from "./components/tagsView/index.vue";
import style from "@/assets/common/settings.scss";
import { SettingsModule } from "../store/modules/settings";
import { PermissionModule } from "@/store/modules/permission";
import { TagsViewModule, ITagView } from "@/store/modules/tags-view";

@Component({
  components: {
    Slider,
    Views,
    Header,
    TagsView,
  },
})
export default class extends Vue {
  public slideWidth: string = style.sliderWidth;
  public headerHeight: string = style.headerHeight;
  public tagsHeight: string = style.tagsHeight;
  public collapsed: boolean = false;
  get showSettings() {
    return SettingsModule.showSettings;
  }
  get showTagsView() {
    return SettingsModule.showTagsView;
  }
  get fixedHeader() {
    return SettingsModule.fixedHeader;
  }
  get visitedViews() {
    return TagsViewModule.visitedViews;
  }

  get routes() {
    return PermissionModule.routes;
  }
}
</script>
<style lang="scss" scoped>
</style>