
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

export let user = new api(scope, 'user')
export let login = new api(scope, 'login')
export let getUserInfo = new api(scope, 'userInfo')
export let logout = new api(scope, 'logout')
export let route = new api(scope, 'route') // 用于做路由权限

export { api }  // 这样导出会直接挂载到module上，如果是export api会挂载到module.default后，
export { _Api as Api }
export { Axios }

