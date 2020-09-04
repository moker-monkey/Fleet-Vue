import * as api from './api'
import { AxiosResponse } from 'axios'

api.login.setAdapter( (res: AxiosResponse)=> {
    console.log('inner adapter',res)
    return res
})