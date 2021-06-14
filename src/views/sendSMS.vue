<template>
  <div>
    <button type='button' @click="blockchain">{{ input1 }}</button>
    <input type="text" v-model="input1"/>
    <div>
      <input type="text" v-model="Whatdevice"/>
    </div>
    <input type="text" v-model="phoneNumber"/>
    <input type="text" v-model="Context"/>

    <a v-bind:href="test">
      <div>
        <button type='button' @click="SmsSend">SmsSend</button>
        <input type="text" v-model="test"/>
      </div>
    </a>

  </div>


</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      input1: "이정",
      input2: "제발 데이터를 받아와 주세요!",
      phoneNumber: "",
      Context: "",
      Whatdevice: "",
      test: ""
    }
  },
  mounted() {
    this.checkMobile()
  },

  methods: {

    async blockchain() {
      const test = await axios.get("http://localhost:3333/test");
      console.log(test.data);

    },

    async get() {
      // 어떠한 데이터
      axios.post("http://localhost:3333/test2", {data: {"name": this.input1, "pw": this.input2}}).then(res => {
        const parseData = JSON.parse(res.data.result);
        // 전체 Json 형식의 데이터를 불러온다
        console.log("리소스 입니다 :", parseData);
        // Json 형식의 데이터에서 원하는 데이터를 불러온다
        console.log("ID:", parseData["ID"]);
        console.log("VD:", parseData["VD"]);

        // 이러한 방식으로는 Object Object를 불러온다.
        this.input2 = parseData;

      }).catch(e => {
        console.error(e)
      });

    },
    checkMobile() {

      const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

      if (varUA.indexOf('android') > -1) {
        //안드로이드
        this.Whatdevice = "android";
      } else if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
        //IOS
        this.Whatdevice = "ios";
      } else {
        //아이폰, 안드로이드 외
        this.Whatdevice = "other";
      }

    },

    SmsSend() {
      if (this.Whatdevice === "ios") {

        this.test = "sms:" + this.phoneNumber + "&body=" + this.Context
      } else if (this.Whatdevice === "android") {

        this.test = "sms:" + this.phoneNumber + "?body=" + this.Context
      } else {
        alert("Desktop은 이메일로 구현할 계획입니다 ")
      }
    }
  }


}
</script>


<!--<div v-if="Math.random() > 0.5">-->

<!--</div>-->

<!--<div v-else>-->

<!--</div>-->