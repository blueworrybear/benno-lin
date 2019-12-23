<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <p>{{lead}}</p>
    <hr class="spacer"/>
  </div>
</template>

<script>
export default {
  name: 'SectionHead',
  props: {
    title: String,
    lead: String
  }
}
</script>

<style lang="less" scoped>

  .title {
    margin-bottom: 20px;
    font-size: @title-size;
    color: @title-color;
  }

  .spacer {
    opacity: 0.2;
    border: 0;
    border-top: 1px solid #727878;
    height: 0;
    margin: 40px 40px;
  }
</style>
