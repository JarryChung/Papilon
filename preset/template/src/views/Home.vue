<template>
  <div class="home">
    <img
      src="../assets/images/vue-logo.png"
      alt="vue logo"
      style="width: 202px;"
    />
    <HelloWorld title="VUE APPLICATION" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
