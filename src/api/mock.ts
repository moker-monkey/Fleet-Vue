import * as api from './api'

api.user.setMock('GET', { mock: 'mock' })
api.login.setMock('GET', { mock: 'mock' })
api.getUserInfo.setMock('GET', { mock: 'mock' })


