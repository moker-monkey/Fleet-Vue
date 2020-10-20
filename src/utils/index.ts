import { format } from './dateHelper'
import { isJSON } from './jsonHelper'

declare global {
    interface Array<T> {

    }
    interface Date {
        Format(this: any, fmt: string): string
    }
}

Date.prototype.Format = format;

export { format } from './dateHelper'
export { isJSON } from './jsonHelper'

