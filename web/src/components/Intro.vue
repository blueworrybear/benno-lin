<template>
  <div class="intro">
    <div class="container">
      <section-head title="Profile" lead="“Difficulties mastered are opportunities won.”"/>
      <div class="content">
        <img data-aos="fade-right" data-aos-delay="50" src="@/assets/benno.png">
        <div class="content-body">
          <div class="detail" v-for="(detail, key, index) in details" :key="key">
            <div class="item" data-aos="fade-left" :data-aos-delay="100 * (index+1)" data-aos-offset="100">
              <strong class="key">{{key}}</strong>
              <div class="value">{{detail}}</div>
            </div>
          </div>
          <div class="about" data-aos="fade-up">
            <h2>About me</h2>
            <p>Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears, shaggy hair, plantigrade paws with five nonretractile claws, and short tails.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      details: {
        Name: 'Benno Lin',
        Age: 29,
        Location: 'Hsinchu, Taiwan'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .intro {
    img {
      width: @profile-image-size;
      height: @profile-image-size;
      min-height: auto;
      max-height: @profile-image-size;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
      @media (min-width: 1080px) {
        margin-left: auto;
        margin-right: 80px;
      }
    }

    .container {
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      @media (min-width: 1080px) {
        margin-right: 100px;
      }
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    .item {
      display: flex;
      margin-bottom: 10px;
    }
    .key {
      background-color: rgb(17, 26, 46);
      width: 100px;
      margin-right: 10px;
      vertical-align: middle;
      line-height: 20px;
      background-color: @tag-color;
      color: @tag-font-color;
    }
  }

  .about {
    h2, h3 {
      text-align: left;
      color: @subtitle-color;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  .content-body {
    p {
      max-width: 100%;
      text-align: left;
      @media (min-width: 1080px) {
        width: 30vw;
      }
    }
  }
</style>
