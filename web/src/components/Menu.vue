<template>
  <div ref="menu" class="menu" v-bind:class="{normal: !isExpand}">
    <h1><font-awesome-icon class="faa-pulse animated" icon="angle-up" /></h1>
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
      isExpand: false
    }
  },
  methods: {
    handleScroll (e) {
      let menuHeight = this.$refs.menu.clientHeight
      let offset = document.documentElement.clientHeight - menuHeight - 100
      if (!this.isExpand && this.$refs.menu.getBoundingClientRect().top < offset) {
        this.isExpand = true
      } else if (this.isExpand && this.$refs.menu.getBoundingClientRect().top > offset) {
        this.isExpand = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @menu-color: #666;
  @width: @menu-width;
  @height: @menu-height;
  .menu {
    background-color: @menu-color;
    width: 100%;
    height: 50px;;
    z-index: 100;
    transition: border-radius .1s ease-in-out, width .3s ease-in-out;
  }

  .normal:before {
    border-bottom: 35px solid @menu-color;
    border-left: calc(@width / 2) solid transparent;
    border-right: calc(@width / 2) solid transparent;
    margin-bottom: 0px;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
    transition: all .1s ease-in-out;
  }

  .normal {
    transition: all .1s ease-in-out;
    background: @menu-color;
    height: @height;
    margin-bottom: 0px;
    width: @width;
  }
</style>
