/* 通过api进行各功能的协调
api: api对象
*/
<template>
  <div class="api-table" ref="table">
    <el-row class="query-header">
      <el-col :span="19" class="header">
        <slot name="select"></slot>
      </el-col>
      <el-col :span="4" class="clearfix fixed-search">
        <el-input
          v-if="isNeedSearch"
          v-model="searchString"
          :clearable="true"
          placeholder="回车搜索表格内容"
          size="mini"
          @keyup.enter.native="querySearch"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="content-wrap">
      <el-col class="content">
        <el-table
          :data="tableData"
          ref="table"
          class="table"
          :row-key="rowKey"
          empty-text="暂无数据"
          :height="height"
          @selection-change="selectAll"
          @select="select"
        >
          <slot></slot>
        </el-table>
      </el-col>
    </el-row>
    <el-row class="clearfix pagination-wrap">
      <el-col class="pagination">
        <el-pagination
          :layout="paginLayout"
          :total="total"
          :page-size="pageSize"
          @current-change="changePage"
          :current-page.sync="currentPage"
          class="pagination"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import resize from "../../../mixins/resize";

@Component
export default class ApiTable extends mixins(resize, Vue) {
  @Prop() private api!: any;

  @Prop({ default: 400 }) private visibilityHeight!: number;

  @Prop({ default: "" }) private res_data_field!: string;

  @Prop({ default: 0 }) private totalValue!: number;
  @Watch("totalValue") private watchTotal(this: any, value: any) {
    this.total = value;
  }
  @Prop() private current_row_key: any;

  @Prop({ default: false }) private refresh!: boolean;
  @Prop({ default: false }) private refresh_deep!: boolean;

  @Prop({
    default() {
      return {};
    },
  })
  private params!: any;

  @Prop() private postfix!: any;

  @Prop({ default: true }) private initLoad!: boolean;

  @Prop({ default: "search" }) private searchField?: string;

  @Prop({ default: "page" }) private pageField!: string;

  @Prop({ default: false }) needSearch?: boolean;

  @Prop({
    default: "",
  })
  private selectionField?: string;

  @Prop() private selectionList?: any[];

  @Prop({
    default: "prev, pager, next",
  })
  public paginLayout?: string;

  @Prop({ default: "id" })
  private rowKey!: string;

  @Watch("refresh_deep")
  private refreshDeep(val: any, oldVal: any) {
    this.searchString = "";
    this.querySearch();
  }
  @Watch("refresh")
  private refreshData(val: any) {
    this.querySearch(this.currentPage);
  }
  @Prop({ default: true }) private isNeedSearch!: boolean;

  @Prop() id?: number;
  public searchString: string = "";

  public pageSize: number = 15;

  public total = 0;

  public tableData: any = [];

  public currentPage: number = 1;
  public height = 800;
  private visible = false;

  public getData(this: any, params: object = {}, cb?: any) {
    let promise: any = {};
    if (this.id && this.postfix) {
      promise = this.api.GET(params, this.id, this.postfix);
    } else if (this.id) {
      promise = this.api.GET(params, this.id);
    } else {
      promise = this.api.GET(params);
    }
    promise.then((res: any) => {
      this.tableData = res.data.results;
      this.total = res.data.count ? res.data.count : this.totalValue;
      setTimeout(() => {
        if (this.selectionField) {
          this.setSelection(this.tableData);
        }
        if (this.selectionList) {
          this.initSelection(this.selectionList);
        }
      });
      if (cb) {
        cb(res.data);
      } else {
        this.$emit("tableInit", this.tableData);
      }
    });
  }
  public setHeight(this: any) {
    setTimeout(() => {
      let el = this.$refs.table as HTMLElement;
      this.height = el.offsetHeight - 150;
    }, 400);
  }
  public resize(this: any) {
    this.setHeight();
  }
  public select(this: any, selection: any, row: any) {
    this.$emit("select", row);
  }
  public selectAll(this: any, selection: any) {
    this.$emit("selectAll", {
      selection,
      allCount: this.tableData.length,
    });
  }
  public changeSelection() {}
  public initSelection(this: any, arr: any) {
    arr.forEach((element: any) => {
      this.tableData.forEach((item: any) => {
        if (element.code === this.code) {
          this.$refs.table.toggleRowSelection(item);
        }
      });
    });
  }
  public setSelection(this: any, data: any) {
    data.forEach((item: any) => {
      if (item[this.selectionField]) {
        this.$refs.table.toggleRowSelection(item);
      }
    });
  }

  mounted() {
    this.setHeight();
    if (this.initLoad) {
      const params: any = {};
      params[this.pageField] = this.currentPage;
      Object.assign(params, this.params);
      this.getData(params);
    }
  }
  public del(this: any, id: any) {
    this.api
      .DELETE(id)
      .then((res: any) => {
        this.$message.success("删除成功");
        this.refresh = !this.refresh;
      })
      .catch((error: any) => {
        console.log(error.response);
      });
  }
  public changePage(this: any, currentPage: number) {
    const params: any = {};
    params[this.pageField] = currentPage;
    if (this.searchField) {
      this.$set(params, this.searchField, this.searchString);
    }
    Object.assign(params, this.params);
    this.getData(params, (res: any) => {
      if (this.selectionList) {
        this.initSelection(this.selectionList);
      }
      this.$emit("changePage", res);
    });
  }
  public querySearch(this: any, currentPage?: any) {
    this.currentPage = currentPage ? currentPage : "1";
    const params: any = {};
    if (this.pageField) {
      this.$set(params, this.pageField, this.currentPage);
    }
    if (this.searchField) {
      this.$set(params, this.searchField, this.searchString);
    }
    params[this.pageField] = this.currentPage;
    Object.assign(params, this.params);
    this.getData(params);
  }
  beforeDestroy() {}
}
</script>

<style lang="scss" scoped>
@import "@/assets/custom-sass/index";

.api-table {
  height: 100%;
  overflow: auto;
  background-color: #fff;
}

.fixed-search {
  float: right;
  margin-right: 20px;
}
.query-header {
  padding: 10px 10px 0;
  @include clearfix;
}
.pagination {
  float: right;
  margin-left: 40px;
}
</style>