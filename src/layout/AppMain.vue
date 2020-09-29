<template>
  <section class="app-main">
    
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { TagsViewModule } from '@/store/modules/tags-view';

@Component({
  name: 'AppMain',
})
export default class extends Vue {
  get cachedViews() {
    return TagsViewModule.cachedViews;
  }

  get key() {
      console.log(this.$route.path)
      return this.$route.path;
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 92px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
