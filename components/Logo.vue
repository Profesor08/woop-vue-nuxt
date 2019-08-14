<template lang="pug">
  .logo
    <!--.logo-text Woop-->
    <!--.text-badge cash-->
    img(class="logo-image", src="~assets/images/logo-woop-full.svg")

</template>

<script>
import { TimelineMax } from "gsap";

export default {
  name: "logo-component",

  mounted() {
    let mainDelay = 2.1;
    let frameTime = 30 / 1000;

    let logo = this.$el;
    let text = logo.querySelectorAll(`.logo-text, .text-badge`);

    new TimelineMax()
      .to(
        logo,
        0.01,
        {
          opacity: 1,
        },
        mainDelay,
      )
      .fromTo(
        text,
        frameTime,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: SteppedEase.config(1),
          repeat: 3,
          repeatDelay: frameTime,
        },
        mainDelay + frameTime * 3,
      );
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap-grid.scss";

.logo {
  background: url(~assets/images/logo@1x.png) no-repeat bottom left;
  background-size: 155px 155px;
  height: 155px;
  /*padding: 0 0 0 121px;*/
  display: inline-flex;
  align-items: center;
  /*opacity: 0;*/

  @include media-breakpoint-between(md, lg) {
    transform-origin: 0 50%;
    transform: scale(0.7);
  }

  @include media-breakpoint-down(sm) {
    background-size: 80px 80px;
    height: 80px;
    /*padding: 0 0 0 70px;*/
    margin-left: -20px;
  }

  .logo-image {
    height: 100px;
    margin-bottom: -15px;
    margin-left: 25px;

    @include media-breakpoint-down(sm) {
      height: 50px;
      margin-bottom: -8px;
      margin-left: 15px;
    }
  }

  .logo-text {
    font-family: "ProximaNova-Black", "Roboto", sans-serif;
    font-size: 35.46px;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: bold;
    opacity: 0;

    @include media-breakpoint-down(sm) {
      font-size: 16px;
    }
  }

  .text-badge {
    margin-left: 3px;
    padding: 0 4px 1px 4px;
    height: 24px;
    border-radius: 6px;
    background: white;
    font-family: "Cera Pro", "Roboto", sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #1c1f23;
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    opacity: 0;

    @include media-breakpoint-down(sm) {
      font-size: 10px;
      height: 14px;
      border-radius: 3px;
      padding: 0 4px 1px 4px;
      line-height: 100%;
    }
  }
}
</style>
