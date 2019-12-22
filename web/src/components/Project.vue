<template>
  <div>
    <h1>Side Projects</h1>
    <div class="projects">
      <ProjectBlock class="leetcode" :logo="require('@/assets/leetcode.png')"
                    title="LeetCode Practice"
                    content="Test<br><a href='http://www.pascalvangemert.nl/#/projects'>line</a>"/>
      <ProjectBlock class="gitea" :logo="require('@/assets/gitea.png')"/>
    </div>
  </div>
</template>

<script>
import ProjectBlock from './ProjectBlock.vue'

export default {
  name: 'Project',
  components: {
    ProjectBlock
  }
}
</script>

<style lang="less" scoped>

  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .gitea {
    background-color:#34495e;
  }

  .leetcode {
    background: rgb(14, 13, 13);
  }
</style>
