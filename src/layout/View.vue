<template>
  <div class="views">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>
<script lang="ts">
// view应该接受动态设置
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ITagView } from '@/store/modules/tags-view';
import { TagsViewModule } from '@/store/modules/tags-view';
export default class extends Vue {
  @Prop({ default: () => [] })
  public visitedViews: ITagView[] = [];

  get cachedViews() {
    return TagsViewModule.cachedViews;
  }
  get key() {
    return this.$route.path;
  }

  public mounted() {
    console.log(this.visitedViews);
  }
}
</script>
<style lang="scss" scoped>
.views {
  height: 100%;
}
.routers {
  width: 100%;
  height: 100%;
}
</style>
