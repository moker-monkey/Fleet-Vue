<template>
  <div class="codemirrorWrap">
    <textarea ref="txt" class="txt" placeholder="请输入"></textarea>
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
import CodeMirror from './formatting'; // 通过了插件导出的CodeMirror
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/addon/selection/active-line';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';

@Component
export default class extends Vue {
  public editor: any;
  @Prop({ default: 250 })
  public height?: number;
  @Model('blur')
  public value: any;
  public idbLexicon: any = {
    number: ['num_type', 'count', 'min', 'max', 'dmin', 'dmax'], // 'num_type':natural|integer|float
    string: ['str_type', 'count', 'min', 'max', 'list'], // 'str_type':pick|word|paragraph|sentence|title|cparagraph|csentence|cword|ctitle|first|last|name|cfrist|clast|cname|url|domain|protocal|tld|email|ip|region|province|city|country|zip|guid|id|color|hex|rgb|rgba|hsl|image|dataImage|now|datetime|time|date
    boolean: ['boolean'],
    regex: ['expression'],
    list: ['list_type', 'min', 'max'], // 'list_type':'number|string|object|list'};
  };
  @Watch('value')
  public W_value(this: any, value: any) {
    this.editor.setValue(JSON.stringify(this.value, null, 2));
  }
  @Watch('idbLexicon')
  public W_idbLexicon(this: any, value: any, oldValue: any) {
    const hintOptions = this.editor.getOption('hintOptions');
    this.editor.setOption('hintOptions', {
      ...hintOptions,
      table: {
        ...hintOptions.tables,
        ...value,
      },
    });
    if (this.isRealTimeTip) {
      this.editor.showHint();
    }
    this.isRealTimeTip = false;
  }
  public mounted() {
    this.init();
    setTimeout(() => {
      this.refresh(); // 解决行号错位的问题
      this.editor.setValue(JSON.stringify(this.value, null, 2));
    }, 10);
  }
  public init() {
    console.log('readonly' in this.$attrs);
    const hint = this.idbLexicon;
    this.editor = CodeMirror.fromTextArea(
      this.$refs.txt as HTMLTextAreaElement,
      {
        mode: 'application/json',
        theme: 'material-darker',
        lineNumbers: true,
        readOnly: 'readonly' in this.$attrs || this.$attrs.readonly,
        extraKeys: {
          // F7: function autoFormat(editor: any) {
          //   console.log('auto')
          //   var totalLines = editor.lineCount();
          //   editor.autoFormatRange({ line: 0, ch: 0 }, { line: totalLines });
          // }, //代码格式化
        },
        hintOptions: {
          // 自定义提示选项
          completeSingle: false,
          hint: () => {
            return ['good'];
          },
        },
      }
    );
    this.editor.setSize('100%', this.height + 'px');
    this.editor.on('blur', (editor: any) => {
      try {
        const __string = JSON.parse(editor.getValue());
        this.$emit('blur', __string);
      } catch (err) {
        this.$emit('error', `JSON解析错误：${err}`);
      }
    });
    CodeMirror.registerHelper('hint', 'foo', 'myFoo')
  }
  public handleCtrlShowHint(this: any, editor: any) {
    const __Cursor = editor.getDoc().getCursor();
    const __CurLine = editor.getLine(__Cursor.line);
    const __Token = editor.getTokenAt(__Cursor);
    const { string } = __Token;
    const end = __Cursor.ch;
    const start = end - string.length;

    editor.showHint({
      hint() {
        return {
          list: ['good'],
          form: CodeMirror.Pos(__Cursor.line, start),
          to: CodeMirror.Pos(__Cursor.line, end),
        };
      },
    });
  }
  public refresh() {
    this.editor && this.editor.refresh();
  }
}
</script>
<style lang="scss" scoped>
.codemirrorWrap {
}
</style>