<template>
  <div class="cover">
    <parallax class="img-container" style="height: 100vh;">
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
  }
}
</script>

<style scoped lang="less">

  .title {
    position: relative;
    left: 0px;
    top: -500px;
  }

  .img-container{
    overflow: hidden;
  }
</style>
