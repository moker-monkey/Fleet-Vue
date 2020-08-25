import { Component, Vue, Watch } from 'vue-property-decorator'
import { LayoutModule, DeviceType } from '@/store/modules/layout'

const WIDTH = 992 // refer to Bootstrap's responsive design

@Component({
  name: 'ResizeMixin'
})
export default class extends Vue {
  get device() {
    return LayoutModule.device
  }

  get sidebar() {
    return LayoutModule.sidebar
  }

  @Watch('$route')
  private onRouteChange() {
    if (this.device === DeviceType.Mobile && this.sidebar.opened) {
      LayoutModule.CloseSideBar(false)
    }
  }

  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  }

  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      LayoutModule.ToggleDevice(DeviceType.Mobile)
      LayoutModule.CloseSideBar(true)
    }
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  }

  private isMobile() {
    const rect = document.body.getBoundingClientRect()
    return rect.width - 1 < WIDTH
  }

  private resizeHandler() {
    if (!document.hidden) {
      const isMobile = this.isMobile()
      LayoutModule.ToggleDevice(isMobile ? DeviceType.Mobile : DeviceType.Desktop)
      if (isMobile) {
        LayoutModule.CloseSideBar(true)
      }
    }
  }
}