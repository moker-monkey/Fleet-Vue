<template>
  <div class="home">
    <Container direction="row" justify="space-between">
      <Container
        direction="col"
        justify="space-between"
        v-animation="{
          name: 'animate__tada',
          trigger: 'click',
        }"
      >
        <Card size="middle" grow="1">
          <img alt="Vue logo" src="../assets/logo.png" />
        </Card>
        <Card
          size="mini"
          v-animation="{
            name: 'animate__backInUp',
            trigger: 'once',
            delay: 2000,
          }"
        >
          <img alt="Vue logo" src="../assets/logo.png" />
        </Card>
      </Container>
    </Container>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Container from '@/components/api-card/gridCard/container.vue';
import Card from '@/components/api-card/gridCard/card.vue';

import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

@Component({
  name: 'Home',
  components: {
    HelloWorld,
    Container,
    Card,
  },
})
export default class Home extends Vue {
  public state: string = 'running';
  public star() {
    this.state = 'running';
    console.log('click');
  }
  public mounted() {
    console.log('%O', Date);
  }
}
</script>
<style lang="scss">
$marginTop: 10px;
.home {
  height: calc(100% - #{$marginTop});
  background: #fff;
  margin-top: $marginTop;
}
</style>
