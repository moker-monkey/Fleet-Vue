
import Api from './Model'
import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
const _Api = new Api('http://localhost:8888')
const config: AxiosRequestConfig = {
    headers: {
        'Authorization': `token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
}
_Api.setRequestInterceptors(
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

export let user = new api(scope, 'user').setName('用户信息').setDescription('包含用户头像，用户username，id，等信息')
export let login = new api(scope, 'login')
export let getUserInfo = new api(scope, 'userInfo')
export let getNotify = new api(scope, 'notify')
export let logout = new api(scope, 'logout')
export let route = new api(scope, 'route') // 用于做路由权限
export let notice = new api(scope, 'notice').setName('通知').setDescription('用于header工具栏的通知')
// export let registrationAnalysisCard = new api(scope, 'rac').setName('注册分析的卡片组')
export let realtime = new api(scope, 'realtime').setName('实时统计')
export let realtimeCard = new api(scope, 'realtimeCard').setName('实时统计卡片')
export let overview = new api(scope, 'overview').setName('整体概述')
export let overviewCard = new api(scope, 'overview').setName('整体概述卡片')

export { api }  // 这样导出会直接挂载到module上，如果是export api会挂载到module.default后，
export { _Api as Api }
export { Axios }

