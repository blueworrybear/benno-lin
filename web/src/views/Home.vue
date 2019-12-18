<template>
  <div class="home">
    <Cover/>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from '@/components/Cover.vue'
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    Cover,
    HelloWorld
  }
}
</script>
