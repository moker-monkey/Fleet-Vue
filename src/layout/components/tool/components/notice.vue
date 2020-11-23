<template>
  <el-popover placement="bottom" width="300" trigger="hover">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
    <api-icon
      style="font-size: 14px"
      slot="reference"
      class="icon-size-small"
      type="font"
      name="fa fa-bell-o"
    ></api-icon>
  </el-popover>
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
import api from "@/api";

@Component
export default class extends Vue {
  public activities: any = [];
  mounted() {
    api.notice.GET().then((res: any) => {
      this.activities = res.data.results.message;
    });
  }
}
</script>
<style lang="scss" scoped>
</style>