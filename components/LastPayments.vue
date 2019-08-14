<template lang="pug">
  .row.last-payments.justify-content-center
    .col-12.col-xl-2
      .title Последние выплаты
    .col-4.col-sm-3.col-md-2.col-lg-auto.col-xl-2
      .user-info
        .user-image
          img(src="~assets/images/user-1.png")
        .user-name Usernick
        .user-amount-title получил
        .user-amount 2561 руб
        .user-operator
          img(src="~assets/images/user-operator-1.png")
    .col-4.col-sm-3.col-md-2.col-lg-auto.col-xl-2
      .user-info
        .user-image
          img(src="~assets/images/user-2.png")
        .user-name Usernick
        .user-amount-title получил
        .user-amount 804 руб
        .user-operator
          img(src="~assets/images/user-operator-2.png")
    .col-4.col-sm-3.col-md-2.col-lg-auto.col-xl-2
      .user-info
        .user-image
          img(src="~assets/images/user-3.png")
        .user-name Usernick
        .user-amount-title получил
        .user-amount 169 руб
        .user-operator
          img(src="~assets/images/user-operator-3.png")
    .col-4.col-sm-3.col-md-2.col-lg-auto.col-xl-2
      .user-info
        .user-image
          img(src="~assets/images/user-4.png")
        .user-name Usernick
        .user-amount-title получил
        .user-amount 199 руб
        .user-operator
          img(src="~assets/images/user-operator-4.png")
    .col-4.col-sm-3.col-md-2.col-lg-auto.col-xl-2
      .user-info
        .user-image
          img(src="~assets/images/user-5.png")
        .user-name Usernick
        .user-amount-title получил
        .user-amount 3722 руб
        .user-operator
          img(src="~assets/images/user-operator-5.png")

</template>

<script>
import { TimelineMax } from "gsap";

export default {
  name: "last-payments",

  mounted() {
    let frameTime = this.getFrameTime();
    let mainDelay = this.frameTimeToTime(3.05);

    let titleBlock = this.$el.querySelector(`.title`);
    let userInfo = this.$el.querySelectorAll(`.user-info`);
    let userImage = this.$el.querySelectorAll(`.user-image`);

    new TimelineMax().to(
      titleBlock,
      0,
      {
        opacity: 1,
        ease: Power0.easeNone,
      },
      mainDelay,
    );

    new TimelineMax().to(
      userInfo,
      4 * frameTime,
      {
        y: 0,
        ease: Power0.easeNone,
      },
      mainDelay,
    );

    new TimelineMax().to(
      userInfo,
      11 * frameTime,
      {
        opacity: 1,
        ease: Power0.easeNone,
      },
      mainDelay,
    );

    new TimelineMax().staggerTo(
      userImage,
      frameTime,
      {
        opacity: 1,
        ease: Power0.easeNone,
      },
      frameTime,
      `+=` + this.frameTimeToTime(3.1),
    );

    new TimelineMax().staggerTo(
      userImage,
      frameTime,
      {
        opacity: 1,
        ease: Power0.easeNone,
      },
      frameTime,
      `+=` + this.frameTimeToTime(3.1),
    );

    new TimelineMax().staggerTo(
      userImage,
      3 * frameTime,
      {
        scale: 1.2,
        ease: Power0.easeNone,
      },
      frameTime,
      `+=` + this.frameTimeToTime(3.1),
    );

    new TimelineMax().staggerTo(
      userImage,
      frameTime,
      {
        scale: 1,
        ease: Power0.easeNone,
      },
      frameTime,
      `+=` + this.frameTimeToTime(3.14),
    );
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap-grid.scss";

.last-payments {
  .title {
    font-size: 24px;
    font-family: "Cera Pro", Roboto, sans-serif;
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 1.083;
    text-align: right;
    opacity: 0;

    @include media-breakpoint-down(lg) {
      text-align: center;
      margin-bottom: 30px;
    }
  }

  .user-info {
    width: 160px;
    height: 306px;
    margin: 0 auto;
    background: url(~assets/images/user-bg@2x.png) no-repeat;
    background-size: contain;
    padding-top: 31px;
    opacity: 0;
    transform: translateY(-40px);

    @include media-breakpoint-down(md) {
      margin-bottom: 30px;
      width: 160px * 0.5;
      height: 306px * 0.5;
      padding-top: 31px * 0.5;
    }

    @include media-breakpoint-down(sm) {
    }

    .user-image {
      width: 96px;
      height: 96px;
      margin: 0 auto 20px auto;
      background: no-repeat;
      background-size: cover;
      position: relative;
      opacity: 0;

      @include media-breakpoint-down(md) {
        width: 96px * 0.5;
        height: 96px * 0.5;
        margin: 0 auto 20px * 0.5 auto;
      }

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 218px;
        height: 218px;
        background: url(~assets/images/user-image-bg@2x.png) no-repeat;
        background-size: contain;

        @include media-breakpoint-down(md) {
          width: 218px * 0.5;
          height: 218px * 0.5;
        }
      }

      img {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .user-name,
    .user-amount-title,
    .user-amount {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: rgb(128, 171, 142);
      line-height: 20px;
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: 16px * 0.5;
        line-height: 20px * 0.5;
      }
    }

    .user-amount-title {
    }

    .user-amount {
      color: #66e555;
    }

    .user-operator {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 26px auto 0 auto;

      img {
        @include media-breakpoint-down(md) {
          transform: scale(0.5);
        }
      }

      @include media-breakpoint-down(md) {
        margin-top: 5px;
      }
    }
  }
}
</style>