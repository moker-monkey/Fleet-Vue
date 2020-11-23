<template>
  <fragment v-if="!item.meta || !item.meta.hidden">
    <template
      v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children"
    >
      <item-link
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <api-icon
            :type="theOnlyOneChild.meta.icon_type === 'svg' ? 'svg' : 'font'"
            :name="theOnlyOneChild.meta.icon"
          ></api-icon>
          <span slot="title" style="margin-left: 4px">{{
            $t("route." + theOnlyOneChild.meta.title)
          }}</span>
        </el-menu-item>
      </item-link>
    </template>
    <template v-else>
      <el-submenu :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">
          <api-icon
            :type="item.meta.icon_type === 'svg' ? 'svg' : 'font'"
            :name="item.meta.icon"
          ></api-icon>
          <span slot="title" style="margin-left: 4px">{{
            $t("route." + item.meta.title)
          }}</span>
        </template>
        <template v-if="item.children">
          <menu-item
            v-for="child in item.children"
            :key="child.path"
            :item="child"
            :base-path="resolvePath(child.path)"
          ></menu-item>
        </template>
      </el-submenu>
    </template>
  </fragment>
</template>
<script lang="ts">
import path from "path";
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { isExternal } from "@/utils/validate";
import itemLink from "./itemLink.vue";
import { RouteConfig } from "vue-router";
@Component({ name: "MenuItem", components: { itemLink } })
export default class MenuItem extends Vue {
  @Prop()
  public item: any;
  @Prop({ default: "" }) private basePath!: string;
  public hasOneShowingChild(children: any = [], parent: any) {
    const showingChildren = children.filter((item: any) => {
      if (item.meta && !item.meta.hidden) {
        return true;
      }
    });
    if (showingChildren.length === 0) {
      return true;
    }
    return false;
  }
  get alwaysShowRootMenu() {
    // 总是显示根路由
    if (this.item.meta && this.item.meta.alwaysShow) {
      return true;
    }
    return false;
  }
  get showingChildNumber() {
    if (this.item.children) {
      const showingChildren = this.item.children.filter((item: RouteConfig) => {
        if (item.meta && item.meta.hidden) {
          return false;
        } else {
          return true;
        }
      });
      return showingChildren.length;
    }
    return 0;
  }
  get theOnlyOneChild() {
    // 如果没有设置meta.alwaysShow为true，那么当只有一个child时就显示child，
    if (this.showingChildNumber > 1) {
      return null;
    }
    if (this.item.children) {
      for (const child of this.item.children) {
        if (!child.meta || !child.meta.hidden) {
          return child;
        }
      }
    }
    return { ...this.item, path: "" };
  }
  private resolvePath(routePath: string) {
    // 只要不是外部链接，就将当前的routePath和this.basePath组合起来
    if (isExternal(routePath)) {
      return routePath;
    }
    if (isExternal(this.basePath)) {
      return this.basePath;
    }
    return path.resolve(this.basePath, routePath);
  }
}
</script>