<template>
  <Container>
    <div v-if="article">
      <div>
        <h2>{{ article.title }}</h2>
      </div>
      <div v-html="article.content"></div>
    </div>
  </Container>
</template>

<script>
import Container from '../lauout/Container'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Container
  },
  computed: {
    ...mapState(['article'])
  },
  created() {
    const { id } = this.$route.params
    this.getArticle(id)
  },
  methods: {
    ...mapActions(['getArticle'])
  }
}
</script>
