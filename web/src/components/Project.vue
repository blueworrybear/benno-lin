<template>
  <div>
    <section-head title="Side Projects" lead="“I always want to surprise myself, more than anybody else.”"/>
    <div class="projects">
      <ProjectBlock class="leetcode" :logo="require('@/assets/leetcode.png')"
                    title="LeetCode Practice"
                    link="https://leetcode.com/blueworrybear/"
                    content="Mainly practice for learning Go language."/>
      <ProjectBlock class="gitea" :logo="require('@/assets/gitea.png')"
                    title="Gitea Contributor"
                    content="Contribute a key feature, Blob Excerpt for coding review."
                    link="https://github.com/go-gitea/gitea/pulls?q=is%3Apr+author%3Ablueworrybear+is%3Aclosed"/>
      <ProjectBlock class="web" :logo="require('@/assets/bear.png')"
                    title="Personal Website"
                    content="Like this website? Here is the source code!"
                    link="https://github.com/blueworrybear/benno-lin"/>
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
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .gitea {
    background-color:#34495e;
  }

  .leetcode {
    background: rgb(14, 13, 13);
  }

  .web {
    background: rgb(46, 117, 139);
  }
</style>
