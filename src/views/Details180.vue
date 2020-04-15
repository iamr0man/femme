<template>
  <div class="details">
    <div class="details__font">180 pt</div>
    <div class="details__column">
      <p class="details__item">Femme*</p>
      <p class="details__item">AaBb-CcDd</p>
      <p class="details__item">&amp;Homme</p>
      <p class="details__item">12345678\9</p>
    </div>
    <div class="details__font">180 pt</div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .details {
    $self: &;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f5f0e3;
    text-transform: none;

    &__column {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 95px;
      font-weight: 600;

      #{$self}__item {
        font-size: 80px;

        &:nth-child(3) {
          position: relative;

          &::after {
            content: "©";
            position: absolute;
            top: 0;
            right: 0;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
</style>