<template>
  <el-row>
    <el-row type="flex" justify="space-between">
      <el-col>
        <el-date-picker
          v-model="daterange"
          type="daterange"
          value-format="yyyy-MM-dd"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
        ></el-date-picker>
      </el-col>
      <el-col v-if="showList.indexOf('period') !== -1">
        <el-radio-group v-model="period" size="mini" @change="changePeriod">
          <el-radio-button label="day">天</el-radio-button>
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="month">月</el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col v-if="showList.indexOf('frequency') !== -1">
        <el-select v-model="frequency" size="mini">
          <el-option label="一天" :value="1"></el-option>
          <el-option label="两天" :value="2"></el-option>
          <el-option label="三天" :value="3"></el-option>
          <el-option label="四天" :value="4"></el-option>
          <el-option label="五天" :value="5"></el-option>
          <el-option label="六天" :value="6"></el-option>
          <el-option label="七天" :value="7"></el-option>
        </el-select>
      </el-col>

      <el-col v-if="showList.indexOf('frequency_qiang') !== -1">
        <el-select v-model="frequency_qiang" size="mini">
          <el-option label="次日" value="two"></el-option>
          <el-option label="三日" value="three"></el-option>
          <el-option label="七日" value="seven"></el-option>
          <el-option label="十四日" value="fourteen"></el-option>
          <el-option label=" 三十日" value="thirty"></el-option>
        </el-select>
      </el-col>
      <el-col v-if="showList.indexOf('channel') !== -1">
        <el-radio-group v-model="channel" size="mini" @change="changeChannel">
          <el-radio-button label="all">全部</el-radio-button>
          <el-radio-button label="gf">官方</el-radio-button>
          <el-radio-button label="android">Android</el-radio-button>
          <el-radio-button label="ios">Ios</el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col v-if="showList.indexOf('terminal') !== -1">
        <el-radio-group v-model="terminal" size="mini" @change="changeTerminal">
          <el-radio-button label="all">全部</el-radio-button>
          <el-radio-button label="web">Web</el-radio-button>
          <el-radio-button label="android">Android</el-radio-button>
          <el-radio-button label="ios">Ios</el-radio-button>
          <el-radio-button label="pc">Pc</el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :span="4">
        <el-button
          type="primary"
          circle
          plain
          :icon="'iconfont ' + isList ? 'el-icon-search' : 'el-icon-plus'"
          @click="add"
        ></el-button>
      </el-col>
    </el-row>

    <el-row class="selectTag" v-if="isList">
      <template v-for="(v, i) in value">
        <el-tag size="small" closable :key="i" @close="closeTag(v, i)">{{
          calcTagText(v, i)
        }}</el-tag>
      </template>
    </el-row>
  </el-row>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Watch,
  Prop,
  Model,
  Emit,
} from 'vue-property-decorator';
import { dayToMs } from '@/utils/dateHelper';

@Component
export default class extends Vue {
  get header_form() {
    return {
      start_time: this.daterange[0],
      end_time: this.daterange[1],
      channel: this.channel,
      terminal: this.terminal,
      period: this.period,
      frequency: this.frequency,
      frequency_qiang: this.frequency_qiang,
    };
  }
  @Model('change')
  public value!: any[];
  @Prop({
    default: false,
  })
  public isList?: boolean;
  @Prop({
    default() {
      return ['period', 'channel', 'terminal'];
    },
  })
  public showList: any;
  public daterange: any[] = [
    new Date(new Date().getTime() - dayToMs(7)).Format('yyyy-MM-dd'),
    new Date().Format('yyyy-MM-dd'),
  ];
  public channel: string = 'all';
  public terminal: string = 'all';
  public period: string = 'day';
  public frequency: number = 1;
  public frequency_qiang: string = 'two';

  public tag_list: any[] = [];
  @Emit('change')
  public changeSelect(this: any, value: any[]) {
    return value;
  }
  public calcTagText(this: any, v: any, index: number) {
    const text = [
      `图${index}`,
      `【开始：${v.start_time}】`,
      `【结束：${v.end_time}】`,
      this.showList.indexOf('period') !== -1
        ? `【统计周期：${this.createPeriodName(v.period)}】`
        : '',
      this.showList.indexOf('frequency') !== -1
        ? `【统计周期：${this.createFrequencyName(v.frequency)}】`
        : '',
      this.showList.indexOf('frequency_qiang') !== -1
        ? `【统计周期：${this.createFrequencyQiangName(v.frequency_qiang)}】`
        : '',
      this.showList.indexOf('channel') !== -1
        ? `【channel：${this.createCannelName(v.channel)}】`
        : '',
      this.showList.indexOf('terminal') !== -1
        ? `【terminal：${this.createTerminalName(v.terminal)}】`
        : '',
    ];

    return text.join('');
  }
  public createPeriodName(this: any, value: any) {
    switch (value) {
      case 'day':
        return '天';
      case 'week':
        return '周';
      case 'month':
        return '月';
    }
  }
  public createCannelName(this: any, value: any) {
    switch (value) {
      case 'all':
        return '全部';
      case 'gf':
        return '官方';
      case 'android':
        return 'Android';
      case 'ios':
        return 'ios';
    }
  }
  public createTerminalName(this: any, value: any) {
    switch (value) {
      case 'all':
        return '全部';
      case 'Web':
        return 'Web';
      case 'android':
        return 'Android';
      case 'ios':
        return 'ios';
      case 'pc':
        return 'pc';
    }
  }
  public createFrequencyName(this: any, value: any) {
    switch (value) {
      case 1:
        return '一天';
      case 2:
        return '两天';
      case 3:
        return '三天';
      case 4:
        return '四天';
      case 5:
        return '五天';
      case 6:
        return '六天';
      case 7:
        return '七天';
    }
  }
  public createFrequencyQiangName(this: any, value: any) {
    switch (value) {
      case 'two':
        return '次日';
      case 'three':
        return '三日';
      case 'seven':
        return '七日';
      case 'fourteen':
        return '十四日';
      case 'thirty':
        return '三十日';
    }
  }
  public mounted() {
    this.add();
  }
  public add(this: any) {
    if (this.isList) {
      this.tag_list.push(JSON.parse(JSON.stringify(this.header_form)));
      this.changeSelect(this.tag_list);
    } else {
      this.$emit('search', this.header_form);
    }
  }
  public closeTag(this: any, value: any, index: any) {
    this.tag_list.splice(index, 1);
    this.changeSelect(this.tag_list);
  }
  public changeChannel(this: any, value: any) {}
  public changeTerminal(this: any) {}
  public changePeriod(this: any) {}
}
</script>
