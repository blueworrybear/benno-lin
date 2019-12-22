<template>
  <div class="home">
    <Cover class="cover" :style="{height: viewHeight}"/>
    <Menu class="menu" :tabs="tabs"></Menu>
    <div class="odd"><Intro class="page"/></div>
    <div class="even"><Award class="page"/></div>
    <div class="odd"><Ability class="page"/></div>
    <div class="even"><Project class="page" /></div>
    <div class="contact"><Contact class="page"/></div>
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
      viewHeight: '0px',
      tabs: [
        ['user-tie', 'Profile'],
        ['award', 'Certifications'],
        ['thumbs-up', 'Abilities'],
        ['wrench', 'Projects'],
        ['comment', 'Contact']
      ]
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
    width: 100%;
  }

  .menu {
    position: sticky;
    margin-top: calc(-@menu-height);
    margin-left: auto;
    margin-right: auto;
    top: 0px;
  }

  .contact {
    background-color: #434242;
  }

  .odd {
    background-color: antiquewhite;
  }
  .even {
    background-color: cadetblue;
  }
</style>
