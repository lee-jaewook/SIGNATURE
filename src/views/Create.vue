<template>
  <div id="create">
    <div style="padding: 3vw">
      <div v-if="type=== 1">
        <Laborcontract />
      </div>
     <div v-else-if="type===2">
       <Footer />
     </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import Laborcontract from "../components/data/Laborcontract.vue";

export default {
  data() {
    return{
      type : 1,
      input2 : "제발 데이터를 받아와 주세요!"
    }
  },
  name: "lb-wrap",
  components: {
    Footer,
    Laborcontract,
  },
};
</script>