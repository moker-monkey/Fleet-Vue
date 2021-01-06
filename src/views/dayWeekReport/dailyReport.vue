<template>
  <el-row class="reportWrap">
    <el-col class="title">
      <div class="title-item left">
        <div class="line"></div>
        <div class="small-line">
          <div class="mask"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
        </div>
      </div>
      <div class="title-item center">
        <div class="left">
          <div class="xiezhedetu"></div>
          <div class="henxian"></div>
          <div class="move-arrow">
            <div class="statu1" v-if="moveArrowFlag">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
            <div class="statu2" v-else>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </div>
        </div>
        <div class="text">运营日报</div>
        <div class="bottom"></div>
        <div class="right">
          <div class="xiezhedetu"></div>
          <div class="henxian"></div>
          <div class="move-arrow">
            <div class="statu1" v-if="moveArrowFlag">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
            <div class="statu2" v-else>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="title-item right">
        <div class="line"></div>
        <div class="small-line">
          <div class="mask"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
          <div class="small-line-item"></div>
        </div>
      </div>
    </el-col>
    <el-col class="content">
      <el-col class="content-item left">
          <div class="chart-wrap"></div>
      </el-col>
      <el-col class="content-item center"></el-col>
      <el-col class="content-item right"></el-col>
    </el-col>
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

@Component
export default class extends Vue {
  public moveArrowFlag: boolean = true;

  public mounted() {
    setInterval(() => {
      this.moveArrowFlag = !this.moveArrowFlag;
    }, 200);
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/common/placeVariable";
$header-border-color: #{#33cbfe};
$header-font-color: #{#ffcc00};
$header-arrow-light: #{#66ffff};
$header-arrow-gray: #{#26455c};

.reportWrap {
  width: 100%;
  height: 100%;
  background: #171733;
  .title {
    width: 100%;
    height: 80px;
    // text-align: center;
    line-height: 80px;
    position: relative;
    display: flex;
    justify-content: center;

    .center {
      width: 2400px;
      position: relative;
      flex-grow: 2;
      display: flex;
      justify-content: center;
      .left {
        width: 25%;
        height: 100%;
        position: relative;

        .xiezhedetu {
          position: absolute;
          width: 4px;
          left: -7px;
          transform: rotate(45deg);
          height: 75%;
          top: 35%;
          background: $header-border-color;
          border-radius: 50px;
        }
        .henxian {
          position: absolute;
          top: 44%;
          left: 14px;
          width: 94%;
          height: 4px;
          border-radius: 50px;
          background: $header-border-color;
        }
        .move-arrow {
          position: absolute;
          top: 56%;
          right: 10px;
          height: 30px;
          width: 160px;
          .statu1 {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .item {
              width: 0;
              height: 0;
              border-top: 10px solid transparent;
              border-left: 20px solid $header-arrow-gray;
              border-bottom: 10px solid transparent;
            }
            .item:nth-child(odd) {
              border-left-color: $header-arrow-light;
            }
          }
          .statu2 {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .item {
              width: 0;
              height: 0;
              border-top: 10px solid transparent;
              border-left: 20px solid $header-arrow-gray;
              border-bottom: 10px solid transparent;
            }
            .item:nth-child(even) {
              border-left-color: $header-arrow-light;
            }
          }
        }
      }
      .right {
        width: 25%;
        height: 100%;
        position: relative;
        .xiezhedetu {
          position: absolute;
          width: 4px;
          transform: rotate(-45deg);
          height: 75%;
          top: 35%;
          right: -7px;
          background: $header-border-color;
          border-radius: 50px;
        }
        .henxian {
          position: absolute;
          top: 44%;
          right: 14px;
          width: 94%;
          height: 4px;
          border-radius: 50px;
          background: $header-border-color;
        }
        .move-arrow {
          position: absolute;
          top: 56%;
          right: 10px;
          height: 30px;
          width: 160px;
          .statu1 {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .item {
              width: 0;
              height: 0;
              border-top: 10px solid transparent;
              border-right: 20px solid $header-arrow-gray;
              border-bottom: 10px solid transparent;
            }
            .item:nth-child(odd) {
              border-right-color: $header-arrow-light;
            }
          }
          .statu2 {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .item {
              width: 0;
              height: 0;
              border-top: 10px solid transparent;
              border-right: 20px solid $header-arrow-gray;
              border-bottom: 10px solid transparent;
            }
            .item:nth-child(even) {
              border-right-color: $header-arrow-light;
            }
          }
        }
      }
      .text {
        text-align: center;
        width: 50%;
        display: inline-block;
        height: 80px;
        font-size: 36px;
        font-weight: 900;
        border: 4px solid $header-border-color;
        color: $header-font-color;
        border-radius: 40px;
        flex-grow: 2;
        // padding: 0 40px;
      }
      .bottom {
        width: 100%;
        height: 6px;
        position: absolute;
        bottom: -10px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../../assets/img/reports/headerTitleBottom.svg");
      }
    }
    & > .left {
      width: 100%;
      height: 100%;
      position: relative;
      .line {
        position: absolute;
        bottom: 0;
        left: -22px;
        width: 100%;
        height: 4px;
        border-radius: 50px;
        background: $header-border-color;
      }
      .small-line {
        position: absolute;
        width: 100%;
        height: 40px;
        bottom: 6px;
        display: flex;
        padding-right: 20px;
        justify-content: flex-end;
        .small-line-item {
          width: 40px;
          height: 100%;
          transform: rotate(-45deg);
          background-position: center;
          background-repeat: no-repeat;
          background-image: url("../../assets/img/reports/headLeftRight.svg");
        }
        .mask {
          position: absolute;
          z-index: 2;
          right: 0;
          width: 60%;
          height: 40px;
          background: linear-gradient(to right, #171733, transparent);
        }
      }
    }
    & > .right {
      width: 100%;
      height: 100%;
      position: relative;
      .line {
        position: absolute;
        bottom: 0;
        right: -22px;
        width: 100%;
        height: 4px;
        border-radius: 50px;
        background: $header-border-color;
      }
      .small-line {
        position: absolute;
        width: 100%;
        height: 40px;
        bottom: 6px;
        display: flex;
        padding-left: 20px;
        justify-content: flex-start;
        .small-line-item {
          width: 40px;
          height: 100%;
          transform: rotate(45deg);
          background-position: center;
          background-repeat: no-repeat;
          background-image: url("../../assets/img/reports/headLeftRight.svg");
        }
        .mask {
          position: absolute;
          z-index: 2;
          left: 0;
          width: 60%;
          height: 40px;
          background: linear-gradient(to left, #171733, transparent);
        }
      }
    }
  }
  .content{
    
  }
}
</style>