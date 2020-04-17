<template>
  <div class="about">
    <h2 class="about__headers">
      <span class="about__header">mode beaute lifestyle culture defiles vogue</span>
      <span class="about__header about__header--large">lovers horoscope</span>
      <span class="about__header about__header--small">a la maison</span>
    </h2>
    <div class="about__bottom">
      <h5 class="about__title">15 films feel good a revoir</h5>
      <div class="about__details">
        <p class="about__detail">ces 15 films drles et tendres boostend illico notre bonne humeur et nous donnent en filligrane quelques leviers pour etre pleinement heureux. on met</p>  
        <p class="about__detail">ces 15 films drles et tendres boostend illico notre bonne humeur et nous donnent en filligrane quelques leviers pour etre pleinement heureux. on met</p>  
        <p class="about__detail">ces 15 films drles et tendres boostend illico notre bonne humeur et nous donnent en filligrane quelques leviers pour etre pleinement heureux. on met</p>  
        <p class="about__detail--large">laires a la bonne humeur contragieuse</p>  
      </div>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .about {
    width: 100vw;
    height: 100vh;
    background-color: #f5f0e3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__headers {
      display: flex;
      flex-direction: column;
      font-size: 90px;
      font-weight: 600;
      word-spacing: 66px;

      .about__header {
        &--large {
          word-spacing: 532px;
        } 
        &--small {
          word-spacing: 485px;
        } 
      }
    }

    &__bottom {
      text-align: justify;
      .about__title {
        font-size: 52px;
        word-spacing: 137px;
      }
    }
  }
</style>