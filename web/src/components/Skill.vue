<template>
  <div>
    <div class="content">
      <h2>{{title}}</h2>
      <div class="row" v-for="(skill, index) in skills" :key="index" v-on:mouseover="skillHover" v-on:mouseout="skillOut">
        <div class="name">{{skill[0]}}</div>
        <div class="score">
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
      const icons = e.currentTarget.querySelectorAll('.paw')
      icons.forEach(icon => {
        icon.classList.add('hover')
      })
    },
    skillOut (e) {
      const icons = e.currentTarget.querySelectorAll('.paw')
      icons.forEach(icon => {
        icon.classList.remove('hover')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  h2 {
    width: 100%;
    text-align: left;
    margin-bottom: 40px;
    color: @subtitle-color;
    font-size: 28px;
  }
  .content {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 900px) {
      width: 80%;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    @media (min-width: 900px) {
      width: 45%;
      margin-left: 5px;
      margin-right: 20px;
    }
    padding-top: 3px;
    padding-bottom: 3px;
    vertical-align: middle;
    &:hover {
      background: @skill-hover;
    }
    .name {
      font-size: 16px;
      text-align: left;
      max-width: 200px;
      @media (min-width: 900px) {
        max-width: 200px;
      }
    }

    .score {
      width: 180px;
      display: flex;
      justify-content: flex-end;
    }
    .paw {
      margin-left: 1px;
      transition: all .3s ease-in-out;
      color: @score-off;
      &.on{
        color: @score-on;
      }
      &.hover{
        margin-left: 5px;
        transition: all .3s ease-in-out;
      }
    }
  }
</style>
