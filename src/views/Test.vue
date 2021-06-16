<template >
  <div style="padding: 3vw" id="labor">
    <b-card border-variant="dark" align="left">
      <b-card-text style="color: black"
        ><STrong>김원배</STrong>(이하 “사업주”라 함)과(와)
        <input
          v-model="workers"
          type="text"
          name="workers"
          placeholder="근로자명을 입력하세요"
        />(이하 “근로자”라 함)은 다음과 같이 근로계약을 체결한다.
        <br />
        <br />1. 근로계약기간 :<STrong>2020-05-10</STrong>부터
        <STrong>2020-05-20</STrong>까지
        <br />
        <br />2. 근 무 장 소 :
        <STrong>전북대</STrong>
        <br />
        <br />3. 업무의 내용 :
        <STrong>문서정리</STrong>
        <br />
        <br />4. 소정근로시간 : <input type="time" name="employer" />부터
        <input type="time" name="employer" />까지 (휴게시간 :
        <input type="time" name="employer" /> ~
        <input type="time" name="employer" />)
        <br />
        <br />5. 근무일/휴일 : 매주 <STrong>월~금</STrong>일(또는 매일단위)근무,
        주휴일 매주 <STrong>토,일</STrong>요일
        <br />
        <br />6. 임 금 <br />- 월(일, 시간)급 : <STrong>1400000</STrong>원
        <br />- 상여금 : <STrong>1400000</STrong>원
        <br />
        <br />7. 연차유급휴가 <br />- 연차유급휴가는 근로기준법에서 정하는 바에
        따라 부여함
        <br />
        <br />8. 사회보험 적용여부(해당란에 체크) <br />□ 고용보험 □ 산재보험 □
        국민연금 □ 건강보험 <br /><br />9. 근로계약서 교부 <br />
        - 사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자의
        교부요구와 관계없이 근로자에게 교부함(근로기준법 제17조 이행)
        <br /><br />10. 기 타 <br />
        - 이 계약에 정함이 없는 사항은 근로기준법령에 의함
        <br /><br /><br />
        <br />
        <STrong>2021-06-20</STrong>

        <br /><br />(사업주) 사업체명 :<STrong>김원배</STrong>(전화 :
        <STrong>010-9960-2857</STrong>)<br />주 소 :<STrong
          >전주시 덕진구 호성동</STrong
        ><br />대 표 자 :
        <STrong>김원배</STrong>
        (서명) <br /><br />(근로자) 주 소 :<input
          type="text"
          name="employer"
          placeholder="주소를 입력하세요"
        /><br />연 락 처 :
        <input
          type="text"
          name="employer"
          placeholder="연락처를 입력하세요"
        /><br />성 명 :
        <input
          type="text"
          name="employer"
          placeholder="근로자명을 입력하세요"
        />
        (서명)</b-card-text
      >
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      status: "동의하지 않음",
      employer: "",
      workers: "",
      firstdata: "",
      lastdata: "",
      place: "",
      work: "",
      day: "",
      holiday: "",
      salary: "",
      bonus: "",
      contactdata: "",
      employername: "",
      employertel: "",
      employeradr: "",
    };
  },
  mounted() {
    (this.employer = this.$route.params.employer),
      (this.firstdata = this.$route.params.firstdata),
      (this.place = this.$route.params.place);
  },
};
</script>