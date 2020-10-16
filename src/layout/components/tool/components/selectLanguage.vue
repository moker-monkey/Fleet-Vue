<template>
  <el-dropdown @command="handleSetLanguage">
    <api-icon
      class="icon-size-small"
      type="font"
      name="fa fa-language"
    ></api-icon>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language === 'zh'"
        >中文</el-dropdown-item
      >
      <el-dropdown-item command="en" :disabled="language === 'en'"
        >English</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
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
import { LayoutModule } from "@/store/modules/layout";

@Component
export default class extends Vue {
  get language() {
    return LayoutModule.language;
  }

  private handleSetLanguage(lang: string) {
    this.$i18n.locale = lang;
    LayoutModule.SetLanguage(lang);
    this.$message({
      message: "Switch Language Success",
      type: "success",
    });
  }
}
</script>
<style lang="scss" scoped>
.tool {
  width: 200px;
  height:100%;
  line-height: 50px;
  background: #eee;
}
</style>