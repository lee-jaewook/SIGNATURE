<template>
  <div class="lb-wrap">
    <div class="img">
      <div class="content">
        <h1>템플릿을 통한 간단한 계약</h1>
        <h2>Provide Templates</h2>
      </div>
      <div class="img-cover"></div>
    </div>

    <div style="padding: 3vw">
      <b-card no-body>
        <b-tabs card tabs justified align="center" style="font-size: 1.3vw">
          <b-tab no-body title="계약서 양식">
            <div>
              <div>
                <div style="padding: 2vw">
                  <b-card-group deck>
                    <b-card
                      header="featured"
                      header-tag="header"
                      footer="Card Footer"
                      footer-tag="footer"
                      title="근로계약서"
                    >
                      <template #header>
                        <h6 class="mb-0">인사/노무</h6>
                      </template>

                      <template #footer>
                        <div>
                          <b-img
                            src="https://i.esdrop.com/d/NIHLFs78X4.png"
                            fluid-grow
                            alt="Fluid-grow image"
                          ></b-img>
                        </div>
                      </template>

                      <b-card-text style="color: black"></b-card-text>
                      <b-button router-link to='/create' variant="outline-primary"
                        >작성하기</b-button
                      >
                    </b-card>
                    <b-card
                      title="시말서"
                      header-tag="header"
                      footer-tag="footer"
                    >
                      <template #header>
                        <h6 class="mb-0">인사/노무</h6>
                      </template>
                      <b-card-text style="color: black"></b-card-text>
                      <b-button router-link to='/create' variant="outline-primary"
                        >작성하기</b-button
                      >
                      <template #footer>
                        <div>
                          <b-img
                            src="https://i.esdrop.com/d/BojY5kkW9c.png"
                            fluid-grow
                            alt="Fluid-grow image"
                          ></b-img>
                        </div>
                      </template>
                    </b-card>

                    <b-card
                      title="비밀유지계약서"
                      header-tag="header"
                      footer-tag="footer"
                    >
                      <template #header>
                        <h6 class="mb-0">보안</h6>
                      </template>
                      <b-card-text style="color: black"></b-card-text>
                      <b-button router-link to='/create' variant="outline-primary"
                        >작성하기</b-button
                      >
                      <template #footer>
                        <div>
                          <b-img
                            src="https://i.esdrop.com/d/hP2dUEAxzf.png"
                            fluid-grow
                            alt="Fluid-grow image"
                          ></b-img>
                        </div>
                      </template>
                    </b-card>
                  </b-card-group>
                </div>
              </div>
              <div class="mt-3">
                <div style="padding: 2vw">
                  <b-card-group deck>
                    <b-card
                      header="featured"
                      header-tag="header"
                      footer="Card Footer"
                      footer-tag="footer"
                      title="사직서"
                    >
                      <template #header>
                        <h6 class="mb-0">인사/노무</h6>
                      </template>

                      <template #footer>
                        <div>
                          <b-img
                            src="https://i.esdrop.com/d/4FbHMyGEvH.png"
                            fluid-grow
                            alt="Fluid-grow image"
                          ></b-img>
                        </div>
                      </template>
                      <b-card-text style="color: black"></b-card-text>
                      <b-button router-link to='/create' variant="outline-primary"
                        >작성하기</b-button
                      >
                    </b-card>

                    <b-card
                      title="해고통지서"
                      header-tag="header"
                      footer-tag="footer"
                    >
                      <template #header>
                        <h6 class="mb-0">인사/노무</h6>
                      </template>
                      <b-card-text style="color: black"></b-card-text>
                      <b-button href="#" variant="outline-primary"
                        >작성하기</b-button
                      >
                      <template #footer>
                        <div>
                          <b-img
                            src="https://i.esdrop.com/d/TNNMsoZuas.png"
                            fluid-grow
                            alt="Fluid-grow image"
                          ></b-img>
                        </div>
                      </template>
                    </b-card>

                    <b-card
                      title="매매계약서"
                      header-tag="header"
                      footer-tag="footer"
                    >
                      <template #header>
                        <h6 class="mb-0">부동산</h6>
                      </template>
                      <b-card-text style="color: black"></b-card-text>
                      <b-button router-link to='/create' variant="outline-primary"
                        >작성하기</b-button
                      >
                      <template #footer>
                        <div>
                          <b-img
                            src="https://i.esdrop.com/d/6rTuhVbjQP.png"
                            fluid-grow
                            alt="Fluid-grow image"
                          ></b-img>
                        </div>
                      </template>
                    </b-card>
                  </b-card-group>
                </div>
              </div>
            </div>
          </b-tab>

          <b-tab no-body title="구두계약" style="margin: 2vw">
            <b-card-img
              bottom
              src="https://i.esdrop.com/d/8CkX6dH3TM.png"
              alt="Image 25"
            ></b-card-img>
            <b-card-footer style="font-size: 1.5vw"
              >텍스트만 저장되는 기존의 계약서를 벗어나서 음성까지도 저장되는
              계약서를 만들어보세요
              <br />
              <br />
              <input type="checkbox" id="popup">
              <label for="popup">시작하기</label>
              <div>
                <div>
                  <b-button>
                    라라
                  </b-button>
                  <label for="popup"></label>
                </div>
                <label for="popup"></label>
              </div>
              <!-- <b-button href="/Stt" style="magin: 1vw" variant="outline-primary"
                >시작하기</b-button
              > -->
            </b-card-footer>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <Footer />
  </div>
</template>

<style >
.img {
  position: relative;
  background-image: url(https://i.esdrop.com/d/iwOLDLlBLX.png);
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
  top: 80%;
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
input[id="popup"]{
  display:none;
}
input[id="popup"]+label{
  display: inline-block;
  padding: 20px;
  background: #6351CE;
  color:#fff;
}
input[id="popup"]+label+div{
  display: none;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  z-index: 100;
}
input[id="popup"]:checked + label + div{
  display:block;
}
input[id="popup"]+label+div>div{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:500px;
  height:300px;
  background: #fff;
  z-index:2;
}
input[id="popup"]+label+div>div>label{
  position: absolute;
  top:0%;
  right:0%;
  transform:translate(40%,-40%);
  padding:20px;
  background: #dd5347;
  border-radius:100%;
  z-index:1;
}
input[id="popup"]+label+div>label{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0, 0, 0, 0.664);
  z-index:1;
}
</style>

<script>
import Footer from "../components/layout/Footer.vue";
export default {
  name: "lb-wrap",
  components: {
    Footer,
  },
};
</script>