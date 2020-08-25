<template>
  <div class="views">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class Views extends Vue {}
</script>
<style lang="scss" scoped>
.views {
  height: 98%;
  padding-right: 2px;
  overflow: auto;
}
.RouterView {
  height: 100%;
}
</style>
