<template>
  <div>
    <section-head
      title="Side Projects"
      lead="“I always want to surprise myself, more than anybody else.”"
    />
    <div class="projects">
      <ProjectBlock
        class="leetcode"
        :logo="require('@/assets/leetcode.png')"
        title="LeetCode Practice"
        link="https://leetcode.com/blueworrybear/"
        content="Mainly practice for learning Go language."
      />
      <ProjectBlock
        class="gitea"
        :logo="require('@/assets/gitea.png')"
        title="Gitea Contributor"
        content="Contribute a key feature, Blob Excerpt for coding review."
        link="https://github.com/go-gitea/gitea/pulls?q=is%3Apr+author%3Ablueworrybear+is%3Aclosed"
      />
      <ProjectBlock
        class="web"
        :logo="require('@/assets/bear.png')"
        title="Personal Website"
        content="Like this website? Here is the source code!"
        link="https://github.com/blueworrybear/benno-lin"
      />
      <ProjectBlock
        class="covergates"
        :logo="require('@/assets/covergates.png')"
        title="Covergates"
        content="The portal gates to coverage reports. codecov and coveralls alternative."
        link="https://github.com/covergates/covergates"
      />
      <ProjectBlock
        class="nex"
        :logo="require('@/assets/nex.png')"
        title="NEX Foundation"
        link="https://www.nexf.org/"
        content="NEX connects global talents. I join them as the backend engineer."
      />
      <ProjectBlock
        class="dev"
        :logo="require('@/assets/dev.png')"
        title="Put Vue.js and Go together!"
        link="https://dev.to/blueworrybear/put-vue-js-and-go-together-setup-web-app-in-5-mins-5h90"
        content="Check my post about Vue and Go Web App in DEV!"
      />
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
  background-color: #34495e;
}

.leetcode,
.nex,
.dev {
  background: rgb(14, 13, 13);
}

.web {
  background: rgb(46, 117, 139);
}

.covergates {
  background: #006064;
}
</style>
