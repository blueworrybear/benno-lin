<template>
  <div class="home">
    <Cover class="cover"/>
    <Menu ref="menu" class="menu"></Menu>
    <Intro class="page"/>
    <Award class="page"/>
    <HelloWorld class="hello"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from '@/components/Cover.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Menu from '@/components/Menu.vue'
import Intro from '@/components/Intro.vue'
import Award from '../components/Award.vue'

export default {
  name: 'home',
  components: {
    Cover,
    HelloWorld,
    Menu,
    Intro,
    Award
  }
}
</script>

<style lang="less" scoped>
  .home {
    // height: 100vh;
    width: 100%;
  }

  .cover {
    height: 100vh;
  }

  .menu {
    margin-top: calc(-@menu-height);
    // margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;
    position: sticky;
    top: 0px;
  }

  .hello {
    padding: 50px;
  }
</style>
