export const resetAnimation = (el: HTMLElement, name: string) => {
    el.addEventListener('webkitAnimationEnd', () => {
        el.classList.remove(name)
        // tslint:disable-next-line: no-unused-expression
        void el.offsetHeight;
        el.style.animationPlayState = 'paused';
        el.classList.add(name)
    })
}