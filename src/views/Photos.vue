<template>
  <div class="photos">
    <div class="photos__top">
      <h2 class="photos__header">
        mode - beautè lifestyle - de- filès culture vogue - lovers <span>-</span> horoscope
      <img src="../assets/photos/mail.png" class="photos__mail" alt="">
      <img src="../assets/photos/face.png" class="photos__face" alt="">
      <img src="../assets/photos/bottles.png" class="photos__bottles" alt="">
      </h2>
    </div>
    <div class="photos__bottom">
      <p class="photos__postfix">
        a la maison
      </p>
      <img src="../assets/photos/appart.png" class="photos__appart" alt="">
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .photos {
    width: 100vw;
    height: 100vh;
    background-color: #f5f0e3;
    display: flex;
    flex-direction: column;
    font-size: 90px;
    font-size: 130px;
    line-height: 155px;
    font-weight: 600;

    &__top {
      display: flex;
      flex-wrap: wrap;
      text-align: justify;
      position: relative;

      .photos__header {
        word-spacing: 80px;

        span {
          margin: 0 231px;
        }
      }

      .photos__mail {
        position: absolute;
        width: 303px;
        height: 210px;
        top: 37px;
        right: 560px;
      }
      .photos__face {
        position: absolute;
        width: 243px;
        height: 240px;
        top: 330px;
        right: 60px;
      }
      .photos__bottles {
        position: absolute;
        width: 193px;
        height: 326px;
        bottom: 0px;
        left: 400px;
      }
    }

    &__bottom {
      position: relative;
      .photos__postfix {
        position: relative;
        &::after {
          content: "- vogue.com";
          position: absolute;
          bottom: -58px;
          font-size: 30px;
        }
      }

      .photos__appart {
        position: absolute;
        width: 193px;
        height: 230px;
        bottom: 10px;
        right: 616px;
      }
    }
  }
</style>