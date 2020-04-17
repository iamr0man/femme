<template>
  <div class="love-quote">
    <div class="love-quote__body">
      <p class="love-quote__quote love-quote__quote--extra-large">maybe love isnt</p>
      <p class="love-quote__quote love-quote__quote--small">fireworks - maybe <span>love is the</span></p>
      <p class="love-quote__quote love-quote__quote--large">smoke in the sky</p>
      <p class="love-quote__quote love-quote__quote--medium">when the show is over.</p>
    </div>
    <div class="love-quote__author">
      <p>archer</p>
      <p>smith</p>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .love-quote {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #121315;

    &__body {
      width: 1300px;
      display: flex;
      flex-direction: column;
      text-align: justify;
      line-height: 48px;

      .love-quote__quote {
        font-size: 40px;

        &--small {
          word-spacing: 40px;
        }

        &--medium {
          word-spacing: 102px;
        }

        &--large {
          word-spacing: 219px;
        }

        &--extra-large {
          word-spacing: 338px;
        }
      }
    }

    &__author {
      margin-top: 100px;
      width: 1300px;

      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
  }
</style>