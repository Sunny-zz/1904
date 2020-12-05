<template>
  <Container>
    <template #head>
      <router-link to="/">主页</router-link>
      <span>/</span>
    </template>
    <h3>{{ text }}</h3>
  </Container>
</template>
<script>
import Container from '../lauout/Container'
export default {
  name: 'NotFound',
  components: {
    Container
  },
  props: {
    text: {
      type: String,
      default: 'Not Found'
    }
  }
}
</script>
<style></style>