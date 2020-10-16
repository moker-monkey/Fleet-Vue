<template>
  <div class="tool">
    <div class="item">
      <Language />
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

@Component({
  components: {
    Language,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.tool {
  .item {
      margin-left: 20px;
  }
}
</style>