<template>
  <div class="intro">
    <div class="intro-container">
      <div class="">
        <h1 class="intro__header">femme</h1>
      </div>
      <div class="intro__caption-top">
        <div class="caption-item caption-item--small">
          <p class="caption-item__paragraph">femme display</p>
          <p class="caption-item__paragraph">fall 2019</p>
        </div>
        <div class="caption-item caption-item--small">
          <p class="caption-item__paragraph caption-item__paragraph--justify">display</p>
          <p class="caption-item__paragraph">figures</p>
        </div>
        <div class="caption-item caption-item--large">
          <p class="caption-item__paragraph">&amp;</p>
        </div>
        <div class="caption-item caption-item--small">
          <p class="caption-item__paragraph">type</p>
          <p class="caption-item__paragraph">symbols</p>
        </div>
      </div>
      <div class="intro__caption-bottom">
        <p class="intro__paragraph-bottom">a display type designed off of the elegency and dainty figures of high fashion and fragerance packaging. with high contrast in strokes and an attention to detail, this display font is perfect for</p>
        <p class="intro__paragraph-bottom intro__paragraph-bottom--large">any fashio house, or poster series</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .intro {
    &-container {
      // width: 95%;
      // margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
    background-color: #f5f0e3;
    color: #121315;
    width: 100vw;
    height: 100vh;
    &__header {
      font-size: 373px;
      text-align: center;
      text-transform: uppercase;
    }

    &__caption-top {
      display: flex;
      margin-top: 60px;
      padding: 0px 44px;
      .caption-item {
        display: flex;
        line-height: 14px;
        &--small {
          flex: 1 1 10%;
          flex-direction: column;
          align-items: flex-end;

          &:nth-child(1) {
            align-items: flex-start;
          }
        }

        &--large {
          flex: 1 1 70%;
          justify-content: center;
          align-items: center;
        }

        &__paragraph {
          font-size: 10px;
          font-weight: 600;

          &--justify {
            margin-right: 5px;
          }
        }
      }
    }

    &__caption-bottom {
      flex: 1 1 70%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .intro__paragraph-bottom {
        font-size: 17px;
        word-spacing: 18.4px;
        line-height: 38px;
        font-weight: 600;
        padding: 0 40px;
        text-align: justify;

        &--large {
          word-spacing: 266px;
        }
      }
    }
  }

  

</style>