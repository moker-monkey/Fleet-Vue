import * as api from './api'
import {paramsType} from './Model'
// api.setValidate()

api.route.setParams('GET', [{
    key: 'name',
    require: true,
    type: paramsType.string,
    isNull: false,
    validate: ['type'],
}, {
    key: 'age',
    require: false,
    type: paramsType.number,
    isNull: true,
    validate: ['type']
}, {
    key: 'teacher',
    require: true,
    type: paramsType['object[]'],
    isNull: true,
    validate: ['type'],
    quote: ''
}])
