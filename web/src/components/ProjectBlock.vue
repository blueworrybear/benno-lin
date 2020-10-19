<template>
  <div class="block" v-on:mouseover="blockHover" v-on:mouseleave="blockOut">
    <div class="block-helper" v-if="!isHover"></div>
    <img :class="{ small: isHover }" :src="logo" />
    <div class="icon-box" v-on:click="openLink">
      <div class="icon-helper"></div>
      <font-awesome-icon class="icon" icon="external-link-alt" size="lg" />
    </div>
    <transition name="fade-up">
      <h3 class="title" v-if="isHover">{{ title }}</h3>
    </transition>
    <transition name="slide-in" mode="out-in">
      <p class="content" v-if="isHover" v-html="content"></p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProjectBlock',
  props: {
    logo: String,
    title: String,
    content: String,
    link: String
  },
  data() {
    return {
      isHover: false,
      showContent: false
    }
  },
  methods: {
    blockHover() {
      this.isHover = true
    },
    blockOut() {
      this.isHover = false
    },
    openLink() {
      window.open(this.link)
    }
  }
}
</script>

<style lang="less" scoped>
@block-width: 300px;
@block-height: 200px;
@small-image-size: 50px;
@icon-size: 45px;
.block {
  position: relative;
  width: @block-width;
  height: @block-height;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  .block-helper {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  img {
    display: inline-block;
    vertical-align: middle;
    height: calc(@block-height * 0.8);
    transition: all 0.2s ease-in-out;
    &.small {
      height: @small-image-size;
      margin-top: 20px;
      vertical-align: top;
      transition: all 0.2s ease-in-out;
    }
  }

  .icon-box {
    position: absolute;
    top: 0px;
    right: 0px;
    width: @icon-size;
    height: @icon-size;
    background-color: gray;
    vertical-align: middle;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    .icon-helper {
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    .icon {
      color: whitesmoke;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .fade-up-enter {
    opacity: 0;
    transform: translateY(50px);
  }

  .fade-up-enter-active {
    transition: all 0.5s ease;
  }

  .slide-in-enter {
    transform: translateX(@block-width);
  }
  .slide-in-enter-active {
    transition: transform 0.5s ease-out;
  }

  .content,
  .title {
    color: whitesmoke;
  }

  .content {
    text-align: left;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
}
</style>
