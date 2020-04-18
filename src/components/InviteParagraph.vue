<template>
  <p ref="parag" class="invite__paragraph"></p>
</template>

<script>
export default {
  props: {
    paragraph: {
      type: String,
      required: true
    },
  },
  mounted(){
    this.$refs.parag.innerHTML = this.paragraph.split(' ').map(v => `<span>${v}</span>`).join('')
  }
}
</script>

<style>
  .invite__paragraph {
    display: flex;
    justify-content: space-between;
  }
</style>