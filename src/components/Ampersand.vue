<template>
  <div class="ampersand">
    <div class="ampersand__header">
      <p>symbol</p>
      <p>ampersand</p>
    </div>
    <div class="ampersand__item">
      <p>&amp;</p>
    </div>
    <div class="ampersand__text">
      <p class="ampersand__paragraph ampersand__paragraph">the ampersand is the logogram &amp;, representing the conjunction "and". it originated as a ligature of</p>
      <p class="ampersand__paragraph ampersand__paragraph--large">the lettes et - latin fot "and"</p>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .ampersand {
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f5f0e3;

    &__header {
      flex: 1 1 3%;
      display: flex;
      justify-content: space-between;

      padding: 10px;

      font-size: 9px;
      font-weight: 600;
    }

    &__item {
      flex: 1 1 94%;
      font-size: 540px;
      position: relative;
      font-weight: bold;

      &::before {
        content: "&";
        position: absolute;
        left: 0;
        top: 0;
        font-size: 630px;
      }

      &::after {
        content: "&";
        position: absolute;
        left: 0;
        top: 0;
        font-size: 720px;
      }
    }

    &__text {
      flex: 1 1 3%;
      width: 50vw;
      .ampersand__paragraph {
        font-weight: 600;
        font-size: 10px;

        &--large {
          word-spacing: 105px;
        } 
      }
    }
  }
</style>