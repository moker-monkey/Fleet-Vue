<template>
  <div class="home">
    <Container direction="row" justify="space-between">
      <Container direction="col" justify="space-between">
        <Card size="middle" grow="1">
          <img alt="Vue logo" src="../assets/logo.png" />
        </Card>
        <Card size="min">
          <img alt="Vue logo" src="../assets/logo.png" />
        </Card>
      </Container>
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Container from "@/components/api-card/gridCard/container.vue";
import Card from "@/components/api-card/gridCard/card.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Container,
    Card,
  },
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
