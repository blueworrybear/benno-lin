<template>
  <div>
    <div class="container">
      <section-head title="Certifications"/>
      <div class="award" v-for="(item, index) in items" :key="index">
        <img data-aos="fade-up" :src="item.image"/>
        <div class="content" data-aos="slide-left">
          <h2>{{item.title}}</h2>
          <strong>{{item.sub}}</strong>
          <p>{{item.content}}</p>
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
        new Award(require('@/assets/machine-learning.jpg'), 'Design Pattern Learning', 'Machine Learning Competition, awarded 2017 June', 'PIA'),
        new Award(require('@/assets/udacity.png'), 'Machine Learning Engineer Nanodegree', 'Earned 2018 March',
          `Machine learning (ML) is the scientific study of algorithms and
          statistical models that computer systems use to perform a specific
          task without using explicit instructions, relying on patterns and inference instead.`),
        new Award(require('@/assets/pia.jpg'), 'DevOps in Design Technology Platform', 'Procedure Innovation, awarded 2019 Nov', 'PIA')
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
      min-height: auto;
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
      // margin-top: 20px;
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
