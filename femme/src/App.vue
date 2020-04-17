<template>
  <div id="app">
    <intro />
    <details180 />
    <love-quote />
    <cities />
    <leon-quote />
    <alphabet />
    <perspective />
  </div>
</template>

<script>
import Intro from './views/Intro.vue'
import Details180 from './views/Details180.vue'
import LoveQuote from './views/LoveQuote.vue'
import Cities from './views/Cities.vue'
import LeonQuote from './views/LeonQuote.vue'
import Alphabet from './views/Alphabet.vue'
import Perspective from './views/Perspective.vue'

export default {
  name: "App",
  components: {
    Intro,
    Details180,
    LoveQuote,
    Cities,
    LeonQuote,
    Alphabet,
    Perspective
  }
};
</script>

<style lang="scss">
</style>
