<template>
  <div class="tool">
    <div class="item">
      <Language />
    </div>
    <div class="item">
      <Notice />
    </div>
  </div>
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
import Language from "./components/selectLanguage.vue";
import Notice from "./components/notice.vue";
@Component({
  components: {
    Language,
    Notice,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.tool {
  display: flex;
  justify-content: space-around;
  .item {
    margin-left: 20px;
  }
}
</style>