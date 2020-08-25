<template>
  <el-container class="global">
    <el-header></el-header>
    <el-container class="asideWrap">
      <div class="myAside">
        <Slider />
      </div>
      <el-container class="content">
        <el-main class="main">
          <transition name="slide-fade">
            <div class="loadingWrap" v-if="loading">
              <Loading />
            </div>
          </transition>
          <Views />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { Vue, Watch, Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { DeviceType, LayoutModule } from "../store/modules/layout";
import { SettingsModule } from "@/store/modules/settings";
import ResizeMixin from ".//mixin/resize";
import Slider from "./Slider.vue";
import Views from "./View.vue";
import Loading from "./components/loading/index.vue";

@Component({
  components: {
    Slider,
    Loading,
    Views,
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
  private handleClickOutside() {
    LayoutModule.CloseSideBar(false);
  }
}
</script>
<style lang="sass" scoped>
</style>