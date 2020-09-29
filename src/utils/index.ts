import format from './dateHandler'

declare global {
    interface Array<T> {

    }
    interface Date {
        Format(this: any, fmt: string): string
    }
}

Date.prototype.Format = format;

export { default as Format } from './dateHandler'

