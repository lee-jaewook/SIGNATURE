<template>

  <div id="app" v-bind:style="{ backgroundColor:'#ffffff' }">
        <Header />
          <div id="content" class="content">
            <router-view></router-view>
          </div>

  </div>

</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
        @import url(https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap);
        @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
        @import url(http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);
        @import url(http://fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
        @import url(http://fonts.googleapis.com/earlyaccess/nanumbrushscript.css);
        @import url(http://fonts.googleapis.com/earlyaccess/nanumpenscript.css);
        @import url(http://cdn.jsdelivr.net/font-nanum/1.0/nanumbarungothic/nanumbarungothic.css);

        @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap'); /*font-family: 'Black Han Sans', sans-serif; */
  #app {
      text-align: center;
      font-size: 70%;
      font-family: 'Didact Gothic','Nanum Barun Gothic';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      /* color: #000000; */
    }
</style>
