<template>
  <div class="offices">
    <div class="offices__oval">
      <div class="offices__cities">
        <p class="offices__city">PARIS&amp;</p>
        <p class="offices__city">ROME&amp;</p>
        <p class="offices__city">CALIFORNIA</p>
        <p class="offices__city">coast&amp;</p>
        <p class="offices__city">BOMBAY&amp;</p>
        <p class="offices__city">FIJI&amp;</p>
        <p class="offices__city">malibu&amp;</p>
        <p class="offices__city">NEW YORK&amp;</p>
        <p class="offices__city">BARCELONA&amp;</p>
        <p class="offices__city">tahiti&amp;</p>
        <p class="offices__city">HAWAII&amp;</p>
        <p class="offices__city">LONDON</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .offices {
    width: 50vw;
    height: 100vh;
    display: flex;
    background-color: #121315;
    text-transform: none;

    &__oval {
      width: 50vw;
      height: 100vh;
      border: 2px solid #fff;
      border-radius: 50%;
    }

    &__cities {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 77px;
    }

    &__city {
      color: white;
      font-size: 60px;
      font-weight: 600;
    }
  }
</style>