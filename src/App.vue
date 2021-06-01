<template>
  <body>
    <div id="app" v-bind:style="{ backgroundColor: '#FBFBFD' }">
      <Header />
      <div id="content" class="content">
        <router-view></router-view>
      </div>
    </div>
  </body>
</template>

<script>
import Header from "./components/layout/Header.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapGetters("user", {
      userProfile: "userProfile",
      loggedIn: "loggedIn",
    }),
  },
  mounted() {
    console.log(this.$firebase);
  },
  methods: {
    ...mapActions("user", {
      login: "login",
      logout: "logout",
    }),

    save() {
      console.log("save@@@");
      this.$firebase.database().ref().child("abcd").set({
        title: "abscd",
        text: "tttt",
      });
    },

    read() {
      this.$firebase
        .database()
        .ref()
        .child("abcd")
        .on("value", (sn) => {
          console.log(sn);
          console.log(sn.val());
        });
    },
    async readOne() {
      const sn = await this.$firebase
        .database()
        .ref()
        .child("abcd")
        .on("value");
      console.log(sn.val());
    },
  },
};
</script>


<style>
@import url(https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap);
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);
@import url(http://fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
@import url(http://fonts.googleapis.com/earlyaccess/nanumbrushscript.css);
@import url(http://fonts.googleapis.com/earlyaccess/nanumpenscript.css);
@import url(http://cdn.jsdelivr.net/font-nanum/1.0/nanumbarungothic/nanumbarungothic.css);
@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"); /*font-family: 'Black Han Sans', sans-serif; */

#app {
  text-align: center;
  font-size: 70%;
  font-family: "Didact Gothic", "Nanum Barun Gothic";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
