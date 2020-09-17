<template>
  <fragment v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) &&!item.hidden">
      <el-menu-item :index="item.path">
        <i :class="item.icon_classname"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu :index="item.path">
        <template slot="title">
          <i :class="item.icon_classname"></i>
          <span slot="title" style="margin-left:4px;">{{item.name}}</span>
        </template>
        <template>
          <menu-item v-for="child in item.children" :key="child.path" :item="child"></menu-item>
        </template>
      </el-submenu>
    </template>
  </fragment>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({ name: 'MenuItem' })
export default class MenuItem extends Vue {
  @Prop()
  public item: any;
  public hasOneShowingChild(children: any = [], parent: any) {
    const showingChildren = children.filter((item: any) => {
      if (item.hidden) {
        return false;
      } else {
        return true;
      }
    });
    if (showingChildren.length === 0) {
      return true;
    }
    return false;
  }
}
</script>