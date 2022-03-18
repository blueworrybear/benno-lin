<template>
  <div class="intro">
    <div class="container">
      <section-head
        title="Profile"
        lead="“Difficulties mastered are opportunities won.”"
      />
      <div class="content">
        <div class="content-container detail-container">
          <div
            class="detail"
            v-for="(detail, key, index) in details"
            :key="key"
          >
            <div
              class="item"
              data-aos="fade-right"
              :data-aos-delay="100 * (index + 1)"
              data-aos-offset="100"
            >
              <strong class="key">{{ key }}</strong>
              <div class="value">{{ detail }}</div>
            </div>
          </div>
          <div
            class="fb-like"
            data-href="https://bennolin.com"
            data-width=""
            data-layout="button_count"
            data-action="like"
            data-size="small"
            data-share="true"
          ></div>
        </div>
        <div class="img-container">
          <img src="@/assets/benno.png" />
        </div>
        <div class="content-container about-container">
          <div class="about">
            <h2 data-aos="fade-left" data-aos-delay="100" data-aos-offset="120">
              About me
            </h2>
            <p data-aos="fade-left" data-aos-delay="200" data-aos-offset="120">
              Hi, I am Benno Lin. I currently work in Google Taiwan as a Test Engineer.
              As a test engineer, I develop creative ways to test software continuously and automatically.
              I'm the expert for positively impacting the quality of the product through testing.
              <br />
              I am looking forward to get in touch with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {}
  },
  computed: {
    details() {
      return {
        Name: 'Benno Lin',
        Age: `${this.age} years`,
        Location: 'Hsinchu, Taiwan',
        Education: 'Master degree'
      }
    },
    age() {
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1080px) {
    // margin-right: 100px;
    // max-width: 30vw;
  }
}

.detail-container {
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
    h2,
    h3 {
      text-align: left;
      color: @subtitle-color;
      margin-bottom: 20px;
      font-size: 28px;
    }
  }
}

.fb-like {
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
}
</style>
