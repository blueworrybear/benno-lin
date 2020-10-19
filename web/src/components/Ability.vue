<template>
  <div>
    <section-head
      title="Abilities"
      lead="“The noblest pleasure is the joy of understanding.”"
    />
    <Skill
      class="skill"
      title="Programing Languages"
      :skills="sortSkills(programSkill)"
    />
    <Skill class="skill" title="Skills" :skills="sortSkills(skills)" />
    <Skill class="skill" title="Tools" :skills="sortSkills(tools)" />
    <Skill class="skill" title="Language" :skills="sortSkills(langs)" />
  </div>
</template>

<script>
import Skill from './Skill.vue'

export default {
  name: 'Ability',
  data() {
    return {
      programSkill: [
        ['Python', 5],
        ['Go', 5],
        ['JavaScript', 4],
        ['TypeScript', 4],
        ['Less', 4],
        ['Perl', 5],
        ['C', 4],
        ['C++', 4],
        ['Html', '3'],
        ['Java', 3],
        ['PHP', 4],
        ['SQL', 4],
        ['Objective-C', 2],
        ['CSS', 4],
        ['Shell', 5],
        ['TCL', 3]
      ],
      skills: [
        ['AngularJS', 4],
        ['Vue', 4],
        ['React', 3],
        ['JSON', 5],
        ['Electron', 4],
        ['Design Patterns', 4],
        ['Qt Design', 2],
        ['MVC Pattern', 4],
        ['SQLite', 5],
        ['ORM', 3],
        ['UML', 3]
      ],
      tools: [
        ['VSCode', 5],
        ['Sublime Text', 5],
        ['Git', 4],
        ['Chrome Debug Tool', 4],
        ['Docker', 3],
        ['GCloud', 4],
        ['Azure', 3],
        ['Linux', 5],
        ['Windows', 5],
        ['Mac', 4],
        ['npm', 3],
        ['Drone', 3],
        ['Calibre', 3]
      ],
      langs: [
        ['Mandarin Chinese', 5],
        ['English', 4]
      ]
    }
  },
  methods: {
    sortSkills(skills) {
      let sortedSkills = [...skills]
      sortedSkills.sort(function(a, b) {
        return b[1] - a[1]
      })
      return sortedSkills
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
  margin-bottom: 40px;
}
</style>
