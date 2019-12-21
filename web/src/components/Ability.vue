<template>
  <div>
    <h1>Ability</h1>
    <Skill class="skill" title="Programing Language" :skills="programSkill"/>
  </div>
</template>

<script>
import Skill from './Skill.vue'

export default {
  name: 'Ability',
  data () {
    return {
      programSkill: [['Python', 5], ['Go', 4], ['Javascript', 3]]
    }
  },
  components: {
    Skill
  }
}
</script>

<style lang="less" scoped>
  .skill {
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
  }
</style>
