<template>
  <div class="track-caption">
    <div class="track-caption__number">{{ number }}</div>
    <div class="track-caption__excerpt">{{ excerpt }}</div>
    <div class="track-caption__time">{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: "TrackLike",
  props: {
    number: {
      type: String,
      required: true 
    },
    excerpt: {
      type: String,
      required: true
    },
    time: {
      type: String,
      requied: true
    }
  }  
}
</script>

<style lang="scss">
  .track-caption {
    display: flex;
    align-items: center;

    &__number {
      font-size: 8px;
    }

    &__excerpt {
      margin: 0 20px;
      font-size: 50px;
    }

    &__time {
      font-size: 8px;
    }
  }
</style>