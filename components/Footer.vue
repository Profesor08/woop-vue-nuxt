<template lang="pug">
  .footer-wrapper
    .footer
      .footer-text Мы примнимаем
      .footer-operator
        img(src="~assets/images/operator-1.png")
      .footer-operator
        img(src="~assets/images/operator-2.png")
      .footer-operator
        img(src="~assets/images/operator-3.png")
      .footer-operator
        img(src="~assets/images/operator-4.png")
      .footer-operator
        img(src="~assets/images/operator-5.png")
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  name: "footer-component",

  mounted() {
    new TimelineMax().to(
      this.$el.querySelector(".footer"),
      this.getFrameTime(),
      {
        opacity: 1,
        ease: Power0.easeNone,
      },
      this.frameTimeToTime(3.2),
    );
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap-grid.scss";

.footer {
  font-family: "Cera Pro", Roboto, sans-serif;
  color: #596d76;
  font-size: 18px;
  line-height: 1.257;
  font-weight: 300;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0;

  @include media-breakpoint-down(md) {
    font-size: 18px * 0.7;
    position: static;
  }

  @include media-breakpoint-down(sm) {
    flex-wrap: wrap;
    height: auto;
    padding-bottom: 20px;
  }

  .footer-text {
    margin-right: 20px;
    line-height: 100%;

    @include media-breakpoint-down(sm) {
      flex: 1 0 100%;
      margin: 10px 0;
      text-align: center;
    }
  }

  .footer-operator {
    margin: 0 6px;

    @include media-breakpoint-down(sm) {
      margin: 5px 6px;
    }
  }
}

.footer-wrapper {
  height: 185px;
  position: relative;

  @include media-breakpoint-down(md) {
    height: auto;
  }
}
</style>