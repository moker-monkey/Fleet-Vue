
import { VNode } from 'vue';
import { resetAnimation } from '@/utils/animation'
import { hover } from '@/utils/mouseHelper'
/**
 * 
 * @param type velocity|css
 * @param animation-paly-state  paused|running
 */

export default function animation(el: any, binding: any, vnode: VNode) {
    // 当指令中的binding.value中的数据变更时会触发指令的全部钩子
    // oldValue表示是第一次绑定
    if (!binding.oldValue) {
        el.style['animation-play-state'] = 'paused';
        el.className = `animate__animated ${binding.value.name} ${el.className}`

        if (binding.value.trigger === 'click') {
            el.addEventListener('click', (event: any) => {
                event.stopPropagation()
                event.preventDefault()
                event.cancelBubble = true;
                event.currentTarget.style['animation-play-state'] = 'running';
                resetAnimation(event.currentTarget, binding.value.name)

            })
        } else if (binding.value.trigger === 'hover') {
            hover(el, (event: any) => {
                event.relatedTarget.style['animation-play-state'] = 'running';
                resetAnimation(event.relatedTarget, binding.value.name)
            }, (event: any) => {
            })
        } else if (binding.value.trigger === 'once') {
            setTimeout(() => {
                el.style['animation-play-state'] = 'running';
            }, binding.value.delay || 0);
        }

    }
}
