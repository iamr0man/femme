<template>
  <div id="app">
    <intro />
    <details180 />
    <love-quote />
    <cities />
  </div>
</template>

<script>
import Intro from './views/Intro.vue'
import Details180 from './views/Details180.vue'
import LoveQuote from './views/LoveQuote.vue'
import Cities from './views/Cities.vue'

export default {
  name: "App",
  components: {
    Intro,
    Details180,
    LoveQuote,
    Cities
  }
};
</script>

<style lang="scss">
</style>
