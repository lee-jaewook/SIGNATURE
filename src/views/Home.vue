<template>
  <div id="main">
    <Carousel />

    <div style="padding: 2vw">
      <div style="padding: 1vw">
        <div class="mt-4">
          <b-card
            class="cardimg"
            img-src="https://i.esdrop.com/d/rRHoD0K0dH.jpg"
            img-alt="Card image"
            img-right
          >
            <h5 style="font-size: 2vw">
              기호에 맞는 계약서 작성
              <br />
              Write a Contract
            </h5>
            <br />
            <h7
              >사용하고자 하는 계약서 양식을 선택하여 <br />계약서 작성에 대한
              부담을 줄이고 <br />쉽고 간편하게 작성이 가능합니다.5
            </h7>
            <br /><br /><b-button @click="test()" variant="outline-primary"
              >계약서 작성하기</b-button
            > </b-card
          ><br /><br />

          <b-card
            class="cardimg"
            img-src="https://i.esdrop.com/d/Ts956bElqf.jpg"
            img-alt="Card image"
            img-left
          >
            <h5 style="font-size: 2vw">
              블록체인을 통한 안전한 계약서 보관
              <br />
              Using BlockChain
            </h5>
            <br />
            작성된 계약서는 허가형 블록체인에 저장됨으로써
            <br />계약당사자들 이외의 접근이 불가능 하기 때문에 <br />계약서의
            신뢰도 및 안정성을 보장합니다. <br /><br /> </b-card
          ><br /><br />

          <b-card
            class="cardimg"
            img-src="https://i.esdrop.com/d/CK1RsXeo3P.jpg"
            img-alt="Card image"
            img-right
          >
            <h5 style="font-size: 2vw">
              음성인식을 통한 계약서 작성 서비스
              <br />
              STT(Speech To Text)
            </h5>
            <br />음성인식 기능인 STT(Speech To Text)을 사용하여 <br />계약서의
            작성없이 대화를 통해서 계약서가 완성이 됩니다. <br />계약을 한번
            진행해보세요. <br /><br /><b-button variant="outline-primary"
              >음성인식 계약 시작하기</b-button
            >
          </b-card>
        </div>

        <div style="padding-top: 3vw">
          <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card Image"
            text-variant="white"
            title="법률서비스 상담"
            sub-title="Legal service"
          >
            <b-card-text>
              계약에 관련된 사항들에 대해서 법률 서비스를 받아보세요.
            </b-card-text>

            <div>
              <b-button v-b-toggle.sidebar-no-header>자세히알아보기</b-button>
              <b-sidebar
                id="sidebar-no-header"
                aria-labelledby="sidebar-no-header-title"
                no-header
                shadow
              >
                <template #default="{ hide }">
                  <div class="p-3">
                    <h4 id="sidebar-no-header-title">법률 서비스</h4>
                    <p1>
                      계약을 진행하면서 발생할 수 있는 여러가지 부분에 대해서
                      전문적인 법률가를 통해 서비스를 받아보세요. 카카오톡
                      채팅방, 이메일, 게시판등을 통해서 상담을 진행하실 수
                      있습니다. 이용하시는 상담 내용에 따라 비용이 발생할 수
                      있습니다.
                    </p1>
                    <nav class="mb-3">
                      <b-nav vertical>
                        <b-nav-item active @click="hide"
                          >카카오톡 상담</b-nav-item
                        >
                        <b-nav-item href="#link-1" @click="hide"
                          >이메일 상담</b-nav-item
                        >
                        <b-nav-item href="#link-2" @click="hide"
                          >게시판 상담</b-nav-item
                        >
                      </b-nav>
                    </nav>
                    <b-button variant="primary" block @click="hide"
                      >Close Sidebar</b-button
                    >
                  </div>
                </template>
              </b-sidebar>
            </div>
          </b-card>
        </div>

        <div style="padding-top: 3vw; padding-bottom: 4vw">
          <b-row>
            <b-col><h4>자주하는 질문</h4></b-col>
            <b-col><h4>문의하기</h4></b-col>
            <div class="w-100" style="padding-top: 1vw"></div>
            <b-col
              ><b-list-group>
                <b-list-group-item href="#some-link"
                  >1.계약서는 안전하게 보관이 되나요?</b-list-group-item
                >
                <b-list-group-item href="#"
                  >2.음성계약 기능은 어떤건가요?</b-list-group-item
                >
                <b-list-group-item href="#"
                  >3.블록체인에 저장하는 이유는 뭔가요?</b-list-group-item
                >
                <b-list-group-item href="#foobar"
                  >4.법적인 효력은 있나요?</b-list-group-item
                >
              </b-list-group></b-col
            >
            <b-col>
              <b-form-textarea
                id="textarea-no-resize"
                placeholder="문의사항을 입력해주세요"
                rows="5"
                no-resize
              >
              </b-form-textarea>
              <div style="padding-top: 1vw">
                <b-button variant="outline-primary"> 보내기 </b-button>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<style>
.mt-4 {
  justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/
  color: black;
}

.card {
  color: black;
}

.cardimg {
  justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  font-size: 1.5vw;
  overflow: hidden;
  color: black;
}
.cardimg img {
  padding-right: 4vw;
  padding-left: 4vw;
  position: relative;
  max-width: 40%;
  height: auto;
  display: block;
}

.h5 {
  align-items: center;
}
</style>

<script>
import Carousel from "../components/layout/Carousel.vue";
import Footer from "../components/layout/Footer.vue";
import testtt from "../components/backend/test.js";

export default {
  data() {
    return {
      list: [],
    };
  },

  name: "Main",
  components: {
    Carousel,
    Footer,
  },

  methods: {
    test() {
      this.$isEmpty();
      testtt();
    },
  },
};
</script>