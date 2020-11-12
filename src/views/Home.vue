<template>
  <div class="home">
    <Container direction="row" justify="space-between">
      <Container direction="col" justify="space-between">
        <Card size="middle" grow="1">
          <img alt="Vue logo" src="../assets/logo.png" />
        </Card>
        <api-Animate name="hello" :state="state">
          <Card size="min">
            <img alt="Vue logo" src="../assets/logo.png" />
          </Card>
        </api-Animate>
      </Container>
    </Container>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Container from '@/components/api-card/gridCard/container.vue';
import Card from '@/components/api-card/gridCard/card.vue';
import apiAnimate from '@/components/api-ui/api-animate/index';

import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

@Component({
  name: 'Home',
  components: {
    HelloWorld,
    Container,
    Card,
    apiAnimate,
  },
})
export default class Home extends Vue {
  @Prop({default: 'start'})
  public state?: string;

};
</script>
<style lang="scss">
$marginTop: 10px;
.home {
  height: calc(100% - #{$marginTop});
  background: #fff;
  margin-top: $marginTop;
}
</style>
