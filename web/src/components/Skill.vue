<template>
  <div>
    <h2>{{title}}</h2>
    <div class="content">
      <div class="row" v-for="(skill, index) in skills" :key="index" v-on:mouseover="skillHover" v-on:mouseout="skillOut">
        <div>{{skill[0]}}</div>
        <div>
          <font-awesome-icon class="paw" :class="{on: i <= skill[1]}" v-for="i in 5" :key="i" size="lg" icon="paw"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    title: String,
    skills: Array // Array to tuple (skill, score)
  },
  methods: {
    skillHover (e) {
      let icons = e.currentTarget.querySelectorAll('.paw')
      icons.forEach(icon => {
        icon.classList.add('hover')
      })
    },
    skillOut (e) {
      let icons = e.currentTarget.querySelectorAll('.paw')
      icons.forEach(icon => {
        icon.classList.remove('hover')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  .row {
    display: flex;
    justify-content: space-between;
    width: 45%;
    margin-right: 20px;
    padding-top: 3px;
    padding-bottom: 3px;
    vertical-align: middle;
    &:hover {
      background: gray;
    }
    .paw {
      margin-right: auto;
      margin-left: 1px;
      transition: all .3s ease-in-out;
      &.on{
        color: red;
      }
      &.hover{
        margin-left: 10px;
        transition: all .3s ease-in-out;
      }
    }
  }
</style>
