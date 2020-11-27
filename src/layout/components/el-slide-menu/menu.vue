<template>
  <el-menu
    :default-active="G_active"
    :default-openeds="open"
    class="menu-slide"
    :collapse="isCollapse"
    :collapse-transition="false"
    :background-color="backgoundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    unique-opened
    ref="menu"
  >
    <menu-item
      v-for="route in source"
      :key="route.path"
      :item="route"
      :base-path="route.path"
      :is-collapse="false"
    ></menu-item>
  </el-menu>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import routesConfigs from "../../../router/default";
import { PermissionModule } from "@/store/modules/permission";
import MenuItem from "./item.vue";
import style from "@/assets/common/settings.scss";
import api from "@/api";
@Component({
  components: {
    MenuItem,
  },
})
export default class Menu extends Vue {
  @Prop() public active!: any;
  get G_active() {
    return this.active;
  }
  @Prop() public open: any;
  @Prop() public isCollapse!: boolean;
  @Prop() public changeActive: any;
  @Prop() public router: any;
  get textColor() {
    return style.menuTextColor;
  }
  get activeTextColor() {
    return style.menuActiveColor;
  }
  get backgoundColor() {
    return style.menuBackgroundColor;
  }
  get source() {
    return PermissionModule.routes;
  }
  public create(this: any) {}
  public mounted(this: any) {}
  @Watch("active")
  public act(o: any, n: any) {}
  public hanler(this: any) {}
  public selectMenu(this: any, index: string, indexPath: string[]) {
    this.$emit("select", { index, indexPath });
  }
}
</script>
<style lang="scss">
@import "@/assets/common/settings.scss";
</style>