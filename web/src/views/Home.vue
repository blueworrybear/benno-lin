<template>
  <div class="home">
    <Cover class="cover"/>
    <Menu ref="menu" class="menu"></Menu>
    <HelloWorld class="hello"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from '@/components/Cover.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Menu from '@/components/Menu.vue'
export default {
  name: 'home',
  components: {
    Cover,
    HelloWorld,
    Menu
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
