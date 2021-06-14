<template>
    <div>
        <h1> Write</h1>
      <button type = 'button' @click="blockchain">blockchain</button>
      <input type="text" v-model="input1"/>
      <button type = 'button' @click="get">get</button>
      <input type="text" v-model="input2"/>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return{
      input1 : "이정",
      input2 : "제발 데이터를 받아와 주세요!"
    }
  },
  methods: {

    async blockchain(){
      const test = await axios.get("http://localhost:3333/test");
      console.log(test);
      console.log(test.data);

    },

    async get(){
        // 어떠한 데이터

      axios.post("http://localhost:3333/test2", {data: {"name" : this.input1, "pw": this.input2}}).then( res => {
        const parseData = JSON.parse(res.data.result);
        // 전체 Json 형식의 데이터를 불러온다
        console.log("리소스 입니다 :", parseData);
        // Json 형식의 데이터에서 원하는 데이터를 불러온다
        console.log("ID:", parseData["ID"]);
        console.log("VD:", parseData["VD"]);

        // 이러한 방식으로는 Object Object를 불러온다.
        this.input2 = parseData;

      }).catch(e => { console.error(e)});

    }
  }
}
</script>