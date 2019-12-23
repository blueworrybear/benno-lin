<template>
  <div ref="menu" class="menu" v-bind:class="{normal: !isExpand}">
    <div class="block-helper" v-if="!isExpand"></div>
    <font-awesome-icon v-if="!isExpand" icon="angle-double-up"
      class="icon faa-pulse animated" size="lg"
      v-on:click="openMenu"/>
    <div class="tabs">
      <div class="tab-head" v-if="isExpand" v-on:click="backToTop">
        <div class="head">
          <font-awesome-icon class="icon faa-float animated" icon="chevron-circle-up" v-if="isExpand" size="lg"/>
        </div>
      </div>
      <div style="width:50%" v-if="isMobile"></div>
      <div class="tab" v-for="(tab, index) in tabs" :key="index">
        <div class="tab-body" v-if="isExpand" :style="{width: tabWidth}"
             :class="{odd: index % 2 == 1, even: index % 2 == 0, trigger: index==currentIndex}"
             v-on:click="toggleTab(index)">
          <div style="width:50%"></div>
          <font-awesome-icon class="icon" v-if="tab[0] !=='' " :icon="tab[0]" size="lg"/>
          <strong v-if="!isMobile">{{tab[1]}}</strong>
          <div style="width:50%"></div>
        </div>
      </div>
      <div style="width:100%"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  props: {
    tabs: Array
  },
  data () {
    return {
      isExpand: false,
      currentIndex: -1,
      tabWidth: '100px',
      isMobile: false
    }
  },
  methods: {
    handleScroll (e) {
      let menuHeight = this.$refs.menu.clientHeight
      let clientHeight = document.documentElement.clientHeight
      let menuTop = this.$refs.menu.getBoundingClientRect().top
      let offset = clientHeight - menuHeight - 150
      if (!this.isExpand && menuTop < offset) {
        this.isExpand = true
      } else if (this.isExpand && menuTop > offset) {
        this.isExpand = false
      }
    },
    detectMobile () {
      if (document.documentElement.clientWidth < 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    setTabWidth () {
      let viewWidth = document.documentElement.clientWidth - 60
      let tabSize = Math.max(1, this.tabs.length)
      this.tabWidth = Math.min(viewWidth / tabSize, 250) + 'px'
    },
    toggleTab (index) {
      this.setIndex(index)
      this.$emit('tab-click')
    },
    openMenu () {
      this.$emit('open-menu')
    },
    backToTop () {
      this.$emit('back-top')
    },
    setIndex (index) {
      this.currentIndex = index
    },
    refresh () {
      this.detectMobile()
      this.setTabWidth()
    }
  },
  mounted () {
    this.refresh()
    window.addEventListener('resize', this.refresh)
  }
}
</script>

<style lang="less" scoped>
  @width: @menu-width;
  @height: @menu-height;
  @menu-top-height: 25px;
  @icon-margin: calc((@menu-height - 28px)/2);

  @spacer-width: 15px;
  @head-color: @menu-color;
  @odd-color: @odd-tab-color;
  @even-color: @even-tab-color;
  @trigger-color: @trigger-tab-color;

  .menu {
    background-color: @menu-color;
    width: 100%;
    height: @height;
    z-index: 100;
    transition: border-radius .1s ease-in-out, width .3s ease-in-out;
    vertical-align: middle;
  }

  .icon {
    vertical-align: middle;
    cursor: pointer;
  }

  .block-helper {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  .tabs {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
    height: @height;
    overflow: hidden;

    .head {
      width: 40px;
      margin-top: calc(@icon-margin + 2px);
      margin-left: 10px;
      margin-right: 20px;
      @media (min-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
      }
    }

    .tab {
      display: flex;
    }

    .tab-body {
      display: flex;
      text-align: center;
      vertical-align: middle;
      height: 100%;
      margin-left: -1px;
      cursor: pointer;
      strong {
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;
        vertical-align: middle;
        line-height: @height;
      }
      .icon {
        margin-top: @icon-margin;
        margin-bottom: @icon-margin;
        margin-left: auto;
        margin-right: auto;
        @media (min-width: 768px) {
          margin-left: 10px;
          margin-right: 10px;
        }
      }

      &.odd {
        background-color: @odd-color;
      }

      &.even {
        background-color: @even-color;
      }

      &.trigger {
        background-color: @trigger-color !important;
      }

      &:hover {
        color: rgb(114, 114, 114);
      }
    }

    .tab-head {
      background-color: @head-color;
      cursor: pointer;
    }
  }

  .normal:before {
    border-bottom: @menu-top-height solid @menu-color;
    border-left: calc(@width * 0.5) solid transparent;
    border-right: calc(@width *0.5) solid transparent;
    margin-bottom: 0px;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: calc(-@menu-top-height);
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
