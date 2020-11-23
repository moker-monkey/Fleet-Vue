'use strict';
interface options {
    sensitivity: number,
    interval?: number,
    timeout?: number,
    handleFocus?: boolean,
}
interface h {
    remove?: () => void;
    options?: any
}

export const hover = (el: HTMLElement, onOver: any, onOut: any) => {
    // tslint:disable-next-line: one-variable-per-declaration
    let x: number, y: number, pX: number, pY: number;
    let mouseOver = false;
    let focused = false;
    // tslint:disable-next-line: prefer-const
    // tslint:disable-next-line: one-variable-per-declaration
    // tslint:disable-next-line: no-shadowed-variable
    const h: h = {};
    let state: any = 0;
    let timer: any = 0;

    // tslint:disable-next-line: no-shadowed-variable
    let options: options = {
        sensitivity: 7,
        interval: 100,
        timeout: 0,
        handleFocus: false
    };

    // tslint:disable-next-line: no-shadowed-variable
    function delay(el: HTMLElement, e: any) {
        if (timer) { timer = clearTimeout(timer); }
        state = 0;
        return focused ? undefined : onOut.call(el, e);
    }

    function tracker(e: { clientX: any; clientY: any; }) {
        x = e.clientX;
        y = e.clientY;
    }

    // tslint:disable-next-line: no-shadowed-variable
    function compare(el: HTMLElement, e: any) {
        if (timer) { timer = clearTimeout(timer); }
        if ((Math.abs(pX - x) + Math.abs(pY - y)) < options.sensitivity) {
            state = 1;
            return focused ? undefined : onOver.call(el, e);
        } else {
            pX = x;
            pY = y;
            timer = setTimeout(() => {
                compare(el, e);
            }, options.interval);
        }
    }

    // Public methods
    h.options = (opt: { handleFocus: boolean; }): any => {
        const focusOptionChanged = opt.handleFocus !== options.handleFocus;
        options = Object.assign({}, options, opt);
        if (focusOptionChanged) {
            options.handleFocus ? addFocus() : removeFocus();
        }
        return h;
    };

    function dispatchOver(this: any, e: { clientX: any; clientY: any; }) {
        mouseOver = true;
        if (timer) { timer = clearTimeout(timer); }
        el.removeEventListener('mousemove', tracker, false);

        if (state !== 1) {
            pX = e.clientX;
            pY = e.clientY;

            el.addEventListener('mousemove', tracker, false);

            timer = setTimeout(() => {
                compare(el, e);
            }, options.interval);
        }

        return this;
    }

    function dispatchOut(this: any, e: any) {
        mouseOver = false;
        if (timer) { timer = clearTimeout(timer); }
        el.removeEventListener('mousemove', tracker, false);

        if (state === 1) {
            timer = setTimeout(() => {
                delay(el, e);
            }, options.timeout);
        }

        return this;
    }

    function dispatchFocus(e: any) {
        if (!mouseOver) {
            focused = true;
            onOver.call(el, e);
        }
    }

    function dispatchBlur(e: any) {
        if (!mouseOver && focused) {
            focused = false;
            onOut.call(el, e);
        }
    }

    function addFocus() {
        el.addEventListener('focus', dispatchFocus, false);
        el.addEventListener('blur', dispatchBlur, false);
    }

    function removeFocus() {
        el.removeEventListener('focus', dispatchFocus, false);
        el.removeEventListener('blur', dispatchBlur, false);
    }

    h.remove = () => {
        if (!el) { return; }
        el.removeEventListener('mouseover', dispatchOver, false);
        el.removeEventListener('mouseout', dispatchOut, false);
        removeFocus();
    };

    if (el) {
        el.addEventListener('mouseover', dispatchOver, false);
        el.addEventListener('mouseout', dispatchOut, false);
    }

    return h;
};
