<template>
  <!-- Footer -->
  <mdb-footer
    color="unique-color-dark"
    class="page-footer font-small pt-0"
    v-bind:style="{ backgroundColor:'#343a40' }"
    
  >
    <div v-bind:style="{ backgroundColor:'#6351ce' }" >
      <mdb-container class="text-left">
        <mdb-row class="py-4 d-flex align-items-center">
          <mdb-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0 white-text" style="color: white">
              간단한 계약, 안전한 계약. 지금 바로 시작하세요!
            </h6>
          </mdb-col>
          <mdb-col md="6" lg="7" class="text-center text-md-right">
            <a class="fb-ic ml-0"
              ><i class="fab fa-facebook white-text mr-lg-4"> </i
            ></a>
            <a class="tw-ic"
              ><i class="fab fa-twitter white-text mr-lg-4"> </i
            ></a>
            <a class="gplus-ic"
              ><i class="fab fa-google-plus white-text mr-lg-4"> </i
            ></a>
            <a class="li-ic"
              ><i class="fab fa-linkedin-in white-text mr-lg-4"> </i
            ></a>
            <a class="ins-ic"
              ><i class="fab fa-instagram white-text mr-lg-4"> </i
            ></a>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <mdb-container class="mt-5 mb-4 text-center text-md-left">
      <mdb-row class="mt-3">
        <mdb-col md="3" lg="4" xl="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold" style="color: white">
            <strong>Miners</strong>
          </h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p>
            팀 마이너스는 이정훈, 김원배, 이재욱으로 구성되어 있으며
            캡스톤입니다.
          </p>
        </mdb-col>
        <mdb-col md="2" lg="2" xl="2" class="mb-4">
          <h6 class="text-uppercase font-weight-bold" style="color: white">
            <strong>서비스</strong>
          </h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p><a href="#!">계약서 작성하기</a></p>
          <p><a href="#!">구두계약 이용하기</a></p>
        </mdb-col>
        <mdb-col md="3" lg="2" xl="2" class="mb-4">
          <h6 class="text-uppercase font-weight-bold" style="color: white">
            <strong>고객센터</strong>
          </h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p><a href="#!">마이페이지</a></p>
          <p><a href="#!">계약서 관리하기</a></p>
          <p><a href="#!">자주 묻는 질문</a></p>
          <p><a href="#!">서비스 이용하기</a></p>
        </mdb-col>
        <mdb-col md="4" lg="3" xl="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold" style="color: white">
            <strong>Contact</strong>
          </h6>
          <hr
            class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p><i class="fas fa-home mr-3"></i>Jeonju, 123456, KR</p>
          <p><i class="fas fa-envelope mr-3"></i>mwon0408@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i>+ 01 234 567 88</p>
          <p><i class="fas fa-print mr-3"></i>010 1234 5678</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid style="color: white">
        &copy; Copyright @ 2021
        <a href="https://www.MDBootstrap.com"> SIGNATURE </a> Inc. 모든 권리
        보유.
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>

<style>
.h6 {
  color: aliceblue;
}
</style>