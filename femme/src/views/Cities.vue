<template>
  <div class="cities">
    <ampersand />
    <offices />
  </div>
</template>

<script>
import Ampersand from '../components/Ampersand.vue'
import Offices from '../components/Offices.vue'

export default {
  components: {
    Ampersand,
    Offices
  }
}
</script>

<style>
  .cities {
    width: 50vw;
    height: 100vh;
    display: flex;
  }
</style>