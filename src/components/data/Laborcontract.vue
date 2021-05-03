<template>
  <div id="labor">
    <b-card
      border-variant="dark"
      style="font-size: 3vw; margin: 2vw"
      header="근로계약서"
      align="left"
    >
      <b-card-text style="color: black"
        ><input
          v-model="employer"
          type="text"
          name="employer"
          placeholder="사업자명을 입력하세요"
        />(이하 “사업주”라 함)과(와) (_____________)(이하 “근로자”라 함)은
        다음과 같이 근로계약을 체결한다.
        <br />
        <br />1. 근로계약기간 :<input
          v-model="firstdata"
          type="date"
          name="employer"
        />부터 <input v-model="lastdata" type="date" name="employer" />까지
        <br />
        <br />2. 근 무 장 소 :
        <input
          v-model="place"
          type="text"
          name="employer"
          placeholder="근무장소를 입력하세요"
        />
        <br />
        <br />3. 업무의 내용 :
        <input
          v-model="work"
          type="text"
          name="employer"
          placeholder="업무명 입력하세요"
        />
        <br />
        <br />4. 소정근로시간 : <input type="time" name="employer" />부터
        <input type="time" name="employer" />까지 (휴게시간 :
        <input type="time" name="employer" /> ~
        <input type="time" name="employer" />)
        <br />
        <br />5. 근무일/휴일 : 매주
        <input
          v-model="day"
          type="text"
          name="employer"
          placeholder="요일을 입력하세요"
        />일(또는 매일단위)근무, 주휴일 매주
        <input
          v-model="holiday"
          type="text"
          name="employer"
          placeholder="요일을 입력하세요"
        />요일
        <br />
        <br />6. 임 금 <br />- 월(일, 시간)급 :
        <input
          v-model="salary"
          type="text"
          name="employer"
          placeholder="임금을 입력하세요"
        />원 <br />- 상여금 :
        <input
          v-model="bonus"
          type="text"
          name="employer"
          placeholder="상여금을 입력하세요"
        />원
        <br />
        <br />7. 연차유급휴가 <br />- 연차유급휴가는 근로기준법에서 정하는 바에
        따라 부여함
        <br />
        <br />8. 사회보험 적용여부(해당란에 체크) <br />□ 고용보험 □ 산재보험 □
        국민연금 □ 건강보험 <br /><br />9. 근로계약서 교부 <br />
        - 사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자의
        교부요구와 관계없이 근로자에게 교부함(근로기준법 제17조 이행)
        <br /><br />10. 기 타 <br />
        - 이 계약에 정함이 없는 사항은 근로기준법령에 의함 <br /><br /><br />
        <br />
        <input v-model="contactdata" type="date" name="employer" />

        <br /><br />(사업주) 사업체명 :<input
          v-model="employername"
          type="text"
          name="employer"
          placeholder="사업자명을 입력하세요"
        />(전화 :
        <input
          v-model="employertel"
          type="text"
          name="employer"
          placeholder="번호를 입력하세요"
        />)<br />주 소 :<input
          v-model="employeradr"
          type="text"
          name="employer"
          placeholder="주소를 입력하세요"
        /><br />대 표 자 :
        <input
          v-model="employer"
          type="text"
          name="employer"
          placeholder="사업자명을 입력하세요"
        />
        (서명) <br /><br />(근로자) 주 소 :(_____________)<br />연 락 처 :
        (_____________)<br />성 명 : (_____________) (서명)</b-card-text
      >
    </b-card>
    <div>
      <b-button v-b-modal.modal-scrollable>저장하기</b-button>

      <b-modal id="modal-scrollable" scrollable title="근로계약서">
        <b-card border-variant="dark" align="left">
          <b-card-text style="color: black"
            ><STrong>{{ employer }}</STrong
            >(이하 “사업주”라 함)과(와)
            <input
              v-model="workers"
              type="text"
              name="workers"
              placeholder="근로자명을 입력하세요"
            />(이하 “근로자”라 함)은 다음과 같이 근로계약을 체결한다.
            <br />
            <br />1. 근로계약기간 :<STrong>{{ firstdata }}</STrong
            >부터 <STrong>{{ lastdata }}</STrong
            >까지
            <br />
            <br />2. 근 무 장 소 :
            <STrong>{{ place }}</STrong>
            <br />
            <br />3. 업무의 내용 :
            <STrong>{{ work }}</STrong>
            <br />
            <br />4. 소정근로시간 : <input type="time" name="employer" />부터
            <input type="time" name="employer" />까지 (휴게시간 :
            <input type="time" name="employer" /> ~
            <input type="time" name="employer" />)
            <br />
            <br />5. 근무일/휴일 : 매주 <STrong>{{ day }}</STrong
            >일(또는 매일단위)근무, 주휴일 매주 <STrong>{{ holiday }}</STrong
            >요일
            <br />
            <br />6. 임 금 <br />- 월(일, 시간)급 : <STrong>{{ salary }}</STrong
            >원 <br />- 상여금 : <STrong>{{ bonus }}</STrong
            >원
            <br />
            <br />7. 연차유급휴가 <br />- 연차유급휴가는 근로기준법에서 정하는
            바에 따라 부여함
            <br />
            <br />8. 사회보험 적용여부(해당란에 체크) <br />□ 고용보험 □
            산재보험 □ 국민연금 □ 건강보험 <br /><br />9. 근로계약서 교부 <br />
            - 사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자의
            교부요구와 관계없이 근로자에게 교부함(근로기준법 제17조 이행)
            <br /><br />10. 기 타 <br />
            - 이 계약에 정함이 없는 사항은 근로기준법령에 의함
            <br /><br /><br />
            <br />
            <STrong>{{ contactdata }}</STrong>

            <br /><br />(사업주) 사업체명 :<STrong>{{ employername }}</STrong
            >(전화 : <STrong>{{ employertel }}</STrong
            >)<br />주 소 :<STrong>{{ employeradr }}</STrong
            ><br />대 표 자 :
            <STrong>{{ employer }}</STrong>
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
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="동의함"
          unchecked-value="동의하지 않음"
        >
          위 사항을 확인하고 문제가 없음을 동의합니다
          <div>
            <strong>{{ status }}</strong>
          </div>
        </b-form-checkbox>
      </b-modal>
    </div>
    <br />
    <br />
    <br />
    <div style="padding-left: 7vw; padding-right: 7vw">
      <b-input-group
        v-for="size in ['']"
        :key="size"
        :size="size"
        class="mb-3"
        prepend="상대방 번호"
      >
        <b-form-input
          type="tel"
          id="phone"
          name="phone"
          placeholder="01012345678"
          pattern="[0-1]{3}[0-9]{4}[0-9]{4}"
          required
        ></b-form-input>
        <b-input-group-append>
          <b-button size="sm" text="카카오톡 보내기" variant="outline-primary"
            >카카오톡 전송하기</b-button
          >
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>