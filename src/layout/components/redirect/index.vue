<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Redirect'
})
export default class extends Vue {
  public created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  }

  public render() {
    // Avoid warning for missing template
  }
}
</script>
