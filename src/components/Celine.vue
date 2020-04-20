<template>
  <div class="celine">
    <div class="celine__container">
      <div class="celine__top">
        <div class="celine__header">
          <h3>53 avenue montaigne 75008 paris</h3>
        </div>
        <div class="celine__details">
          <p>paris</p>
          <p class="caline__caption">celine is a french ready-to-wear and leather luxury goods celine that has been owned by lvmg group since 1996. it was founded  in 1945 by celine vipiana</p>
        </div>
        <div class="celine__oval"></div>
      </div>
      <div class="celine__bottom">
        <div class="celine__oval"></div>
        <h4 class="celine__number">
          <span>+33</span> <span>1</span> <span>40</span> <span>70</span> <span>07</span> <span>03</span>
        </h4>
      </div>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .celine {
    &__container {
      width: 50vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #000;
      color: #fff;
      font-weight: 600;

      .celine__top {
        position: relative;
        display: flex;
        height: 50vw;
        flex-direction: column;

        .celine__header {
          font-size: 85px;
          text-align: justify;
        }

        .celine__details {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;

          font-size: 16px;

          .caline__caption {
            width: 470px;
          }
        }
      }

      .celine__oval {
        position: absolute;
        width: 50vw;
        height: 50vh;
        border: 1px solid #f5f0e3;
        border-radius: 50%;
      }

      .celine__bottom {
        position: relative;
        height: 50vw;
        display: flex;
        align-items: flex-end;

        .celine__number {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          font-size: 50px;
        }
      }
    }
  }
</style>