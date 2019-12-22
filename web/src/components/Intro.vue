<template>
  <div class="intro">
    <div class="container">
      <section-head title="Profile"/>
      <div class="content">
        <img data-aos="fade-right" data-aos-delay="50" src="@/assets/benno.png">
        <div class="content-body">
          <div class="detail" v-for="(detail, key, index) in details" :key="key">
            <div class="item" data-aos="fade-left" :data-aos-delay="100 * (index+1)" data-aos-offset="200">
              <div class="key">{{key}}</div>
              <div class="value">{{detail}}</div>
            </div>
          </div>
          <div class="about" data-aos="fade-up">
            <h3>About me</h3>
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
      width: 300px;
      height: 300px;
      min-height: auto;
      max-height: 300px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
    }

    .container {
      margin-left: auto;
      margin-right: auto;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .detail {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      margin-bottom: 10px;
    }
    .key {
      background-color: rgb(17, 26, 46);
      width: 100px;
      margin-right: 5px;
    }
  }

  .about {
    h3 {
      text-align: left;
    }
  }

  .content-body {
    p {
      max-width: 100%;
      @media (min-width: 768px) {
        width: 30vw;
      }
    }
  }
</style>
