<template>
  <div class="header">
    <div class="left">
      <Toggle
        :state="isCollapase"
        icon_type="font"
        @change="collapase"
        :name="name"
      />
      <Crumbs v-if="notNeedTools.indexOf('crumbs') == -1" />
    </div>
    <div class="right">
      <Tools />
      <Avatar class="avatar" />
    </div>
  </div>
</template>
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
import { LayoutModule } from "../store/modules/layout";
import Toggle from "../components/toggleIcon/index.vue";
import Crumbs from "./components/breadcrumbs/index.vue";
import Tools from "./components/tool/header.vue";
import Avatar from "./components/avatar/index.vue";

// 实现控制侧边栏，面包屑，全局搜索，通知/更新、刷新、可下拉头像
@Component({
  components: {
    Toggle,
    Crumbs,
    Tools,
    Avatar,
  },
})
export default class Header extends Vue {
  @Prop({
    default: () => {
      return [];
    },
  })
  public notNeedTools?: any[];
  get isCollapase() {
    return LayoutModule.isCollapase;
  }
  public collapase() {
    LayoutModule.setCollapase(!LayoutModule.isCollapase);
  }
  public name = {
    on: "fa fa-indent",
    off: "fa fa-outdent",
  };
}
</script>
<style lang="scss" scoped>
@import "@/assets/common/settings.scss";
.header {
  width: 100%;
  height: $header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $header-color;
  padding: $header-padding;
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    .avatar {
      margin-left: 20px;
    }
  }
}
</style>