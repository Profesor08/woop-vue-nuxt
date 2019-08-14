<template>
  <div class="main-video" v-bind:class="{ 'is-active': isActive }">
    <div class="play-button" @click="playVideo">
      <svg
        class="center-shape"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 62.97 78.02"
        wdith="62.97"
        height="78.02"
      >
        <path
          d="M56.55,46.7,14.27,74.31C9,77.73,2.5,73.46,2.5,66.62V11.39C2.5,4.56,9,.29,14.27,3.7L56.55,31.32C61.78,34.74,61.78,43.28,56.55,46.7Z"
          stroke="#78f068"
          stroke-width="5px"
          fill="none"
        />
      </svg>
      <div class="circle-container"></div>
    </div>
    <youtube
      class="youtube-video"
      ref="youtubeVideo"
      video-id="ixDspXUR1Cs"
      :player-vars="playerVars"
    ></youtube>
  </div>
</template>

<script>
import lottie from "lottie-web";
import { TimelineMax } from "gsap";

export default {
  name: "main-video",

  data() {
    return {
      isActive: false,
      playerVars: {
        wmode: `transparent`,
      },
    };
  },

  computed: {
    video() {
      return this.$refs.youtubeVideo;
    },

    player() {
      return this.video.player;
    },
  },

  methods: {
    playVideo() {
      this.player.playVideo();
      this.isActive = true;
    },
  },

  mounted() {
    const animationContainer = this.$el.querySelector(`.circle-container`);
    const animationData = {
      v: "5.4.3",
      fr: 29.9700012207031,
      ip: 0,
      op: 900.000036657751,
      w: 156,
      h: 156,
      nm: "woop",
      ddd: 0,
      assets: [],
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Shape Layer 1",
          sr: 1,
          ks: {
            o: {
              a: 1,
              k: [
                {
                  i: { x: [0.833], y: [0.833] },
                  o: { x: [0.167], y: [0.167] },
                  n: ["0p833_0p833_0p167_0p167"],
                  t: 53,
                  s: [0],
                  e: [100],
                },
                {
                  i: { x: [0.833], y: [0.833] },
                  o: { x: [0.167], y: [0.167] },
                  n: ["0p833_0p833_0p167_0p167"],
                  t: 54,
                  s: [100],
                  e: [0],
                },
                {
                  i: { x: [0.833], y: [0.833] },
                  o: { x: [0.167], y: [0.167] },
                  n: ["0p833_0p833_0p167_0p167"],
                  t: 55,
                  s: [0],
                  e: [100],
                },
                {
                  i: { x: [0.833], y: [0.833] },
                  o: { x: [0.167], y: [0.167] },
                  n: ["0p833_0p833_0p167_0p167"],
                  t: 56,
                  s: [100],
                  e: [0],
                },
                {
                  i: { x: [0.833], y: [0.833] },
                  o: { x: [0.167], y: [0.167] },
                  n: ["0p833_0p833_0p167_0p167"],
                  t: 57,
                  s: [0],
                  e: [100],
                },
                { t: 58.0000023623884 },
              ],
              ix: 11,
            },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [362, 496, 0], ix: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1 },
            s: { a: 0, k: [100, 100, 100], ix: 6 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [156, 156], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "tm",
                  s: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 59,
                        s: [0],
                        e: [45],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 117,
                        s: [45],
                        e: [30],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 266,
                        s: [30],
                        e: [45],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 416,
                        s: [45],
                        e: [30],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 565,
                        s: [30],
                        e: [45],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 717,
                        s: [45],
                        e: [30],
                      },
                      { t: 899.000036617021 },
                    ],
                    ix: 1,
                  },
                  e: { a: 0, k: 100, ix: 2 },
                  o: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 59,
                        s: [720],
                        e: [1440],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 117,
                        s: [1440],
                        e: [2880],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 266,
                        s: [2880],
                        e: [4320],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 416,
                        s: [4320],
                        e: [5760],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 567,
                        s: [5760],
                        e: [7200],
                      },
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        n: ["0p667_1_0p333_0"],
                        t: 717,
                        s: [7200],
                        e: [8280],
                      },
                      { t: 900.000036657751 },
                    ],
                    ix: 3,
                  },
                  m: 1,
                  ix: 2,
                  nm: "Trim Paths 1",
                  mn: "ADBE Vector Filter - Trim",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.596078431373, 0.894117706897, 0.380392186782, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 5, ix: 5 },
                  lc: 2,
                  lj: 1,
                  ml: 4,
                  ml2: { a: 0, k: 4, ix: 8 },
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [-284, -418], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [96.775, 96.775], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Преобразовать",
                },
              ],
              nm: "Ellipse 1",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: -45.0000018328876,
          op: 855.000034824864,
          st: -45.0000018328876,
          bm: 0,
        },
      ],
      markers: [],
    };
    const params = {
      container: animationContainer,
      renderer: `svg`,
      loop: false,
      autoplay: false,
      autoloadSegments: false,
      animationData: animationData,
    };

    const anim = lottie.loadAnimation(params);

    let frameTime = this.getFrameTime();
    let mainDelay = this.frameTimeToTime(2.21);

    new TimelineMax()
      .to(
        this.$el,
        0,
        {
          opacity: 1,
        },
        mainDelay,
      )
      .to(this.$el.querySelector(`.play-button`), 2 * frameTime, {
        opacity: 1,
        ease: Power0.easeNone,
        onComplete: function() {
          anim.playSegments([53, 266], true);

          anim.addEventListener("complete", function() {
            anim.playSegments([267, 565], true);
          });
        },
      });
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/bootstrap-grid.scss";

