function MAH(CodeMirror) {

    CodeMirror.defineMode('mockjs', function (config, parserConfig) {
        var jsonldMode = parserConfig.jsonld
        var isOperatorChar = /[+\-*&%=<>!?|~^@]/

        function parseWords(str) {
            var obj = {},
                words = str.split(' ')
            for (var i = 0; i < words.length; ++i) obj[words[i]] = true
            return obj
        }

        // 关键字
        var keywords = parseWords('int numeric decimal date varchar char bigint float double bit binary text set timestamp toString primitive money real number integer asInt asText dataType cardinality asText asInt asTimestamp flatMap valueMap asByte asBlob asDouble asDate asFloat asLong valueSingle asBoolean valueList valueSet asUuid null Infinity NaN undefined')

        var type, content

        function ret(tp, style, cont) {
            type = tp
            content = cont
            return style
        }

        function tokenBase(stream, state) {
            var beforeParams = state.beforeParams
            state.beforeParams = false
            var ch = stream.next()

            if (ch == '"' || ch == "'") {
                state.tokenize = tokenString(ch)
                return state.tokenize(stream, state)
            } else if (ch == '.' && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
                return ret('number', 'number')
            } else if (ch == '[') {
                stream.skipTo(']')
                stream.eat(']')
                return ret('string', 'string')
            } else if (/\d/.test(ch)) {
                stream.eatWhile(/[\w\.]/)
                return 'number'
            } else {
                stream.eatWhile(/[\w\$_{}\xa1-\uffff]/)
                var word = stream.current()
                if (keywords && keywords.propertyIsEnumerable(word)) {
                    state.beforeParams = true
                    return 'keyword'
                }

                return null
            }
        }

        function tokenString(quote) {
            return function (stream, state) {
                var escaped = false,
                    next
                if (jsonldMode && stream.peek() == '@' && stream.match(isJsonldKeyword)) {
                    state.tokenize = tokenBase
                    return ret('jsonld-keyword', 'meta')
                }
                while ((next = stream.next()) != null) {
                    if (next == quote && !escaped) break
                    escaped = !escaped && next == '\\'
                }
                if (!escaped) state.tokenize = tokenBase
                return ret('string', 'string')
            }
        }

        return {
            startState: function () {
                return {
                    tokenize: tokenBase,
                    beforeParams: false,
                    inParams: false
                }
            },
            token: function (stream, state) {
                if (stream.eatSpace()) return null
                return state.tokenize(stream, state)
            }
        }
    })
    //是否包含中括号
    function getZKH(list, str) {
        let location = str.search(/[\w]+\[[\w\s,]*\]\.$/i);
        if (location != -1) {
            str = str.substring(location, str.length);
            str = str.substring(0, str.search(/\[[\w\s,]*\]\.$/i))
            console.log(str)
            for (let key in list) {
                if (key == str) {
                    return list[key];
                }
            }
        }
        return null;
    }
    //是否包含圆括号
    function getYKH(list, str) {
        let location = str.search(/[\w]+\([\w\s,]*\)\.$/i);
        if (location != -1) {
            str = str.substring(location, str.length);
            str = str.substring(0, str.search(/\([\w\s,]*\)\.$/i))
            console.log(str)
            for (let key in list) {
                if (key == str) {
                    return list[key];
                }
            }
        }
        return null;
    }
    function getNormal(list, str) {
        let location = str.search(/[\w]+\([\w\s,]*\)\.[\w]*$/i);
        let result = null;
        if (location != -1) {  //匹配到有前缀方法   ()
            str = str.substring(location, str.length);
            if (str.search(/\.$/i) + 1 == str.length) { //.后无字符
                return getYKH(list, str);
            }
            let tstr = str.substring(str.search(/\.[\w]+$/i) + 1, str.length);
            str = str.substring(0, str.search(/\.[\w]+$/i));
            let res = getYKH(list, str);
            if (res != null) {
                result = []
                for (let v in res) {
                    if (v.indexOf(tstr) == 0) {
                        result.push(v);
                    }
                }
            }
            return result;
        }
        location = str.search(/[\w]+\[[\w\s]*\]\.[\w]*$/i);
        if (location != -1) {  //匹配到有前缀方法   []
            str = str.substring(location, str.length);
            if (str.search(/\.$/i) + 1 == str.length) { //.后无字符
                return getZKH(list, str);
            }
            let tstr = str.substring(str.search(/\.[\w]+$/i) + 1, str.length);
            str = str.substring(0, str.search(/\.[\w]+$/i));
            let res = getYKH(list, str);
            if (res != null) {
                result = []
                for (let v in res) {
                    if (v.indexOf(tstr) == 0) {
                        result.push(v);
                    }
                }
            }
            return result;
        }
        location = str.search(/[\w]+\.$/i);
        if (location != -1) {
            str = str.substring(location, str.length - 1);
            result = []
            for (let v in list) {
                if (v == str) {
                    result = list[v];
                    break;
                }
            }
            return result;
        }
        location = str.search(/[\w]+$/i);
        if (location != -1) {
            str = str.substring(location, str.length);
            result = []
            for (let v in list) {
                if (v.indexOf(str) == 0) {
                    result.push(v);
                }
            }
            return result;
        }
        return result;
    }

    function dataList(cm) {
        let customData = cm.options.hintOptions.tables;
        var hintList = { //提示的数据
            'g': ['V()', 'E()', 'has()', 'open()', 'close()', 'inV()', 'inE()', 'out()', 'outV()', 'outE()', 'label()', 'store()', 'next()', 'addVertex()', 'clazz()', 'limit()', 'traversal()', 'withBulk()', 'values()', 'schema()', 'except()', 'ifNotExist()', 'addEdge()', 'addVertex()', 'property()', 'io()', 'filter()', 'loops()', 'readGraph()', 'tree()', 'properties()', 'graph()', 'value()', 'bothE()', 'addV()', 'where()', 'hidden()', 'bothV()', 'withoutboth()', 'is()', 'path()', 'it()', 'get()', 'from()', 'to()', 'select()', 'otherV()', 'within()', 'inside()', 'outside()', 'withSack()'],
            'g()': [],
            'V': ['limit()', 'length()'],
            'limit': ['a()', 'b()', 'c()'],
            'targetLabel()': [], 'sourceLabel()': [], 'indexLabel()': [], 'indexLabels()': [], 'edgeLabel()': [], 'vertexLabel()': [], 'propertyKey()': [], 'getPropertyKey()': [], 'getVertexLabel()': [], 'getEdgeLabel()': [], 'getIndexLabel()': [], 'getPropertyKeys()': [], 'getVertexLabels()': [], 'getEdgeLabels()': [], 'getIndexLabels()': [], 'coin()': [], 'count()': [], 'coalesce()': [], 'createIndex()': [], 'hasLabel()': [], 'getLabelId()': [], 'create()': [], 'build()': [], 'append()': [], 'eliminate()': [], 'remove()': [], 'rebuildIndex()': [], 'constant()': [], 'isDirected()': [], 'desc()': [], 'inject()': [], 'profile()': [], 'simplePath()': [], 'eq()': [], 'neq()': [], 'gt()': [], 'gte()': [], 'lt()': [], 'lte()': [], 'queryType()': [], 'indexFields()': [], 'frequency()': [], 'links()': [], 'type()': [], 'in()': [], 'on()': [], 'by()': [], 'checkDataType()': [], 'checkValue()': [], 'validValue()': [], 'secondary()': [], 'drop()': [], 'search()': [], 'makeEdgeLabel()': [], 'cyclicPath()': [], 'hasKey()': [], 'match()': [], 'sack()': [], 'aggregate()': [], 'between()': [], 'baseType()': [], 'baseValue()': [], 'indexType()': [], 'rebuild()': [], 'choose()': [], 'aggregate()': [], 'iterate()': [], 'lte()': [], 'dedup()': [], 'identity()': [], 'groupCount()': [], 'until()': [], 'barrier()': [], 'fold()': [], 'unfold()': [], 'schemaId()': [], 'checkName()': [], 'makeIndexLabel()': [], 'makeVertexLabel()': [], 'makePropertyKey()': [], 'sideEffect()': [], 'hasNext()': [], 'toList()': [], 'toSet()': [], 'cap()': [], 'option()': [], 'branch()': [], 'choose()': [], 'repeat()': [], 'emit()': [], 'order()': [], 'mean()': [], 'withComputer()': [], 'subgraph()': [], 'getObjectsAtDepth()': [], 'hasValue()': [], 'hasNot()': [], 'hasId()': [], 'nullableKey()': [], 'nullableKeys()': [], 'sortKeys()': [], 'link()': [], 'singleTime()': [], 'multiTimes()': [], 'enableLabelIndex()': [], 'userdata()': [], 'checkExist()': [], 'linkWithLabel()': [], 'directed()': [], 'idStrategy()': [], 'primaryKeys()': [], 'primaryKey()': []
        }
        var cur = cm.getCursor(), token = cm.myGetTokenAt(cur) //重写getTokenAt()方法，返回一整行字符串
        let inputParam = token.text;
        let start = inputParam.search(/\.[\w]*$/i)
        let result = getNormal(hintList, inputParam);
        if (result != null) return [result, start];
        return []
    }

    CodeMirror.registerHelper('hint', 'mockjs', function (cm) {
        // 自动补全
        var list = dataList(cm)
        console.log('autoHelper',list)
        var cur = cm.getCursor(), //获取游标 eg.键盘输入aabb，cur的值为： {line: 0, ch: 4, sticky: null}
            token = cm.getTokenAt(cur); //示例token的值为： {start: 0, end: 4, string: "aabb", type: null, state: {…}}
        var start = token.start,
            end = cur.ch
        if (list.length > 1) {
            let v = list[1];
            list = list[0];
            if (v != -1)
                start = v + 1;
        }

        if (list.length) {
            return {
                list: list,
                from: CodeMirror.Pos(cur.line, start),
                to: CodeMirror.Pos(cur.line, end)
            }
        }
    })

    CodeMirror.defineMIME('text/mockjs', 'mockjs') //定义别名为text/x-zzzz
}

export default MAH;
