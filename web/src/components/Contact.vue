<template>
  <div>
    <div>
      <h1 class="title">{{title}}</h1>
      <p>It's Nice to meet you!</p>
      <p>Let's keep in touch. You can find me with LinkedIn message.</p>
      <hr class="spacer"/>
    </div>
    <div class="media-container">
      <div v-for="(media, index) in medias" :key="index">
        <a :href="media[1]">
          <img class="media-icon" :src="require(`@/assets/${media[0]}`)">
        </a>
      </div>
    </div>
    <div class="credit">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: 'Contact Me',
      medias: [
        ['github.png', 'https://github.com/blueworrybear'],
        ['linkedin.png', 'https://www.linkedin.com/in/cilinh/'],
        ['gmail.png', 'mailto:blueworrybear@gmail.com']
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .title{
    color: white;
    font-size: @title-size-mobile;
    @media (min-width: 768px) {
      font-size: @title-size;
    }
    margin-top: 10px;
    margin-bottom: 40px;
  }

  p {
    color: white;
    font-style: italic;
    font-size: @subtitle-size-mobile;
    @media (min-width: 768px) {
      font-size: @subtitle-size;
    }
  }

  .spacer {
    opacity: 0.2;
    border: 0;
    border-top: 1px solid white;
    height: 0;
    margin: 40px 40px;
  }

  .credit {
    margin-top: 40px;
    font-size: 10px;
    color: white;
    a {
      color: white;
    }
  }

  .media-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
  }

  .media-icon {
    width: 80px;
    margin: 10px;
    @media (min-width: 768px) {
      width: 100px;
    }
  }
</style>
