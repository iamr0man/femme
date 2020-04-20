<template>
  <div class="films">
    <div class="films__part">
      <div class="films__header">
        <h3>femme</h3>
      </div>
      <div class="films__body">
        <img class="films__image" src="../assets/photos/bottles.png" alt="">
        <div class="films__details">
          <div class="films__paragraph films__paragraph--small">
            <p class="films__number">01</p>
            <p class="films__text">Ces 15 films drôles et tendres boostent illico notre bonne humeur et nous donnent en filigrane quelques leviers pour être pleinement heureux. on met (un peu) de baume au coeur en (re)voyant ces 15 films solaires a la bonne humeur contaieuse</p>
          </div>
          <div class="films__paragraph films__paragraph--large">
            <p class="films__number">02</p>
            <p class="films__text">Ces 15 films drôles et tendres boostent illico notre bonne humeur et nous donnent en filigrane quelques leviers pour être pleinement heureux. on met (un peu) de baume au coeur en (re)voyant ces 15 films solaires a la bonne humeur contaieuse</p>
          </div>
        </div>
      </div>
    </div>
    <div class="films__part">
      <div class="films__header">
        <h3>femme</h3>
      </div>
      <div class="films__body">
        <img class="films__image films__image--right" src="../assets/photos/face.png" alt="face">
        <div class="films__details films__details--right">
          <div class="films__paragraph films__paragraph--large">
            <p class="films__number">01</p>
            <p class="films__text">Ces 15 films drôles et tendres boostent illico notre bonne humeur et nous donnent en filigrane quelques leviers pour être pleinement heureux. on met (un peu) de baume au coeur en (re)voyant ces 15 films solaires a la bonne humeur contaieuse</p>
          </div>
          <div class="films__paragraph films__paragraph--small">
            <p class="films__number">02</p>
            <p class="films__text">Ces 15 films drôles et tendres boostent illico notre bonne humeur et nous donnent en filigrane quelques leviers pour être pleinement heureux. on met (un peu) de baume au coeur en (re)voyant ces 15 films solaires a la bonne humeur contaieuse</p>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .films {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    font-weight: 600;

    &__part {
      width: 35vw;
      min-height: 1050px;
      margin-right: 15px;
      background-color: #fff;

      display: flex;
      flex-direction: column;

      .films__header {
        font-size: 132px;
        margin-bottom: 20px; 
      }

      .films__body {
        position: relative;
        .films__image {
          width: 500px;
          height: 900px;
          padding: 30px 0 15px 15px;

          &--right {
            width: 663px;
            height: 663px;
            margin-bottom: 222px;
          }
        }
      
        .films__details {
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;

          &--right {
            flex-direction: row;
            justify-content: center;
          }

          .films__paragraph {
            width: 62%;
            display: flex;
            line-height: 25px;
            font-size: 12px;

            &--large {
              width: 67%;
              font-size: 21px;
              line-height: 35px;
            }
            .films__number {
              margin-right: 25px;
            }

            .films__text {
              text-align: justify;
            }
          }
        }
      }
    }
  }
</style>