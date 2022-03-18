<template>
  <div>
    <div class="container">
      <section-head
        title="Experiences"
        lead="“Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.”"
      />
      <div class="award" v-for="(item, index) in items" :key="index">
        <img data-aos="fade-up" :src="item.image" :class="item.classes"/>
        <div class="content" data-aos="slide-left">
          <h2>{{ item.title }}</h2>
          <strong>{{ item.sub }}</strong>
          <p v-html="item.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Award {
  constructor(image, title, sub, content, classes) {
    this.image = image
    this.title = title
    this.sub = sub
    this.content = content
    this.classes = classes
  }
}

export default {
  name: 'Award',
  data() {
    return {
      items: [
        new Award(
          require('@/assets/google.png'),
          'Google / Android',
          'Test Engineer / Apr 2021 - Present',
          `
          - Automate integration and end-to-end testing on System UI, Pixel Launcher and Setup Wizard.<br>
          - Develop test frameworks and infrastructure for Android Open Source Project.<br>
          `,
          'small',
        ),
        new Award(
          require('@/assets/tsmc.png'),
          'tsmc / Process Development Kit Department',
          'Engineer / Oct 2015 - Apr 2021',
          `
          - Reduce quality check scripts runtime, which are written in Perl, by 70% by code refactoring.<br>
          - Automate unit tests and deliveries of outsourcing projects with an internal web service which is built with PHP.<br>
          - Increase branch test coverage by 100 times for design kits in shorter runtime by distributed computing using Python and ZeroMQ.<br>
          - Improve engineer effectivity. Reducing report review and quality checks operation time by 50% by providing better tools with user interface, which are built with Electron framework and Python.<br>
          - Construct DevOps flow for the department with self-hosted Gitea and Drone. Successfully host Drone on the environment without Docker by replacing Docker engine with IBM LSF using Go language.<br>
          - Design metrics to measure test pattern quality by analyzing specification document and parsing source code with Lex and YACC in C++<br>
          `,
          'small'
        ),
        new Award(
          require('@/assets/udacity.png'),
          'Machine Learning Engineer Nanodegree',
          'Earned 2018 March',
          `In order to encourage more Machine Learning applications, the company held a training course in 2018.
          I had been selected to join the training out of thousands of competitors.
          I successfully pass the final exam and earned the certifications in 3 month.`
        ),
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
    max-height: 220px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      width: 250px;
      height: 220px;
    }
  }
  img.small {
    object-fit: scale-down;
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
    p {
      width: 90%;
      word-break: break-word;
      padding: 5px;
    }

    h2,
    h3 {
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
