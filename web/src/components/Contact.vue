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
    <div>
      <p class="peiti">
        The adorable bear illustrations are created by PeiTi. Follow her IG if you like it!
        <a href="https://www.instagram.com/peitiyu/"><img :src="require(`@/assets/instagram.png`)"></a>
      </p>
    </div>
    <div class="credit">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div class="fb-like" data-href="https://bennolin.com" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>
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
    margin-top: 10px;
    margin-bottom: 20px;
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

  .fb-like {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }

  .peiti {
    display: flex;
    justify-content: center;
    font-style: normal;
    font-size: 14px;
    text-align: center;
    line-height: 32px;
    vertical-align: middle;
    margin-top: 20px;
    margin-bottom: 10px;

    img {
      margin-left: 5px;
      margin-right: 5px;
    }
  }
</style>
