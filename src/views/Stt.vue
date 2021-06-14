<template>
  <div class="lb-wrap">
    <div class="img">
      <div class="content">
        <h1>구두계약</h1>
        <h2><com/></h2>
      </div>
      <div class="img-cover"></div>
    </div>
    <Footer/>
  </div>
</template>

<style >
.img {
  position: relative;
  background-image: url(https://i.esdrop.com/d/8CkX6dH3TM.png);
  height: 100vh;
  background-size: cover;
}

.img-cover {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.img .content {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: white;
  z-index: 2;
  text-align: center;
}
.h1 {
  font-size: 1.5vw;
}
</style>

<script>

import Footer from "../components/layout/Footer.vue";
import com from "../components/recorder.vue";

export default {
  name: 'speech_to_text',
  data() {
    return {
      runtimeTranscription_: "",
      transcription_: [],
      lang_: "ko"
    };
  },

  components: {
    Footer,
    com
  },

  methods: {
  }
}
</script>