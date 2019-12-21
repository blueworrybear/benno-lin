<template>
  <div>
    <div class="container">
      <h1>Experiences</h1>
      <div class="award" v-for="(item, index) in items" :key="index">
        <img data-aos="fade-up" :src="item.image"/>
        <div class="content" data-aos="slide-left">
          <h3>{{item.title}}</h3>
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
        new Award(require('@/assets/udacity.png'), 'Machine Learning Engineer Nanodegree', '2018 March', 'Machine learning (ML) is the scientific study of algorithms and statistical models that computer systems use to perform a specific task without using explicit instructions, relying on patterns and inference instead.'),
        new Award(require('@/assets/pia.jpg'), 'DevOps in Design Technology Platform', '2019 Nov', 'PIA')
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
    margin-bottom: 20px;
    width: 80vw;
    img {
      border-radius: 10px;
      width: 300px;
    }
    .content {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 45px;
      width: 80vw;
      @media (min-width: 768px) {
        width: calc(80vw - 350px);
      }
    }
  }
</style>
