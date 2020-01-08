<template>
  <div>
    <div class="container">
      <section-head title="Certifications" lead="“Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.”"/>
      <div class="award" v-for="(item, index) in items" :key="index">
        <img data-aos="fade-up" :src="item.image"/>
        <div class="content" data-aos="slide-left">
          <h2>{{item.title}}</h2>
          <strong>{{item.sub}}</strong>
          <p v-html="item.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

class Award {
  constructor (image, title, sub, content) {
    this.image = image
    this.title = title
    this.sub = sub
    this.content = content
  }
}

export default {
  name: 'Award',
  data () {
    return {
      items: [
        new Award(require('@/assets/machine-learning.jpg'), 'Design Pattern Learning',
          'Machine Learning Competition, awarded 2017 June',
          `Design Pattern in Process Design Kit(PDK) development is crucial. Millions of patterns are
          required to qualify the PDK correctness. In tradition, we rely on manual craft patterns, which
          is a time consuming and tedious work. I design a Machine Learning Procedure to extract
          Design Patterns from tsmc in-house layouts. With this procedure, it is possible to discover more
          patterns for quality assure.`),
        new Award(require('@/assets/udacity.png'), 'Machine Learning Engineer Nanodegree', 'Earned 2018 March',
          `In order to encourage more Machine Learning applications, the company held a training course in 2018.
          I had been selected to join the training out of thousands of competitors.
          I successfully pass the final exam and earned the certifications in 3 month.`),
        new Award(require('@/assets/pia.jpg'), 'DevOps in Design Technology Platform',
          'Procedure Innovation, awarded 2019 Nov',
          `Development procedure becomes more and more complex in the advanced
          technology nodes. To improve the efficiency and reduce develop cycle time,
          I introduce DevOps to my department. Due to the limitation of legacy
          operating system and security policy from IT department, we are unable
          to use most of the popular CI/CD tools. Therefore, I revised open source
          CI/CD tool Drone, to replace the Docker with IBM LSF, which is available
          in our working environment. You can refer the source code in my
          <a href="https://gist.github.com/blueworrybear/e3f8f247eeffdc7cac95a567c064ed39">Gist</a>
          It turns out that the department accept DevOps and I am awarded the prize.`)
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .award {
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    word-break: break-all;
    img {
      display: block;
      border-radius: 20px;
      width: 90%;
      max-height:  220px;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
      @media (min-width: 768px) {
        width: 250px;
        height: 220px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      text-align: left;
      word-break: break-word;
      width: 85%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
      @media (min-width: 900px) {
        text-align: left;
        margin-left: 30px;
        width: 55%;
      }
      p{
        width: 90%;
        word-break: break-word;
        padding: 5px;
      }

      h2, h3 {
        color: @subtitle-color;
        text-align: center;
        @media (min-width: 900px) {
          text-align: left;
        }
      }

      strong {
        font-style: italic;
        color: @subheading-color;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        @media (min-width: 900px) {
          text-align: left;
        }
      }
    }
  }
</style>
