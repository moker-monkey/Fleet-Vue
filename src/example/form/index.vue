<template>
  <fleet-form :api="$api.empty" @commit="commit" :options="{ type: 'GET' }">
  </fleet-form>
</template>
<script lang="ts">
import FleetForm from '@/api/Form';
import {
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Watch,
  Component,
} from 'vue-property-decorator';
import api from '@/api';

@Component
export default class extends Vue {
  public ruleForm: any;
  get params() {
    return Object.assign(JSON.parse(JSON.stringify(this.ruleForm)), {
      teacher: JSON.stringify(this.ruleForm.teacher),
    });
  }
  public commit(val: any) {
    console.log(val);
    this.$api.empty.GET(val);
  }
  public createForm() {
    // new FleetForm(api.empty).createForm();
  }
  public mounted() {
    // this.createForm();
  }
}
</script>
<style lang="scss" scoped>
</style>