<template>
  <div class="home">
    <Cover class="cover" :style="{height: viewHeight}"/>
    <Menu class="menu"></Menu>
    <div style="background-color: black"><Intro class="page"/></div>
    <Award class="page"/>
    <Ability class="page"/>
    <Project class="page" />
    <Contact class="page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from '@/components/Cover.vue'
import Menu from '@/components/Menu.vue'
import Intro from '@/components/Intro.vue'
import Award from '@/components/Award.vue'
import Ability from '@/components/Ability.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'home',
  data () {
    return {
      viewHeight: '0px'
    }
  },
  components: {
    Cover,
    Menu,
    Intro,
    Award,
    Ability,
    Project,
    Contact
  },
  mounted () {
    this.setViewHeight()
    window.addEventListener('resize', this.setViewHeight)
  },
  methods: {
    setViewHeight () {
      this.viewHeight = `${document.documentElement.clientHeight}px`
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    height: 100%;
    width: 100vw;
  }

  .menu {
    position: sticky;
    margin-top: calc(-@menu-height);
    margin-left: auto;
    margin-right: auto;
    top: 0px;
  }
</style>
