<template>
  <div class="alphabet">
    <div class="alphabet__tracks tracks">
      <track-like
        v-for="(v, i) in alphabet"
        :number="v.insert"
        :excerpt="v.letters"
        :time="v.insert"
        :key="i"
      />
    </div>
    <div class="alphabet__font">
      <p>Femme - 52 PT.</p>
    </div>
  </div>
</template>

<script>
import TrackLike from '../components/TrackLike.vue'
export default {
  components: {
    TrackLike
  },
  data(){
    return {
      alphabet: [
        {insert: "A-F", letters: "Aa Bb Cc Dd Ee Ff"},
        {insert: "A-F", letters: "Gg Hh Ii Jj Kk Ll Mm"},
        {insert: "A-F", letters: "Nn Oo Pp Qq Rr Ss Tt"},
        {insert: "A-F", letters: "Uu Vv Ww Xx Yy Zz"},
        {insert: "A-F", letters: "1 2 3 4 5 6 7 8 9 0 &"},
      ]
    }
  }
}
</script>

<style>

</style>
<style lang="scss">
  .alphabet{
    width: 100vw;
    height: 100vh;
    background-color: #f5f0e3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    &__font {
      margin-top: 40px
    }
  }
</style>