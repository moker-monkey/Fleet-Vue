<template>
  <el-container class="framework">
    <transition name="slide-fade">
      <div class="loading-wrap" v-if="loading">
        <Loading />
      </div>
    </transition>
    <PC />
  </el-container>
</template>
<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { DeviceType, LayoutModule } from '../store/modules/layout';
import { SettingsModule } from '../store/modules/settings';
import ResizeMixin from './mixin/resize';
import PC from './PC.vue';
import Loading from './components/loading/index.vue';
/*
layout 的3种布局方式：
1. PC端布局，有(header(fix,no-fix))、(slider(show))、(tagsView(hidden,show)、views(pc,Horizontal，vertical))
2. 移动端，有（header(fix,no-fix)）、(slider(toggle,show))、(tagsView（hidden,show）、views(mobil，Horizontal，vertical))
3. Pad端，有（header(fix,no-fix)）、(slider(toggle,show))、(tagsView（hidden,show）、views(mobil，Horizontal，vertical))
*/
/*将三端拆分为三个组件是为了更好的复用 */
@Component({
  name: 'Global',
  components: {
    Loading,
    PC,
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

  public loading: boolean = false;

  private handleClickOutside() {
    LayoutModule.CloseSideBar(false);
  }
}
</script>
<style lang="scss" scoped>
</style>