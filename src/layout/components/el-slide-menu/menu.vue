<template>
  <el-menu
    router
    default-active="active"
    :default-openeds="open"
    class="menu-slide"
    :collapse="fold"
    background-color="#fff"
    @select="selectMenu"
    text-color="#474e59"
    active-text-color="#229b72"
    unique-opened
    ref="menu"
  >
    <menu-item v-for="child in source" :key="child.path" :item="child"></menu-item>
  </el-menu>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import routesConfigs from "../../../router/default";
import MenuItem from "./item.vue";
@Component({
  components: {
    MenuItem,
  },
})
export default class Menu extends Vue {
  @Prop() public active: any;
  @Prop() public open: any;
  @Prop() public changeActive: any;
  public source = routesConfigs;
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