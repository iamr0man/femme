<template>
  <div class="brand">
    <celine />
    <div class="brand__model">
      <img class="brand__photo" src="../assets/photos/model.jpg" alt="celine model">
      <p class="brand__caption">celine is a french ready-to-wear and leather luxury goods celine that has been owned by lvmg group since 1996. it was</p>
      <p class="brand__caption--large"><span>founded</span> <span>in</span> <span>1945</span> <span>by</span> <span>celine</span> <span>vipiana</span></p>
    </div>
  </div>
</template>

<script>
import Celine from '../components/Celine.vue'
export default {
  components: {
    Celine
  }

}
</script>

<style lang="scss">
  .brand {
    width: 100vw;
    height: 100vh;
    display: flex;

    &__model {
      position: relative;
      width: 50vw;
      height: inherit;
      background-color: #f5f0e3;

      .brand__photo {
        width: inherit;
        height: inherit;
        border-radius: 50%;
      }

      .brand__caption {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 20px;
        &--large {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>