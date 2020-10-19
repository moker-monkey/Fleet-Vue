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
import CodeMirror from './codemirror-plugin'; // 通过了插件导出的CodeMirror
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/selection/active-line';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
// import "codemirror/addon/hint/anyword-hint.js";
import { showHint } from 'codemirror';
import { HintFunction } from 'codemirror';

@Component
export default class extends Vue {
  public editor: any;
  @Prop({ default: 250 })
  public height?: number;
  @Model('blur')
  public value: any;
  public idbLexicon: any = {
    number: ['\'@natural()\'', '@integer()', '@float()'], // 'num_type':natural|integer|float
    string: [
      '"@pick([])"',
      '"@word()"',
      '"@paragraph()"',
      '"@sentence()"',
      '"@title()"',
      '"@cparagraph()"',
      '"@csentence()"',
      '"@cword()"',
      '"@ctitle()"',
      '"@first()"',
      '"@last()"',
      '"@name()"',
      '"@cfrist()"',
      '"@clast()"',
      '"@cname()"',
      '"@url()"',
      '"@domain()"',
      '"@protocal()"',
      '"@tld()"',
      '"@email()"',
      '"@ip()"',
      '"@region()"',
      '"@province()"',
      '"@city()"',
      '"@country()"',
      '"@zip()"',
      '"@guid()"',
      '"@id()"',
      '"@color()"',
      '"@hex()"',
      '"@rgb()"',
      '"@rgba()"',
      '"@hsl()"',
      '"@image()"',
      '"@dataImage()"',
      '"@now()"',
      '"@datetime()"',
      '"@time()"',
      '"@date()"',
    ], // 'str_type':pick|word|paragraph|sentence|title|cparagraph|csentence|cword|ctitle|first|last|name|cfrist|clast|cname|url|domain|protocal|tld|email|ip|region|province|city|country|zip|guid|id|color|hex|rgb|rgba|hsl|image|dataImage|now|datetime|time|date
    boolean: ['"@boolean()"'],
    regex: ['/\d{5,10}/'],
    list: ['list_type', 'min', 'max'], // 'list_type':'number|string|object|list'};
  };
  @Watch('value')
  public W_value(this: any, value: any) {
    this.editor.setValue(JSON.stringify(this.value, null, 2));
  }

  public mounted() {
    this.init();
    setTimeout(() => {
      this.refresh(); // 解决行号错位的问题
      this.editor.setValue(JSON.stringify(this.value, null, 2));
    }, 10);
  }
  public init() {
    const _this = this;
    this.editor = CodeMirror.fromTextArea(
      this.$refs.txt as HTMLTextAreaElement,
      {
        mode: {
          name: 'application/json',
        },
        theme: 'material-darker',
        lineNumbers: true,
        showHint: true,
        readOnly: 'readonly' in this.$attrs || this.$attrs.readonly,
        styleActiveLine: true,
        lineWrapping: true,
        extraKeys: {
          Ctrl: 'autocomplete',
        },
        hintOptions: {
          completeSingle: false,
          hint(editor: CodeMirror.Editor) {
            const __Cursor = editor.getDoc().getCursor();
            const __CurLine = editor.getLine(__Cursor.line);
            const __Token = editor.getTokenAt(__Cursor);
            const { string } = __Token;
            const end = __Cursor.ch;
            const start = end - string.length;
            return {
              list: _this.matchMockType(string),
              from: CodeMirror.Pos(__Cursor.line, start),
              to: CodeMirror.Pos(__Cursor.line, end),
            };
          },
        },
      }
    );
    this.editor.setSize('100%', this.height + 'px');
    this.editor.on('blur', (editor: CodeMirror.Editor) => {
      try {
        const __string = JSON.parse(editor.getValue());
        this.$emit('blur', __string);
      } catch (err) {
        this.$emit('error', `JSON解析错误：${err}`);
      }
    });
  }
  public matchMockType(this: any, str: string): string[] {
    const keys: string[] = Object.keys(this.idbLexicon).filter((item: string) => {
      return item.indexOf(str) != -1;
    });
    const values = keys.map((item: any) => {
      return this.idbLexicon[item];
    });
    return keys.length
      ? values.reduce((pre: any[], cur: any[]) => {
          pre.concat(cur);
        })
      : [];
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
<style lang="scss">
.CodeMirror-hints {
  z-index: 10000;
}
</style>