.main-video {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 356px;
  opacity: 0;

  @include media-breakpoint-down(lg) {
    height: 356px * 0.7;
  }

  @include media-breakpoint-down(sm) {
    height: 356px * 0.5;
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% + 22px);
    left: -11px;
    height: 33px;
    background: url(~assets/images/glowed-line@2x.png) no-repeat center top;
    background-size: contain;
  }

  &:before {
    top: -14px;
  }

  &:after {
    bottom: -14px;
    transform: rotate(180deg);
  }

  .play-button {
    position: relative;
    width: 169px;
    height: 169px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 50%;
    transition: background-color ease 500ms;
    opacity: 0;

    @include media-breakpoint-down(lg) {
      width: 169px * 0.7;
      height: 169px * 0.7;
    }

    @include media-breakpoint-down(sm) {
      width: 169px * 0.5;
      height: 169px * 0.5;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(#3bc977, 0.15);

      .center-shape {
        path {
          stroke: white;
        }
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: -78.5px;
      left: -78.5px;
      transform: scale(0.99);
      width: 325px;
      height: 325px;
      background: url(~assets/images/play-button-back@2x.png) no-repeat;
      background-size: contain;
      pointer-events: none;

      @include media-breakpoint-down(lg) {
        width: 325px * 0.7;
        height: 325px * 0.7;
        top: -78.5px * 0.7;
        left: -78.5px * 0.7;
      }

      @include media-breakpoint-down(sm) {
        width: 325px * 0.5;
        height: 325px * 0.5;
        top: -78.5px * 0.5;
        left: -78.5px * 0.5;
      }
    }

    .center-shape {
      margin-left: 65px;
      width: 58px;
      height: 73px;

      @include media-breakpoint-down(lg) {
        margin-left: 65px * 0.7;
        width: 58px * 0.7;
        height: 73px * 0.7;
      }

      @include media-breakpoint-down(sm) {
        margin-left: 65px * 0.5;
        width: 58px * 0.5;
        height: 73px * 0.5;
      }

      path {
        transition: stroke ease 500ms;
      }
    }

    .circle-container {
      position: absolute;
      top: 9px;
      left: 9px;
      right: 9px;
      bottom: 9px;
    }
  }
}
</style>