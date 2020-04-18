<template>
  <div class="ovals">
    <div class="ovals__item"></div>
    <div class="ovals__item"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .ovals {
    width: 100vw;
    height: 33vh;
    background-color: #f5f0e3;
    display: flex;

    &__item {
      width: 50vw;
      height: inherit;
      border: 1px solid black;
      border-radius: 50%;
    }
  }
</style>