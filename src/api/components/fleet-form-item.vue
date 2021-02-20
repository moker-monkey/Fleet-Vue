<template>
  <fragment>
    <el-input
      v-if="type === 'input'"
      v-model="inner_data"
      :placeholder="$attrs.placeholder"
    ></el-input>
    <el-select v-model="inner_data" v-if="type === 'select'">
      <slot>
        <el-option
          v-for="(i, key) in configs ? configs.options : []"
          :key="key"
          :label="i.label"
          :value="i.value"
        ></el-option>
      </slot>
    </el-select>
    <el-cascader
      v-if="type === 'cascader'"
      v-model="inner_data"
      :options="configs ? configs.options : []"
    >
      <slot> </slot>
    </el-cascader>
    <el-radio-group v-model="inner_data" v-if="type === 'radio'">
      <slot>
        <el-radio
          v-for="(i, key) in configs ? configs.options : []"
          :key="key"
          :label="i.value"
          >{{ i.label }}</el-radio
        >
      </slot>
    </el-radio-group>
    <el-checkbox-group v-model="inner_data" v-if="type === 'checkbox'">
      <el-checkbox
        v-for="(i, key) in configs ? configs.options : []"
        :key="key"
        :label="i.value"
        >{{ i.label }}</el-checkbox
      >
    </el-checkbox-group>
    <el-switch v-model="inner_data" v-if="type === 'switch'"></el-switch>
    <el-input-number
      v-model="inner_data"
      v-if="type === 'inputNumber'"
    ></el-input-number>
    <el-time-piker
      v-model="inner_data"
      v-if="type === 'timePicker'"
      placeholder="选择时间点"
    ></el-time-piker>
    <el-date-piker
      v-model="inner_data"
      v-if="type === 'datePicker'"
      type="date"
      placeholder="选择日期"
    ></el-date-piker>
    <el-date-piker
      v-model="inner_data"
      v-if="type === 'dateTimePicker'"
      type="datetime"
      placeholder="选择日期时间"
      :picker-options="pickerOptions"
    ></el-date-piker>
    <el-color-picker
      v-if="type === 'colorPicker'"
      v-model="inner_data"
      show-alpha
    ></el-color-picker>
  </fragment>
</template>
<script>
export default {
  name: "fleet-form-item",
  props: {
    api: Object,
    configs: Object,
    data: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      defalut: "",
    },
    type: String,
    default() {
      return {
        type: "input",
      };
    },
  },
  model: {},
  data() {
    return {
      params_modle_item: {},
      params: {},
      inner_data: "",
      shortcuts: [
        {
          text: "今天",
          onClick(picker) {
            picker.$emit("pick", new Date());
          },
        },
        {
          text: "昨天",
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit("pick", date);
          },
        },
        {
          text: "一周前",
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit("pick", date);
          },
        },
      ],
    };
  },
  computed: {
    get_params() {
      return this.params;
    },
  },
  watch: {
    data: {
      immediate: true,
      handler(val, oldVal) {
        this.inner_data = val;
      },
    },
    inner_data: {
      handler(val, oldVal) {
        this.$emit("change", val);
      },
    },
    type: {
      immediate: true,
      handler(val, oldVal) {
        if (!val) {
          this.type = "input";
        }
      },
    },
  },
  model: { prop: "data", event: "change" },
  methods: {
    
  },
};
</script>

<style lang="scss">
.fleet-form {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>