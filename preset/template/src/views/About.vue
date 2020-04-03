<template>
  <div class="about">
    <img
      src="../assets/images/papilon-icon.svg"
      alt="papilon logo"
      style="width: 202px;"
    />
    <JarryChung />
  </div>
</template>

<script>
// @ is an alias to /src
import JarryChung from '@/components/JarryChung.vue'

export default {
  name: 'About',
  components: {
    JarryChung
  }
}
</script>
