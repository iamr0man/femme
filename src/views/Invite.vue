<template>
  <div class="invite">
    <div class="invite__container">
      <h3 class="invite__header">cèline paris</h3>
      <div class="invite__details">
        <invite-paragraph
          v-for="(v, i) in paragraphs"
          :paragraph="v"
          :key="i" />  
      </div>
    </div>
  </div>
</template>

<script>
import InviteParagraph from '../components/InviteParagraph.vue'
export default {
  components: {
    InviteParagraph
  },
  data(){
    return {
      paragraphs: [
        'march 06 - match 12',
        '53 avenue montaigne 75008 paris',
        '+33 1 40 70 07 03'
      ]
    }
  }
}
</script>

<style lang="scss">
  .invite {
    width: 100vw;
    height: 100vh;
    background-color: #f5f0e3;
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
      width: 900px;
      display: flex;
      flex-direction: column;

      .invite__header {
        position: relative;
        font-size: 90.47px;
        font-weight: 600;

        &::after {
          content: '*pop-up';
          position: absolute;
          top: -63px;
          right: -81px;
          font-size: 33px;
          border: 1px solid black;
          border-radius: 50%;
          background-color: #f5f0e3;
          transform: rotate(15deg);
          padding: 33px;
        }
      }

      .invite__details {
        margin-top: 18px;
        line-height: 34px;
      }
    }
  }
</style>