<template>
  <span>{{ formattedNumber }}</span>
</template>

<script>
  import {TimelineMax} from "gsap";
  
  export default {
    name: "animated-number",
    
    data() {
      return {
        value: 0,
      }
    },
    
    props: {
      animationValue: Number,
      animationTime: Number,
      animationDelay: Number,
    },
    
    computed: {
      formattedNumber() {
        return Math.floor(this.value).toLocaleString();
      }
    },
    
    mounted() {
      new TimelineMax()
        .to(this, this.animationTime, {
          value: this.animationValue,
        }, this.animationDelay);
    },
  }
</script>

<style scoped>

</style>