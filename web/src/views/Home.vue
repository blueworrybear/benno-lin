<template>
  <div class="home">
    <Cover class="cover" :style="{height: viewHeight}"/>
    <Menu class="menu" ref="menu" :tabs="tabs" v-on:tab-click="tabClick" v-on:open-menu="openMenu" v-on:back-top="backTop"></Menu>
    <div ref="intro" class="odd"><Intro class="page"/></div>
    <div ref="award" class="even"><Award class="page"/></div>
    <div ref="ability" class="odd"><Ability class="page"/></div>
    <div ref="project" class="even"><Project class="page" /></div>
    <div ref="contact" class="contact"><Contact class="page"/></div>
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
var VueScrollTo = require('vue-scrollto')
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
      ],
      scrolling: false,
      duration: 500
    }
  },
  computed: {
    pages: function () {
      return [this.$refs.intro, this.$refs.award, this.$refs.ability, this.$refs.project, this.$refs.contact]
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
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    setViewHeight () {
      this.viewHeight = `${document.documentElement.clientHeight}px`
    },
    tabClick () {
      VueScrollTo.scrollTo(this.pages[this.$refs.menu.currentIndex], this.duration, this.getScrollOption())
    },
    backTop () {
      VueScrollTo.scrollTo(this.$refs.menu, this.duration, this.getScrollOption())
      this.$refs.menu.setIndex(-1)
    },
    getScrollOption () {
      const option = {
        easing: 'ease-in',
        onStart: () => {
          this.scrolling = true
        },
        onCancel: () => {
          this.scrolling = false
        },
        onDone: () => {
          this.scrolling = false
        }
      }
      return option
    },
    openMenu () {
      VueScrollTo.scrollTo(this.pages[0], this.duration, this.getScrollOption())
      this.$refs.menu.setIndex(0)
    },
    handleScroll (e) {
      if (this.scrolling) {
        return
      }
      let top = document.documentElement.scrollTop
      let wH = document.documentElement.clientHeight
      let sH = document.documentElement.scrollHeight
      if (top + wH >= sH - 100) {
        this.$refs.menu.setIndex(this.tabs.length - 1)
        return
      }
      this.pages.every((item, index) => {
        if (item.getBoundingClientRect().top > -10) {
          this.$refs.menu.setIndex(index)
          return false
        }
        return true
      })
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
    background-color: @odd-page-color;
  }
  .even {
    background-color: @even-page-color;
  }
</style>
