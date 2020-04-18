<template>
  <div id="app">
    <intro />
    <details180 />
    <love-quote />
    <cities />
    <photos />
    <leon-quote />
    <alphabet />
    <perspective />
    <about />
    <ovals />
    <invite />
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
import About from './views/About.vue'
import Photos from './views/Photos.vue'
import Ovals from './views/Ovals.vue'
import Invite from './views/Invite.vue'

export default {
  name: "App",
  components: {
    Intro,
    Details180,
    LoveQuote,
    Cities,
    LeonQuote,
    Alphabet,
    Perspective,
    About,
    Photos,
    Ovals,
    Invite
  }
};
</script>

<style lang="scss">
</style>
