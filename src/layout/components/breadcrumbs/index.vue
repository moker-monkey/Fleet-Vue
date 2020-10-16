<template>
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span
          v-if="
            item.redirect === 'noredirect' || index === breadcrumbs.length - 1
          "
          class="no-redirect"
          >{{ $t("route." + item.meta.title) }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{
          $t("route." + item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { pathToRegexp, compile } from "path-to-regexp";
import { Component, Vue, Watch } from "vue-property-decorator";
import { RouteRecord, Route } from "vue-router";

@Component({
  name: "Breadcrumb",
})
export default class extends Vue {
  private breadcrumbs: RouteRecord[] = [];

  @Watch("$route")
  private onRouteChange(route: Route) {
    // if you go to the redirect page, do not update the breadcrumbs
    if (route.path.startsWith("/redirect/")) {
      return;
    }
    this.getBreadcrumb();
  }

  created() {
    this.getBreadcrumb();
  }

  private getBreadcrumb() {
    let matched = this.$route.matched.filter(
      (item) => item.meta && item.meta.title
    );
    const first = matched[0];
    if (!this.isDashboard(first)) {
      matched = [
        { path: "/", meta: { title: "dashboard" } } as RouteRecord, //如果第一个记录不是首页则加上首页
      ].concat(matched);
    }
    this.breadcrumbs = matched.filter((item) => {
      return item.meta && item.meta.title && item.meta.showBreadcrumb !== false;
    });
  }

  private isDashboard(route: RouteRecord) {
    if (route.meta.isHome) {
      return true;
    } else {
      return false;
    }
  }

  private pathCompile(path: string) {
    // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    const { params } = this.$route;
    const toPath = compile(path);
    return toPath(params);
  }

  private handleLink(item: any) {
    const { redirect, path } = item;
    console.log("rrrr", redirect);
    console.log("name", this.$route.name);
    if (redirect) {
      if (redirect !== this.$route.name) {
        this.$router.push(redirect);
        return;
      }
    } else {
      this.$router.push(this.pathCompile(path));
    }
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 20px;
  padding-left: 5px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
// transition
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
<style lang="scss">
.tags-view-container {
  padding-left: 5px;
}
</style>