<template>
  <div class="mock-generate">
    <div v-for="(v, i) of jsonSchema.properties" :key="i">
      <el-form size="mini" inline>
        <el-form-item label="name">
          <el-input :value="v.name"></el-input>
        </el-form-item>
        <el-form-item label="type">
          <el-select :value="v.type">
            <el-option label="string" value="string"></el-option>
            <el-option label="number" value="number"></el-option>
            <el-option label="boolean" value="boolean"></el-option>
            <el-option label="list" value="list"></el-option>
            <el-option label="object" value="object"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="num_type"
          v-if="typeMapShowOption(v.type, 'num_type')"
        >
          <el-select>
            <el-option label="str_type" value="string"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="str_type"
          v-if="typeMapShowOption(v.type, 'str_type')"
        >
          <el-select>
            <el-option label="" value="string"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="boolean"
          v-if="typeMapShowOption(v.type, 'boolean')"
        >
          <el-select>
            <el-option label="true" :value="true"></el-option>
            <el-option label="false" :value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="expression"
          v-if="typeMapShowOption(v.type, 'boolean')"
        >
          <el-input></el-input>
        </el-form-item>
        <el-form-item
          label="list_type"
          v-if="typeMapShowOption(v.type, 'list_type')"
        >
          <el-select>
            <el-option label="true" :value="true"></el-option>
            <el-option label="false" :value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="list_min"
          v-if="typeMapShowOption(v.type, 'min')"
        >
          <el-select>
            <el-option label="true" :value="true"></el-option>
            <el-option label="false" :value="false"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="list_max"
          v-if="typeMapShowOption(v.type, 'max')"
        >
          <el-select>
            <el-option label="true" :value="true"></el-option>
            <el-option label="false" :value="false"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
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
} from 'vue-property-decorator';
import Mock from 'mockjs';

@Component({
    name: 'MockGenerate'
})
export default class extends Vue {
  public value = {
    number: { str: { regexp: /\d{5,10}/ } },
  };
  public data: any = [];
  public numType: any = ['natural', 'integer', 'float'];
  public strType: any = [
    { name: '选择', value: 'pick' },
    { name: '固定值', value: 'value' },
    { name: '单词(En)', value: 'word' },
    { name: '段落(En)', value: 'paragraph' },
    { name: '句子(En)', value: 'sentence' },
    { name: '段落(Zh)', value: 'cparagraph' },
    { name: '句子(Zh)', value: 'csentence' },
    { name: '单词(Zh)', value: 'cword' },
    { name: '标题(Zh)', value: 'ctitle' },
    { name: '姓(En)', value: 'first' },
    { name: '名(En)', value: 'last' },
    { name: '姓名(En)', value: 'name' },
    { name: '姓(Zh)', value: 'cfrist' },
    { name: '名(Zh)', value: 'clast' },
    { name: '姓名(Zh)', value: 'cname' },
    { name: 'url', value: 'url' },
    { name: 'domain', value: 'domain' },
    { name: 'protocal', value: 'protocal' },
    { name: 'tld', value: 'tld' },
    { name: 'email', value: 'email' },
    { name: 'ip', value: 'ip' },
    { name: '中国地区', value: 'region' },
    { name: '中国省份', value: 'province' },
    { name: '中国市', value: 'city' },
    { name: '中国地省市', value: 'country' },
    { name: '邮编', value: 'zip' },
    { name: 'guid', value: 'guid' },
    { name: 'id', value: 'id' },
    { name: 'color', value: 'color' },
    { name: 'hex', value: 'hex' },
    { name: 'rgb', value: 'rgb' },
    { name: 'rgba', value: 'rgba' },
    { name: 'hsl', value: 'hsl' },
    { name: 'imageUrl', value: 'image' },
    { name: 'imageData', value: 'dataImage' },
    { name: '当前时间', value: 'now' },
    { name: 'datetime', value: 'rgba' },
    { name: 'time', value: 'time' },
    { name: 'date', value: 'date' },
  ];
  public list_type = [
    { name: 'number', value: 'number' },
    { name: 'string', value: 'string' },
    { name: 'object', value: 'object' },
  ];
  get jsonSchema() {
    return Mock.toJSONSchema(this.value);
  }

  public mounted() {
    console.log('jsonSchema', this.jsonSchema);
    console.log('mock', Mock.mock(this.value));
  }
  public ruleMapOption() {
    // 传入rule映射对应的option
  }
  public typeMapShowOption(type: any, sub_type: any) {
    // 传入type映射应该展示的option
    const target_list: any = {
      number: ['num_type', 'count', 'min', 'max', 'dmin', 'dmax'], // 'num_type':natural|integer|float
      string: ['str_type', 'count', 'min', 'max', 'list'], // 'str_type':pick|word|paragraph|sentence|title|cparagraph|csentence|cword|ctitle|first|last|name|cfrist|clast|cname|url|domain|protocal|tld|email|ip|region|province|city|country|zip|guid|id|color|hex|rgb|rgba|hsl|image|dataImage|now|datetime|time|date
      boolean: ['boolean'],
      regex: ['expression'],
      list: ['list_type', 'min', 'max'], // 'list_type':'number|string|object|list'
    };
    return target_list[type].indexOf(sub_type) != -1;
  }
  public resolveJsonSchema(jsonSchema: any) {
    this.data.push(
      jsonSchema.properties.map((item: any) => {
        return {
          name: item.name,
          type: item.type,
        };
      })
    );
  }
}
</script>
<style lang="scss" scoped>
</style>