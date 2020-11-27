<template>
  <el-row type="flex" :gutter="30" class="doc" >
    <el-col :span="6"><Base /></el-col>
    <el-col :span="6"><Base /></el-col>
    <el-col :span="6"><Base /></el-col>
    <el-col :span="6"><Base /></el-col>
  </el-row>
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
import Base from "./base.vue";

@Component({
  components: {
    Base,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.doc {
  width: 100%;
}
</style>