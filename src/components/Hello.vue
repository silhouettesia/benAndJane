<template>
  <div class="hello">
    <div class="hello-main">
      <img src="/static/img/enter.jpg">
    </div>
    <div class="hello-enter">
      <router-link to="/home">
        <img src="/static/img/enter.png">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 960px;
  margin: 50px auto;
  text-align: center;
}
.hello-main {
  width: 500px;
  margin: 0 auto;
}
.hello-enter {
  width: 500px;
  margin: 20px auto;
}
</style>
