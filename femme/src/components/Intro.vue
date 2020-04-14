<template>
  <div class="intro">
    <h1 class="intro__header">femme</h1>
    <div class="intro__caption-top">
      <div class="caption-item caption-item--small">
        <p class="caprion-item__paragraph">femme display</p>
        <p class="caprion-item__paragraph">fall 2019</p>
      </div>
      <div class="caption-item caption-item--small">
        <p class="caprion-item__paragraph">display</p>
        <p class="caprion-item__paragraph">figures</p>
      </div>
      <div class="caption-item caption-item--large">
        <p class="caprion-item__paragraph">&amp;</p>
      </div>
      <div class="caption-item caption-item--small">
        <p class="caprion-item__paragraph">type</p>
        <p class="caprion-item__paragraph">symbols</p>
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
    background-color: #f5f0e3;
    color: #121315;
    &-header {
      width: 100%;
      font-size: 190px;
      /* text-align: center; */
      text-transform: uppercase;
    }

    &__caption-top {
      display: flex;
      .caption-item {
        &--small {
          flex-basis: 10%;
        }

        &--large {
          flex-basis: 70%;
        }

        &__paragraph {
          font-size: 12px;
          text-transform: uppercase;
        }

        &:last-child {
          justify-content: flex-end;
        }
      }
    }
  }

  

</style>