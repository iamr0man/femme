<template>
  <div class="perspective-item">
    <p 
      class="perspective-item__start"
      :style="{ fontSize: fontSize + 'px' }">
      roman
    </p>
    <div class="perspective-item__start">
      {{ fontSize + ' PT.'}}
    </div>
    <p
      class="perspective-item__end"
      :style="{ fontSize: fontSize + 'px' }">
      holiday
    </p>
  </div>  
</template>

<script>
export default {
  props: {
    fontSize: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
  .perspective-item {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 70px;
  }
</style>