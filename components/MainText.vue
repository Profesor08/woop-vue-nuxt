<template>
  <div class="main-text">
    <h1 class="main-title">
      <span>Играй!</span>
      <span class="inverted">Выигрывай деньги!</span>
    </h1>
    <p class="main-description inverted">
      <span>Играйте в онлайн-игру,</span>
      <span>выигрывайте деньги!</span>
    </p>
    <p class="main-description">
      <span>Сражайтесь и общайтесь</span>
      <span>с другими игроками сервиса!</span>
    </p>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  name: "main-text",

  mounted() {
    let frameTime = this.getFrameTime();
    let mainDelay = this.frameTimeToTime(2.21);

    let titleText = this.$el.querySelector(`.main-title`);
    let descriptionText = this.$el.querySelectorAll(`.main-description`);

    new TimelineMax()
      .to(
        titleText,
        0,
        {
          opacity: 1,
        },
        mainDelay + frameTime,
      )

      .fromTo(
        titleText,
        2 * frameTime,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          repeat: 2,
          repeatDelay: frameTime,
          ease: Power0.easeNone,
        },
      );

    new TimelineMax().to(
      descriptionText,
      0,
      {
        opacity: 1,
        ease: Power0.easeNone,
      },
      this.frameTimeToTime(2.25),
    );
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap-grid.scss";

.main-text {
  padding-left: 20px;

  @include media-breakpoint-down(sm) {
    margin-bottom: 30px;
  }

  .main-title {
    font-family: "Cera Pro", Roboto, sans-serif;
    font-size: 74px;
    font-weight: bold;
    line-height: 0.946;
    color: #ffffff;
    margin: -13px 0 34px 0;
    text-transform: uppercase;
    opacity: 0;

    span {
      display: block;
    }

    @include media-breakpoint-down(lg) {
      font-size: 74px * 0.7;
      margin: -13px 0 30px 0;
    }

    @include media-breakpoint-down(sm) {
      font-size: 74px * 0.5;
      margin: -13px 0 20px 0;
    }
  }

  .main-description {
    color: #ffffff;
    font-family: "Cera Pro", Roboto, sans-serif;
    line-height: 1.214;
    font-weight: 300;
    font-size: 28px;
    opacity: 0;

    @include media-breakpoint-down(lg) {
      font-size: 28px * 0.7;
    }

    @include media-breakpoint-down(sm) {
      text-align: right;
      font-size: 28px * 0.5;
    }

    &:last-child {
      margin-bottom: -5px;
    }

    span {
      display: block;
    }
  }

  .inverted {
    color: #66e555;
  }
}
</style>