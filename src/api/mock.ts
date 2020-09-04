import * as api from './api'

api.user.setMock('GET', { good: 'mock' })
api.login.setMock('GET', { login: 'welcome' })
api.getUserInfo.setMock('GET', { mock: 'mock' })


