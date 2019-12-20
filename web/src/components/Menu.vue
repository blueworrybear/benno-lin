<template>
  <div ref="menu" class="menu" v-bind:class="{circle: !isSticky}">
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      isSticky: false
    }
  },
  methods: {
    handleScroll (e) {
      if (!this.isSticky && this.$refs.menu.getBoundingClientRect().top <= 0) {
        this.isSticky = true
      } else if (this.isSticky && this.$refs.menu.getBoundingClientRect().top > 0) {
        this.isSticky = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @diameter: 50px;
  @menu-height: 50px;
  @menu-width: 100px;
  @menu-color: #666;

  .menu {
    background-color: @menu-color;
    width: 100%;
    height: 50px;;
    transition: border-radius .1s ease-in-out, width .3s ease-in-out;
    // background: red;
    // display: inline-block;
    // height: 55px;
    // margin-left: 20px;
    // margin-top: 55px;
    // position: relative;
    // width: 100px;
  }

   .circle:before {
    border-bottom: 35px solid @menu-color;
    border-left: calc(@menu-width / 2) solid transparent;
    border-right: calc(@menu-width / 2) solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
    transition: all .1s ease-in-out;
  }

  .circle {
    // border-radius: 50%;
    // width: @diameter;
    // height: @diameter;
    // transition: border-radius .2s ease-in-out, width .1s;
    transition: all .1s ease-in-out;
    background: @menu-color;
    height: @menu-height;
    margin-bottom: 0px;
    width: @menu-width;
  }
</style>
