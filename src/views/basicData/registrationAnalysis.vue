<template>
  <el-row class="wrap">
    <el-row class="header">
      <search-bar @search="handler_search" :showList="['channel']"></search-bar>
    </el-row>
    <card-group></card-group>
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
} from 'vue-property-decorator';

import searchBar from '../components/searchBar/searchBar.vue';
import cardGroup from './cardGroup.vue';

@Component({
  components: {
    searchBar,
    cardGroup,
  },
})
export default class extends Vue {

  public handler_search(value: any) {
    console.log(value);
  }
}
</script>
<style lang="scss" scoped>
.header {
  margin: 10px 0;
}
// .content-item:not(:first-child) {
//   margin-top: 40px;
// }

</style>