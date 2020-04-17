<template>
  <div class="leon-quote">
    <div class="leon-quote__author">-leon</div>
    <div class="leon-quote__tracks tracks">
      <track-like 
      v-for="(v, i) in captions"
      :number="v.number"
      :excerpt="v.excerpt"
      :time="v.time"
      :key="i"/>
    </div>
    <div class="leon-quote__author">"leon"</div>
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
      captions: [
        {number: '01', excerpt: "lost time", time: '3:52'},
        {number: '02', excerpt: "falling", time: '3:56'},
        {number: '03', excerpt: "hope is a heartache", time: '4:01'},
        {number: '04', excerpt: "come home to me", time: '2:57'},
        {number: '05', excerpt: "baby dont talk", time: '3:52'},
        {number: '06', excerpt: "better in the dark", time: '3:55'},
        {number: '07', excerpt: "cruel to care", time: '4:01'},
        {number: '08', excerpt: "pink", time: '2:57'},
        {number: '09', excerpt: "what you said", time: '3:52'},
        {number: '10', excerpt: "you and i", time: '3:56'},
      ]
    }
  }
}
</script>

<style lang="scss">
  .leon-quote {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #131313;
    font-weight: 600;
    color: #fff;  
  }

  .tracks {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 60px;
  }
</style>