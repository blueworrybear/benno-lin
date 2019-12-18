<template>
  <div>
    <h1 class="title" ref="title">Bear</h1>
    <div style="position: relative;">
      <parallax :fixed="true">
        <img src="@/assets/cover.jpg">
      </parallax>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'Cover',
  components: {
    Parallax
  },
  mounted: function () {
    window.addEventListener('resize', this.windowResize)
  },
  methods: {
    windowResize (e) {
      console.log('resize')
      console.log(this.$refs.title.clientHeight)
    }
  }
}
</script>

<style scoped lang="less">
  .title {
    // position: absolute;
    // left: 50px;
    // top: 0px;
    vertical-align: middle;
  }
</style>
