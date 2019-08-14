<template lang="pug">
  .statistics
    .title {{ title }}
    .value
      AnimatedNumber(v-bind:animationValue="value", v-bind:animationTime="2", v-bind:animationDelay="delay")
</template>

<script>
import AnimatedNumber from "../components/AnimatedNumber";

export default {
  name: "statistics",

  props: {
    title: String,
    value: Number,
  },

  data() {
    return {
      delay: this.frameTimeToTime(3.01),
    };
  },

  components: {
    AnimatedNumber,
  },

  mounted() {
    new TimelineMax().to(
      this.$el,
      5 * this.getFrameTime(),
      {
        opacity: 1,
        ease: Power0.easeNone,
      },
      this.frameTimeToTime(3.01),
    );
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap-grid.scss";

.statistics {
  font-family: "Cera Pro", Roboto, sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  position: relative;
  opacity: 0;

  @include media-breakpoint-down(md) {
    height: 96px * 0.5;
  }

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% + 32px);
    left: -16px;
    height: 43px;
    background: url(~assets/images/line@2x.png) no-repeat center top;
    background-size: contain;
  }

  &:before {
    top: -5px;
  }

  &:after {
    bottom: -5px;
    transform: rotate(180deg);
  }

  .title {
    font-size: 28px;
    color: rgb(102, 229, 85);
    margin-right: 10px;

    @include media-breakpoint-down(md) {
      font-size: 10px;
      margin: 0 0 5px 0;
      text-align: center;
    }
  }

  .value {
    font-size: 30px;
    color: white;

    @include media-breakpoint-down(md) {
      font-size: 30px * 0.4;
      text-align: center;
    }
  }
}
</style>