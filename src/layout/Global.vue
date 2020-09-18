<template>
  <el-container id="layout-global">
    <el-aside id="layout-slider" :width="slideWidth">
      <Slider />
    </el-aside>
    <el-container id="layout-content-wrap">
      <el-header id="layout-header" :height="headerHeight">
        <Header />
      </el-header>
      <el-main id="layout-content">
        <transition name="slide-fade">
          <div class="loadingWrap" v-if="loading">
            <Loading />
          </div>
        </transition>
        <Views />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { DeviceType, LayoutModule } from '../store/modules/layout';
import { SettingsModule } from '../store/modules/settings';
import ResizeMixin from './mixin/resize';
import Slider from './Slider.vue';
import Header from './Header.vue';
import Views from './View.vue';
import Loading from './components/loading/index.vue';
import style from '@/assets/common/settings.scss';

@Component({
  components: {
    Slider,
    Loading,
    Views,
    Header,
  },
})
export default class Gloabl extends mixins(ResizeMixin) {
  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === DeviceType.Mobile,
    };
  }

  get showSettings() {
    return SettingsModule.showSettings;
  }
  get showTagsView() {
    return SettingsModule.showTagsView;
  }
  get fixedHeader() {
    return SettingsModule.fixedHeader;
  }
  public slideWidth: string = style.sliderWidth;
  public headerHeight: string = style.headerHeight;
  public loading: boolean = false;
  public collapsed: boolean = false;
  private handleClickOutside() {
    LayoutModule.CloseSideBar(false);
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/common/layout.scss";

</style>