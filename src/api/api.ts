
import Api from './Model'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
let _Api = new Api('http://localhost:8888')
let config: AxiosRequestConfig = {
    headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
        "Content-Type": "application/json"
    }
}
_Api.setRequestInterceptors(
    (config: AxiosRequestConfig) => {
        return config
    }, (err: AxiosError) => {
        console.log(err)
        return Promise.reject(err)
    }
)
_Api.mock_all(true)
const api = _Api.createApi(config)
let scope = 'api'

export let user = new api(scope, 'user')
export let login = new api(scope, 'login')
export let getUserInfo = new api(scope, 'userInfo')
export let logout = new api(scope, 'logout')