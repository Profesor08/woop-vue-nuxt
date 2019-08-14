<template lang="pug">
  .account
    a.bordered(href="#", @click.prevent="showPromoCodeModal") Получить промокод
  
    modal(name="promo-code-modal")
      .modal-title Промокод
      .modal-text
        | Используй промокод и выиграй от 1$ до 5$. Ваш личный промокод <span class="promo-code">FREE15</span>.
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  name: "account",

  methods: {
    showPromoCodeModal() {
      this.$modal.show(`promo-code-modal`);
    },
  },

  mounted() {
    let mainDelay = 2.1;
    let frameTime = 30 / 1000;

    new TimelineMax().to(
      this.$el,
      3 * frameTime,
      {
        opacity: 1,
        ease: Power0.easeNone,
      },
      mainDelay + 4 * frameTime,
    );
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap-grid.scss";

.account {
  font-family: "Cera Pro", Roboto, sans-serif;
  opacity: 0;

  @include media-breakpoint-down(sm) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  a {
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 43px;
    border-radius: 20px;
    padding: 0 26px;
    transition: ease color 300ms, ease border-color 300ms;

    @include media-breakpoint-down(sm) {
      height: 20px;
      padding: 0;
    }

    &.bordered {
      @include media-breakpoint-up(md) {
        border: 2px solid rgb(102, 229, 85);
      }
    }

    &:hover {
      color: #66e555;

      &.bordered {
        @include media-breakpoint-up(md) {
          border: 2px solid white;
        }
      }
    }
  }
}
</style>