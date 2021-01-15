import Axios, { AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';
import Mock from 'mockjs'

// TODO:数据中转站(已完成)
// 数据的流转中心，使用场景：当组件已经封装好了，但是后端给的数据结构不对，但是基本元素都存在，需要前端转换数据，此时就需要再数据中心挂载一个处理函数，
// 优点
// 1. 使用异步运算，可以保证数据转换时不阻塞后续的请求
// 2. 便于维护与修改
// 3. 无侵入代码逻辑，保持组件的纯洁与通用性

// TODO:数据上传前校验中心（考虑实现的可用性）
// 使用场景： 每个form表单都需要验证,可以替代原来散落的form表单验证123

// TODO:添加一个用于发起request请求时触发异步埋点的方法（优先级低）

// TODO: 将mock和adapter改造成装饰器（优先级低）

// tslint:disable-next-line: max-line-length
// TODO: 是否可以做一个vuex的插件，管理切换的状态，例如：当我们切换页面后再切回，如果是使用vue-router缓存，只会缓存dom元素，而vuex中的状态可能已经被改变，对于那些同步了全局的页面或组件就会出现问题，所以可以将vuex的值按照标签页的顺序列表存储起来，然后在点击对应的标签时，将对应的的vuex进行赋值（待验证）

// TODO: 发起一个页面，可以写文档去直接生成api.ts，mock.ts 也可以通过读取api.ts的文件，在页面上编辑文档，并生成mock.ts

// TODO: 实现一个api组件，该组件能够管理api的调用，使用场景，在需要复杂api调用的时候，只需要给组件外嵌套一层api组件，传入api，params，refresh，rid,内部嵌套的api组件只需要考虑获取数据和使用数据，不需要操心数据的操作，api组件不产生任何的样式

interface response_interceptors {
    success(response: AxiosResponse): any,
    error(error: AxiosError): any
}
interface request_interceptors {
    success(config: AxiosRequestConfig): any,
    error(error: AxiosError): any
}
let validate: (x: string) => number;
export default class Api {
    public static mockDataList: any[] = [];
    public static dataAdapter: any[] = [];
    public static paramsList: any[] = [];
    public static quote: any = {}
    public static validate: any = {}

    public static setValidate(name: string, validate: any) {
        this.validate[name] = validate
    }

    public static setQuote(name: string, params: Param[]) {
        this.quote[name] = params
    }
    public success: any;
    public error: any;
    public isUseMock: boolean = false;
    public isUseParams: boolean = false;
    public baseurl!: string;
    public mockSchema?: object;
    public describe?: string;
    public isUseParamsValidate: boolean = false;
    public validate: any = {
        type: (value: any, params: any) => {
            if (params.type.indexOf('[]') === -1) {
                // 非数组只需要校验value本身的type即可
                if (typeof value !== 'object') {
                    return typeof value === params.type
                } else if (params.type === 'object') {
                    return value.constructor === Object
                }
            } else if (params.type.indexOf('[]') !== -1) {
                if (params.type === 'object[]') {
                    // 如果为object[]则先判断是否为array,
                    // 之后判断array中的元素是否都是Object
                    // 再然后判断每一个Object是否和引用的格式相同
                    // this.type()
                } else if (params.type === 'string[]') {

                }

            }

        }
    }

    private config!: AxiosRequestConfig;
    private request_interceptor: request_interceptors = {
        success(config) { },
        error(err) { },
    }
    private response_interceptor: response_interceptors = {
        success(config) { },
        error(err) { },
    }
    constructor(baseurl: string) {
        this.baseurl = baseurl; // baseurl只到端口号，不包含端口号后的位置
        Axios.defaults.baseURL = baseurl;
    }

    public createApi(config?: AxiosRequestConfig) {
        this.startInterceptor()
        this.config = config || {};
        return api
    }
    public setRequestInterceptors(success: any, error: any) {
        this.request_interceptor.success = success;
        this.request_interceptor.error = error;
    }
    public setResponseInterceptors(success: any, error: any) {
        this.response_interceptor.success = success;
        this.response_interceptor.error = error;
    }

    public startInterceptor() {
        Axios.interceptors.request.use((config: AxiosRequestConfig) => {
            config = Object.assign(config, this.request_interceptor.success.call(this, config) || {})
            this.isUseParamsValidate && this.params_interceptors(config)
            // tslint:disable-next-line: no-unused-expression
            this.isUseMock && (config = Object.assign(config, this.mock_interceptors(config) || {}))
            return config
        }, (err) => {
            err = Object.assign(err, this.request_interceptor.error.call(this, err) || err)
            console.log(err)
            return Promise.reject(err)
        })
        Axios.interceptors.response.use((res: AxiosResponse) => {
            res = Object.assign(res, this.data_adapter(res))  // 开发时，我们只需要按照前端的需求来开发，如果数据不符合我们的期待，就可以通过添加适配器来转换数据，而不需要变更页面逻辑
            res = Object.assign(res, this.response_interceptor.success.call(this, res) || {});
            return res
        }, (err) => {
            err = Object.assign(err, this.response_interceptor.error.call(this, err) || err)
            return Promise.reject(err)
        })
    }
    public mock_interceptors(config: AxiosRequestConfig) {
        for (const i of Api.mockDataList) {
            if ((i.isUseMock && this.isUseMock) && (i.affix ? config.url?.match(`${i.route}\\d+/${i.affix}`) : config.url === i.url) && i.alreadyMockMethod.indexOf(config.method?.toLocaleUpperCase()) !== -1) {
                const index = i.alreadyMockMethod.indexOf(config.method?.toLocaleUpperCase())
                Mock.mock(new RegExp(i.route + '\\.*'), i.mock[index].schema)
                console.warn(`[Mock request]method:${i.mock[index].methods}&&url:${i.route}`)
            }
        }
        return config
    }
    public params_interceptors(config: AxiosRequestConfig) {
        for (const i of Api.paramsList) {
            // 判断methods与url是否相同以及是否启用params
            if ((i.isUseParams && this.isUseParams) && (i.affix ? config.url?.match(`${i.route}\\d+/${i.affix}`) : config.url === i.url) && i.alreadyParamsMethod.indexOf(config.method?.toLocaleUpperCase()) !== -1) {
                const index: params = i.alreadyParamsMethod.indexOf(config.method?.toLocaleLowerCase())
                for (const field_obj of index.param) {
                    // j表示每一个字段的对象
                    this.params_validate(config.params, field_obj)
                }
            }
        }
    }
    public params_validate(value: any, params: Param) {
        if (params.validate && params.validate.length) {
            for (const i of params.validate) {
                Api.validate[i](value, params) // TODO: 添加字段校验，返回f
            }
        } else {
            return true
        }

    }

    public data_adapter(res: AxiosResponse) {
        for (const i of Api.dataAdapter) {
            // dataAdapter目前只支持转换get请求的返回数据，其他的暂时没有必要
            if (res.config.url === i.url || new RegExp(`${i.route}\\d+/${i.affix}/`).test(res.config.url as string)) {
                if (i.adapter) {
                    return i.adapter(res)
                }
            }
        }
        return res
    }
    public mock_all(flag: any) {
        // tslint:disable-next-line: no-unused-expression
        flag && console.warn(`warning: method mock_all of Api is turn on, that any request to server `)
        this.isUseMock = flag;
    }
}

interface mock {
    methods: Method;
    schema: any;
}
enum paramsType {
    'string' = 'string',
    'number' = 'number',
    'boolean' = 'boolean',
    'object' = 'object',
    'string[]' = 'string[]',
    'number[]' = 'number[]',
    'boolean[]' = 'boolean[]',
    'object[]' = 'object[]'
}
interface Param {
    key: string,
    require: boolean,
    type: paramsType,
    isNull: boolean,
    validate: string[] | [],
    quote?: string,
    list?: any[]
}
interface params {
    methods: Method,
    param: Param[]
}
// tslint:disable-next-line: max-classes-per-file
export class api {
    public affix?: string | undefined;
    public adapter: any = null;
    public mock: mock[] = []
    public params: params[] = []
    public isUseMock: boolean = false;
    public isUseParams: boolean = false;
    public alreadyMockMethod: Method[] = [];
    public alreadyParamsMethod: Method[] = [];
    private route!: string;
    private url!: string;
    private axios: AxiosStatic = Axios;
    private name!: string;
    private description!: string;

    constructor(route: string, route1?: string, route2?: string, route3?: string, route4?: string, otherRoute?: string[]) {
        // scope与route后都不需要带/,有函数自动判断并添加
        const route_list = [route, route1, route2, route3, route4].concat(otherRoute)
        this.url = this.combination(route_list as string[]);
        this.route = this.url.split('#')[0]
        this.affix = this.url.split('#')[1] || ''
    }

    public checkArgument(route: any, id?: number | string) {
        const match = this.url.match('#')
        if (match) {
            if (id !== 0 && !id) {
                throw new Error(`${this.url} 调用时必须传入id`)
            }
        } else {
            return route
        }
    }
    public setName(name: string) {
        this.name = name;
        return this;
    }
    public setDescription(description: string) {
        this.description = description;
        return this
    }

    public createAffixApi(affix: string) {
        return new api(this.route, '#', affix)
    }
    public GET(params: object = {}, id?: number | string, affix?: string) {
        return this.axios.get(`${this.checkArgument(this.route)}${id ? id + '/' : ''}${affix ? affix + '/' : ''}`, { params })
    }
    public POST(params: object, id?: number | string, affix?: string) {
        return this.axios.post(`${this.checkArgument(this.route)}${id ? id + '/' : ''}${affix ? affix + '/' : ''}`, params)
    }
    public PUT(params: object, id?: number | string) {
        return this.axios.put(`${this.route}${id}/`, params)
    }
    public DELETE(id: number | string) {
        return this.axios.delete(`${this.route}${id}/`)
    }
    public CUSTOM(config: AxiosRequestConfig) {
        return this.axios(Object.assign({ url: this.route }, config))
    }
    public combination(urlList: string[]): string {
        let url!: string;
        urlList = urlList.filter((item: any) => item)
        urlList.push('')
        if (!urlList[0].match(/^http|^https/i)) {
            urlList.unshift(Axios.defaults.baseURL as string)
        }
        if (urlList[0].match(/\/$/i)) {
            urlList[0] = urlList[0].slice(0, urlList[0].length - 1)
        }
        url = urlList.join('/')

        return url
    }

    public setMock(methods: Method, schema: any) {
        this.mock.push({ methods, schema });
        if (this.alreadyMockMethod.indexOf(methods) !== -1) {
            throw Error(`${this.name ? this.name : this.url}，Api定义了重复的Method,确保该api的每种method只设置了一个mock数据`)
        } else {
            this.alreadyMockMethod.push(methods)
        }
        this.isUseMock = true;
        Api.mockDataList.push(this)
    }

    public setAdapter(callback: any) {
        this.adapter = callback;
        Api.dataAdapter.push(this)
    }
    public setQuote(params: Param[]) {
        // 从全局注册的quote中找到对应的quote，加入到param中
    }
    public setParams(methods: Method, param: Param[]) {
        this.setQuote(param)
        this.params.push({ methods, param })
        if (this.alreadyParamsMethod.indexOf(methods) !== -1) {
            throw Error(`${this.name ? this.name : this.url}，Api定义Params时有重复的Method,确保该api的每种method只设置了一个mock数据`)
        } else {
            this.alreadyParamsMethod.push(methods)
        }
        this.isUseMock = true;
        Api.paramsList.push(this)
    }
    public MockOn(flag: boolean) {
        this.isUseMock = flag;
        return this
    }
    public getAxios() {
        return this.axios
    }

}
export { Axios, paramsType }
