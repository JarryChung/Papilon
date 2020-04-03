<template>
  <div class="hello-world">
    <h1>{{ title }}</h1>
    <p>Created by <a href="https://www.npmjs.com/package/papilon" target="_blank">papilon</a></p>

    <div class="links">
      <p>
        For a guide and recipes on how to configure / customize this project,
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>

      <div class="links-box left">
        <h3>Essential Links</h3>
        <ul>
          <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
          <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
          <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
      </div>

      <div class="links-box right">
        <h3>Ecosystem</h3>
        <ul>
          <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
          <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
          <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
          <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: { type: String, default: 'VUE APPLICATION' }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello-world {
  .links {
    margin-top: 11vh;
    text-align: center;
    .links-box {
      display: inline-block;
      width: 22vw;
      padding: 12px 18px;
      text-align: left;
      border: 1px #EEEEEE solid;
      border-radius: 5px;
    }
    .left {
      margin-right: 10px;
    }
    .right {
      margin-left: 10px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
    }
  }

  a {
    color: #42b983;
  }
}
</style>
