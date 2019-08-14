import Vue from "vue";
import VueYoutube from "vue-youtube"
import VModal from "vue-js-modal/dist/ssr.index"

Vue.use(VModal, {
  dialog: true,
  dynamic: true,
});

Vue.use(VueYoutube);

Vue.mixin({
  methods: {

    // be careful, this method works for small period of time
    frameTimeToTime(frameTime) {
      let seconds = Math.floor(frameTime);
      let frames = parseFloat((frameTime - seconds).toFixed(2));

      return frames * 100 * this.getFrameTime() + seconds;
    },

    getFrameTime() {
      return 30 / 1000;
    },

  }
});