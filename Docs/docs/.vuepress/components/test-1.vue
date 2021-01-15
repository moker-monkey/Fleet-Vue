<template>
  <div class="red-center-text">
      <p>{{ message }}</p>
      <el-input v-model="message" placeholder="Input something..."></el-input>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  public message: string = 'hello world'
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>