<template>
  <div class="main">
    <img src="../assets/logo.png">
    <div class="desc">
      <p>不到园林,</p>
      <p>怎知春色如许</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .desc{
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 2rem;
  }
</style>
