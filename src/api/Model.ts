import Axios, { AxiosStatic, AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';
import Mock from 'mockjs'

interface response_interceptors {
    success(resposne: AxiosResponse): any,
    error(error: AxiosError): any
}
interface request_interceptors {
    success(config: AxiosRequestConfig): any,
    error(error: AxiosError): any
}
export default class Api {
    success: any;
    error: any;
    constructor(baseurl: string) {
        this.baseurl = baseurl; //baseurl只到端口号，不包含端口号后的位置
        Axios.defaults.baseURL = baseurl;
    }
    private config!: AxiosRequestConfig;
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
    private request_interceptor: request_interceptors = {
        success(config) { },
        error(err) { }
    }
    private response_interceptor: response_interceptors = {
        success(config) { },
        error(err) { }
    }
    public startInterceptor() {
        Axios.interceptors.request.use((config: AxiosRequestConfig) => {
            config = Object.assign(config, this.request_interceptor.success.call(this, config) || {})
            config = Object.assign(config, this.mock_interceptors(config) || {})

            return config
        }, (err) => {
            err = Object.assign(err, this.request_interceptor.error.call(this, err) || err)
            console.log(err)
            return Promise.reject(err)
        })
        Axios.interceptors.response.use((res: AxiosResponse) => {
            res = Object.assign(res, this.response_interceptor.success.call(this, res) || {});
            return res
        }, (err) => {
            err = Object.assign(err, this.response_interceptor.error.call(this, err) || err)
            return Promise.reject(err)
        })
    }

    public mock_interceptors(config: AxiosRequestConfig) {
        for (let i of Api.mockDataList) {
            if ((i.isUseMock || this.isUseMock) && config.url === i.route && config.method === i.mock.method.toLocaleLowerCase()) {
                Mock.mock(i.route, i.mock.schema)
                this.isUseMock && console.log(`warning: method mock_all of Api is turn on, that any request to server `)
                console.log(`[Mock request]url:${i.route},method:${i.mock.method}`)
            }
        }
        return config
    }
    public mock_all(flag: any) {
        this.isUseMock = flag;
    }
    public isUseMock: boolean = false;
    public static mockDataList: any[] = [];
    public baseurl!: string;
    public mockSchema?: object;
    public describe?: string;
}
class api {
    // api只负责具体请求
    constructor(route: string, scope?: string) {
        // scope与route后都不需要带/,有函数自动判断并添加
        let route_list = []
        if (scope) {
            route_list = [Axios.defaults.baseURL as string, route, scope || '',]
        } else {
            route_list = [Axios.defaults.baseURL as string, scope || '', route]
        }
        this.route = this.combination(route_list);
    }
    private route!: string;
    private axios: AxiosStatic = Axios;

    public GET(params: object = {}, id?: number | string, affix?: string) {
        return this.axios.get(`${this.route}${id ? id + '/' : ''}${affix ? affix + '/' : ''}`, { params })
    }
    public POST(params: object, id?: number | string, affix?: string) {
        return this.axios.post(`${this.route}${id ? id + '/' : ''}${affix ? affix + '/' : ''}`, params)
    }
    public PUT(params: object, id?: number | string) {
        return this.axios.put(`${this.route}${id}/`, params)
    }
    public DELETE(id: number | string) {
        return this.axios.delete(`${this.route}${id}`)
    }
    public CUSTOM(config: AxiosRequestConfig) {
        return this.axios(Object.assign({ url: this.route }, config))
    }
    public combination(urlList: string[]): string {
        let url!: string;
        urlList = urlList.filter((item: any) => item)
        if (urlList[0].match(/\/$/i)) {
            urlList[0] = urlList[0].slice(0, urlList[0].length)
            url = urlList.join('/')
        } else {
            url = urlList.join('/')
        }
        return url
    }
    public mock: any = {
        method: '',
        schema: {}
    }
    public setMock(method: Method, schema: any) {
        this.mock = { method, schema };
        Api.mockDataList.push(this)
    }
    public isUseMock: boolean = false;
    public startMock() {
        this.isUseMock = true;
        return this
    }
    public getAxios() {
        return this.axios
    }
}