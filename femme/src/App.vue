<template>
  <div id="app">
    Femme
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">

@font-face {
  font-family: "Femme";
  src: url('./assets/fonts/femme.ttf')
}

#app {
  font-family: "Femme", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
