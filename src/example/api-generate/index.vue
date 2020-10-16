<template>
  <el-container class="api-wrap">
    <el-header class="header">
      <el-page-header @back="goBack" content="api管理页面"> </el-page-header>
    </el-header>
    <el-main>
      <div class="fun">
        <el-button>新增api</el-button>
        <el-button>导出全部</el-button>
        <el-button>验证请求值</el-button>
        <el-button>验证返回值</el-button>
      </div>
      <el-table :data="apiList">
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="url" label="url"></el-table-column>
        <el-table-column prop="key" label="key"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column prop="isUseMock" label="启用mock" width="100px">
          <template v-slot="scope">
            <el-tag :type="scope.row.isUseMock ? 'warning' : 'info'">{{
              scope.row.isUseMock ? "启用" : "关闭"
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="alreadyMethod" label="请求方式">
          <template v-slot="scope">
            <el-tag
              effect="dark"
              v-for="i in scope.row.alreadyMethod"
              :key="i"
              :type="calcMethodTagType(i)"
              >{{ i }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column width="120px" label="操作">
          <template v-slot="scope">
            <el-tooltip effect="dark" content="返回值管理">
              <el-button
                size="mini"
                circle
                type="primary"
                @click="getCurrentApi(scope.row)"
                >R</el-button
              >
            </el-tooltip>
            <el-tooltip effect="dark" content="请求参数管理">
              <el-button size="mini" circle type="primary">P</el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-dialog :visible.sync="showResponse" width="80%" title="返回值管理">
      <el-tabs tab-position="left">
        <el-tab-pane label="GET">
          <el-tabs>
            <el-tab-pane label="请求返回">
              <!-- <CodeMirror :value="currentTabsData.GET" /> -->
            </el-tab-pane>
            <el-tab-pane label="Mock">
              <div class="mock">
                <div class="header"></div>
                <div class="content">
                  <div class="mock-generate">
                    <CodeMirror v-model="currentTabsData.GET" />
                  </div>
                  <el-button @click="generateMock('GET')"
                    >>>></el-button
                  >
                  <div class="mock-generate">
                    <CodeMirror :value="mockGenerateData.GET" readonly />
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="POST">POST</el-tab-pane>
        <el-tab-pane label="PUT">PUT</el-tab-pane>
        <el-tab-pane label="PATCH">PATCH</el-tab-pane>
        <el-tab-pane label="DELETE">DELETE</el-tab-pane>
      </el-tabs>
    </el-dialog>
  </el-container>
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
// api生成页面能够直接读取mock的数据的返回格式，并展示出来，可以生成新的mock数据结构
import CodeMirror from "./components/js-codemirror.vue";
import Mock from "mockjs";
import MockGenerate from "./components/mock-generate.vue";

@Component({
  components: {
    CodeMirror,
    MockGenerate,
  },
})
export default class extends Vue {
  public inner_api: any = api;
  public apiList: any[] = [];
  public showResponse: boolean = false;
  public currentApi!: any;
  public mockGenerateData: any = {
    GET: {},
    POST: {},
    PUT: {},
    PATCH: {},
    DELETE: {},
  };
  public currentTabsData: any = {
    GET: {},
    POST: {},
    PUT: {},
    PATCH: {},
    DELETE: {},
  };
  public getMockGenerateData() {
    return {
      GET: this.currentTabsData.GET,
      POST: this.currentTabsData.POST,
      PUT: this.currentTabsData.PUT,
      PATCH: this.currentTabsData.PATCH,
      DELETE: this.currentTabsData.DELETE,
    };
  }
  public mounted() {
    for (let i in this.inner_api) {
      if (this.inner_api[i].mock) {
        // 找出所有mock的实例
        this.inner_api[i]["key"] = i;
        this.apiList.push(this.inner_api[i]);
      }
    }
  }
  public generateMock(method: string) {
    console.log("this.currentTabsData", this.currentTabsData);
    this.$set(
      this.mockGenerateData,
      method,
      Mock.mock(this.currentTabsData[method])
    );

    // this.mockGenerateData[method] = Mock.mock(this.currentTabsData[method]);
    console.log(this.mockGenerateData[method]);
  }
  public getCurrentApi(data: any) {
    this.currentApi = data;
    this.showResponse = true;
    for (let i of data.mock) {
      this.currentTabsData[i.methods] = i.schema;
    }
    console.log("currentTabsData", this.currentTabsData);
  }
  public calcMethodTagType(methods: string) {
    switch (methods) {
      case "GET":
        return "success";
      case "POST":
        return "";
      case "PUT":
        return "info";
      case "PATCH":
        return "warning";
      case "warning":
        return "danger";
    }
  }
  public goBack() {
    this.$router.push({ path: "/" });
  }
}
</script>
<style lang="scss" scoped>
.api-wrap {
  .header {
    display: flex;
    align-items: center;
  }
  .content {
    display: flex;
    justify-content: space-between;
    .mock-generate {
      width: 45%;
    }
  }
}
</style>