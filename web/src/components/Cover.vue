<template>
  <div class="cover">
    <parallax style="height: 100vh">
      <img src="@/assets/cover.jpg">
    </parallax>
    <h1 class="title" ref="title">Hi, I'm Benno!</h1>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'Cover',
  components: {
    Parallax
  },
  data () {
    return {
      menuTop: 10
    }
  },
  mounted: function () {
    this.putMenu()
    window.addEventListener('resize', this.windowResize)
  },
  methods: {
    windowResize (e) {
      // this.putMenu()
    }
    // putMenu () {
    //   let viewHeight = document.documentElement.clientHeight
    //   let titleBottom = this.$refs.title.getBoundingClientRect().bottom
    //   let menuHeight = this.$refs.menu.$el.clientHeight
    //   this.menuTop = viewHeight - menuHeight - this.$refs.title.clientHeight
    //   console.log(this.$refs.menu)
    //   console.log(this.menuTop)

    //   console.log(`vH: ${viewHeight} tB: ${titleBottom} mH: ${menuHeight}`)
    // }
  }
}
</script>

<style scoped lang="less">

  .title {
    position: relative;
    left: 0px;
    top: -500px;
  }
</style>
