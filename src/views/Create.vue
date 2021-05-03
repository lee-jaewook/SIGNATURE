<template>
  <div id="create">
    <div style="padding: 3vw">
      <Laborcontract />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import Laborcontract from "../components/data/Laborcontract.vue";
export default {
  name: "lb-wrap",
  components: {
    Footer,
    Laborcontract,
  },
};
</script>