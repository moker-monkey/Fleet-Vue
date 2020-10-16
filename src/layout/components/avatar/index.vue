<template>
  <el-dropdown @command="handlerCommand">
    <div class="face">
      <img :src="avatar" />
      <span>xiaochangming</span>
      <api-icon size="small" type="font" name="fa fa-angle-down" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
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
import { UserModule } from "@/store/modules/user";
import toggleIcon from "@/components/toggleIcon/index.vue";

@Component({
  components: {
    toggleIcon,
  },
})
export default class extends Vue {
  public avatar: string = UserModule.avatar;
  private async handlerCommand(command: string) {
    if (command === "logout") {
      await UserModule.LogOut();
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
}
</script>
<style lang="scss" scoped>
.face {
  span {
    vertical-align: middle;
    margin-left: 10px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
}
</style>