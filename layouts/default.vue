<template>
  <div>
    <navbar />
    <container>
      <nuxt />
    </container>
    <footer-bar />
  </div>
</template>

<script>
import Navbar from './navbar'
import FooterBar from './footerBar'
import Container from './../components/container'

export default {
  components: { Container, FooterBar, Navbar },

  data() {
    return {}
  }
}
</script>
