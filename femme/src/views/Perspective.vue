<template>
  <div class="perspective">
    <perspective-item
      v-for="(v,i) in sizes"
        :fontSize="v"
        :key="i"
      />
  </div>  
</template>

<script>
import PerspectiveItem from '../components/PerspectiveItem.vue' 
export default {
  name: "Perspective",
  components: {
    PerspectiveItem
  },
  data(){
    return {
      sizes: [140, 100, 72, 48, 24, 72, 100, 140]
    }
  }
}
</script>

<style lang="scss">
  .perspective {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #131313;;
  }
</style>