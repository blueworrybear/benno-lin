<template>
  <div class="cover">
    <parallax class="img-container" style="height: 100vh;">
      <img src="@/assets/me2.jpg" v-if="!isMobile">
      <img src="@/assets/me2_mobile.jpg" v-if="isMobile">
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
  mounted () {
    window.addEventListener('resize', this.detectMobile)
    this.detectMobile()
  },
  data () {
    return {
      menuTop: 10,
      isMobile: false
    }
  },
  methods: {
    detectMobile () {
      const width = document.documentElement.clientWidth
      if (width <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  }
}
</script>

<style scoped lang="less">

  .title {
    position: relative;
    left: 0px;
    top: -90vh;
    text-shadow: -1px 0 whitesmoke, 0 1px whitesmoke, 1px 0 whitesmoke, 0 -1px whitesmoke;
    @media (min-width: 768px) {
      top: -80vh;
    }
    font-size: 72px;
    color: @cover-title-color;
  }

  .img-container{
    overflow: hidden;
  }
</style>
