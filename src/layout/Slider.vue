<template>
  <div :class="{ slide: true, notCollapse: !isCollapse }">
    <slider-logo
      v-if="showLogo"
      title="api-element-admin"
      :collapse="isCollapse"
    />
    <Menu
      @select="select"
      :isCollapse="isCollapse"
      :active="currentActive"
    ></Menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import Menu from "./components/el-slide-menu/menu.vue";
import sliderLogo from "./components/el-slide-menu/slideLogo.vue";
import setting from "../setting";
import { TagsViewModule } from "@/store/modules/tags-view";
import { LayoutModule } from "../store/modules/layout";

@Component({
  name: "Slider",
  components: {
    Menu,
    sliderLogo,
  },
})
export default class Slider extends Vue {
  get isCollapse() {
    return LayoutModule.isCollapase;
  }
  public faceSrc: string = "";
  public username: string = "";
  public showLogo: boolean = true;
  get currentActive() {
    return this.$route.meta.active || this.$route.path;
  }
  // @Mutation("changeActive") public changeActive: any;
  public menuSelect(this: any, index: string, indexPath: string[]) {
    // this.changeActive({ to: index, active: index });
  }
  public select(this: any, value: any) {
    const i = {
      index: value,
    };
    this.menuSelect(value.index, value.indexPath);
  }
  public mounted() {
    this.faceSrc = window.localStorage.lops_portrait;
    this.username = window.localStorage.lops_username;
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/common/settings.scss";
.slide {
  height: 100%;
  background-color: $slide-background-color;
  
}
</style>