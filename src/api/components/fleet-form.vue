<template>
  <el-form class="fleet-form" ref="form">
    <el-form-item
      v-for="(i, k) in params_modle"
      :label="i.label"
      :key="k"
      :data-key="i.key"
    >
      <!-- {{ i }} -->
      <template>
        <slot v-scope="i" :name="i.key">
          <!-- <el-input v-model="i.value" :placeholder="i.label"></el-input>
        此处可以根据传入的数据渲染出对应的组件，fleet-form-item -->
          <!-- 使用指针的方式直接获取值 -->
          <fleet-form-item
            :type="i.component ? i.component.type : 'select'"
            placeholder="hello"
            :configs="i.component"
            v-model="i.value"
          >
          </fleet-form-item>
        </slot>
        <div
          :class="isError ? 'error' : 'describe'"
          :ref="i.key"
          v-text="i.describe"
        ></div>
      </template>
    </el-form-item>
    <el-form-item>
      <el-button @click="commit">提交</el-button>
      <el-button @click="validate">校验</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import fleetFormItem from "./fleet-form-item.vue";
import Api from "../Model";
export default {
  components: {
    fleetFormItem,
  },
  name: "fleet-form",
  props: {
    api: Object,
    options: Object,
    data: Object,
    default() {
      return {
        type: "POST",
      };
    },
  },
  data() {
    return {
      params_modle: [],
      params: {},
      isError: false,
    };
  },
  computed: {
    get_params() {
      return this.params;
    },
    validate_results() {
      return Api.validate_results;
    },
  },
  watch: {
    api: {
      immediate: true,
      handler: function (val, oldVal) {
        if (val.paramsSet) {
          let temp = val.paramsSet.filter((item) => {
            // 找到对应的params设置
            return item.methods === (this.options ? this.options.type : "POST");
          });
          if (temp.length) {
            this.params_modle = temp[0].params;
            console.log(this.params_modle);
          } else {
            this.$message.warning(
              `Api:${val.name}没有设置${
                this.options ? this.options.type : "POST"
              }方法的params,请检查options.type是否相符`
            );
          }
        }
      },
    },
  },
  model: { prop: "formData", event: "commit" },
  methods: {
    commit() {
      //   console.log(Api);
      //   console.log(this.$refs.form);
      //   this.$refs.form.$children.filter($attrs.data - key);
      //   this.$emit("commit", this.params_modle);
    },
    validate() {
      for (let field_obj of this.params_modle) {
        Api.params_validate(field_obj.value, field_obj);
      }
      for (let i of this.validate_results) {
        this.$refs[i.key][0].innerHTML = i.message;
        this.isError = true;
      }
    },
  },
};
</script>

<style lang="scss">
.fleet-form {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.error {
  color: red;
}
.describe {
  color: rgb(164, 161, 161);
}
</style>