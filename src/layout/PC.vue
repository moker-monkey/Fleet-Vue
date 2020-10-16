<template>
  <el-container class="layout-global-pc">
    <Slider />
    <el-container class="layout-content-wrap-pc">
      <el-header class="layout-header-pc" :height="headerHeight">
        <Header />
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