<template>
  <div class="intro">
    <div class="container">
      <section-head title="Profile" lead="“Difficulties mastered are opportunities won.”"/>
      <div class="content">
        <div class="content-container detail-container">
          <div class="detail" v-for="(detail, key, index) in details" :key="key">
            <div class="item" data-aos="fade-right" :data-aos-delay="100 * (index+1)" data-aos-offset="100">
              <strong class="key">{{key}}</strong>
              <div class="value">{{detail}}</div>
            </div>
          </div>
        </div>
        <div class="img-container">
          <img src="@/assets/benno.png">
        </div>
        <div class="content-container about-container">
          <div class="about">
            <h2 data-aos="fade-left" data-aos-delay="100" data-aos-offset="120">About me</h2>
            <p data-aos="fade-left" data-aos-delay="200" data-aos-offset="120">Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears, shaggy hair, plantigrade paws with five nonretractile claws, and short tails.</p>
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
    }
  },
  computed: {
    details () {
      return {
        Name: 'Benno Lin',
        Age: `${this.age} years`,
        Location: 'Hsinchu, Taiwan',
        Education: 'Master degree'
      }
    },
    age () {
      let d = new Date()
      let y = d.getFullYear()
      return y - 1991
    }
  }
}
</script>

<style lang="less" scoped>

  .container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    flex-direction: row;;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 1080px) {
      // margin-right: 100px;
      // max-width: 30vw;
    }
  }

  .detail-container{
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    vertical-align: middle;
    margin-top: 20px;
    // justify-content: center;
    align-items: center;
    @media (min-width: 768) {
      width: 33%;
    }
    .detail {
      display: flex;
      flex-direction: row;
      width: 80%;
      // margin-left: auto;
      // margin-right: auto;
      @media (min-width: 768px) {
        // margin-left: auto;
        // margin-right: 0px;
        width: 250px;
      }
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
  }

  .img-container {
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1080px) {
      margin-left: 20px;
      margin-right: 20px;
    }
    img {
      margin-top: auto;
      margin-bottom: auto;
      width: @profile-image-size;
      height: @profile-image-size;
      max-height: @profile-image-size;
      vertical-align: middle;
      margin-left: auto;
      margin-right: auto;
      @media (min-width: 1080px) {
        margin-left: 20px;
        margin-right: 20px;
      }
    }
  }

  .content-container {
    width: 100%;
    @media (min-width: 1080px) {
      width: 30%;
    }
  }

  .about-container {
    width: 100% !important;
    @media (min-width: 1200px) {
      width: 30% !important;
    }
    .about {
      text-align: left;
      h2, h3 {
        text-align: left;
        color: @subtitle-color;
        margin-bottom: 20px;
        font-size: 28px;
      }
    }
  }

</style>
