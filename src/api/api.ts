
import Api from './Model'
import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import vue from '@/main'
const _Api = new Api('http://localhost:8888')
const config: AxiosRequestConfig = {
    headers: {
        'Authorization': `token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
}
_Api.setRequestInterceptors(
    (_config: AxiosRequestConfig) => {
        if (localStorage.getItem('token')) {
            _config.headers.Authorization = localStorage.getItem('token')
        } else {
            vue.$router.push('/login')
        }
        console.log(_config)
        return _config
    }, (err: AxiosError) => {
        console.log(err)
        return Promise.reject(err)
    }
)
_Api.setResponseInterceptors(
    (_config: AxiosRequestConfig) => {
        return _config
    }, (err: AxiosError) => {
        console.log(err)
        return Promise.reject(err)
    }
)
_Api.mock_all(true)
const api = _Api.createApi(config)
const scope = 'api'
export let empty = new api(scope, 'empty').setName('空的占位符').setDescription('当必须要绑定一个api时，可以绑定它')
export let user = new api(scope, 'user').setName('用户信息').setDescription('包含用户头像，用户username，id，等信息')
export let login = new api(scope, 'login').setName('登录请求')
export let getUserInfo = new api(scope, 'userInfo')
export let getNotify = new api(scope, 'notify')
export let logout = new api(scope, 'logout')
export let route = new api(scope, 'route') // 用于做路由权限
export let notice = new api(scope, 'notice').setName('通知').setDescription('用于header工具栏的通知')
// export let registrationAnalysisCard = new api(scope, 'rac').setName('注册分析的卡片组')
export let realtime = new api(scope, 'realtime').setName('实时统计')
export let realtimeCard = new api(scope, 'realtimeCard').setName('实时统计卡片')
export let overview = new api(scope, 'overview').setName('整体概述')
export let overviewCard = new api(scope, 'overviewCard').setName('整体概述卡片')
export let top = new api(scope, 'top').setName('排行榜')
export let topCard = new api(scope, 'topCard').setName('排行榜卡片')

export let registrationAnalysis = new api(scope, 'registrationAnalysis').setName('注册分析')
export let registrationAnalysisCard = new api(scope, 'registrationAnalysisCard').setName('注册分析卡片')

export let rechargeActive = new api(scope, 'rechargeActive').setName('充值活跃')
export let rechargeActiveCard = new api(scope, 'rechargeActiveCard').setName('充值活跃卡片')

export let activeAnalysis = new api(scope, 'activeAnalysis').setName('充值分析')
export let activeAnalysisCard = new api(scope, 'activeAnalysisCard').setName('充值分析卡片')

export let consumeAnalysis = new api(scope, 'consumeAnalysis').setName('充值分析')
export let consumeAnalysisCard = new api(scope, 'consumeAnalysisCard').setName('充值分析卡片')

export let balanceAnalysis = new api(scope, 'consumeAnalysis').setName('余额分析')
export let balanceAnalysisCard = new api(scope, 'consumeAnalysisCard').setName('余额分析卡片')

export { api }  // 这样导出会直接挂载到module上，如果是export api会挂载到module.default后，
export { _Api as Api }
export { Axios }

