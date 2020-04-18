<template>
  <div class="about">
    <h2 class="about__headers">
      <span class="about__header">mode beautè lifestyle culture defilès vogue</span>
      <span class="about__header about__header--space"><span>lovers</span> <span>horoscope</span></span>
      <div class="about__header about__header--space"><span>a</span> <span>la</span> <span>maison</span></div>
    </h2>
    <div class="about__bottom">
      <h5 class="about__title">15 films feel good à revoir</h5>
      <div class="about__details">
        <p class="about__detail">ces 15 films drles et tendres boostend illico notre bonne humeur et nous donnent en filligrane quelques leviers pour etre pleinement heureux. on met</p>  
        <p class="about__detail">ces 15 films drles et tendres boostend illico notre bonne humeur et nous donnent en filligrane quelques leviers pour etre pleinement heureux. on met</p>  
        <p class="about__detail">ces 15 films drles et tendres boostend illico notre bonne humeur et nous donnent en filligrane quelques leviers pour etre pleinement heureux. on met</p>  
        <p class="about__detail about__detail--space"><span>laires</span> <span>a</span> <span>la</span> <span>bonne</span> <span>humeur</span> <span>contragieuse</span></p>  
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
    $self: &;
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

      #{$self}__header {
        &--space {
          display: flex;
          justify-content: space-between;
        } 
      }
    }

    &__bottom {
      #{$self}__title {
        font-size: 52px;
        word-spacing: 137px;
      }

      #{$self}__details {
        text-align: justify;
        line-height: 20px;
        font-weight: 600;

        #{$self}__detail {
          font-size: 13.99px;
        }

        #{$self}__detail--space{
          display: flex;
          justify-content: space-between;
        } 
      }
    }
  }
</style>