<template>
  <el-row class="window">
    <el-row class="header">
      <el-col class="title" :span="4">
        <el-page-header
          v-if="back"
          @back="goback"
          :content="title"
        ></el-page-header>
        <span v-text="title"></span>
      </el-col>
      <el-col class="tool" :span="20" v-show="showTool">
        <slot name="tool"></slot>
      </el-col>
    </el-row>
    <el-row class="content">
      <slot></slot>
    </el-row>
  </el-row>
</template>
<script lang='ts'>
/**
 * 有两种head，带返回和不带返回的，带返回的话
 */

import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop({ default: "账户信息" })
  public title!: string;
  @Prop({ default: false })
  public back!: boolean;
  @Prop({ default: true })
  public showTool?: boolean;
  @Prop()
  public backUrl?: string;

  public goback() {
    if (this.backUrl) {
      this.$router.push(this.backUrl);
      return;
    } else {
      this.$router.go(-1);
      return;
    }
  }
}
</script>

<style scoped lang="scss">
.window {
  height: 100%;
  width: 100%;
  padding: 0 20px;
  background: #f7f9fa;
  .header {
    padding: 16px 0;
    line-height: 28px;
    .title {
      font-size: 20px;
      color: #475669;
      font-weight: 600;
    }
  }
  .content {
    height: 100%;
    padding-bottom: 20px;
  }
}
</style>
