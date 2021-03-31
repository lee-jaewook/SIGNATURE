<template>
  <div>
    <b-carousel 
    
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://i.esdrop.com/d/8CkX6dH3TM.png"
      >
      <span>간단한 계약</span>
      <div style="padding: 1rem">
      <p>STT기술을 이용하여 일상속의 대화만을 가지고도 </p><p > 생활속의 간편한 계약을 진행할 수 있습니다.</p >
      </div></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://i.esdrop.com/d/PXcFsZCffw.png">
        <span>블록체인 네트워크</span>
        <div style="padding: 1rem">
        <p>블록체인 기술을 이용하여 데이터를 분산저장하여 </p><p> 자료의 분실이나 조작의 위험을 배제하여 신뢰도를 향상시킵니다.</p>
      </div></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://i.esdrop.com/d/iwOLDLlBLX.png">
              <span>다양한 계약서</span>
                 <div style="padding: 1rem">
            <p>생활속에 많이 쓰이는 계약의 템플릿을 제공하여</p><p> 빠르고 간편하게 계약서를 작성하실 수 있습니다.</p>
         </div></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://i.esdrop.com/d/xUruGFgS3n.png"
            alt="image slot"
            
          >
            
        </template>
        <span>법률 서비스</span>
        <div style="padding: 1rem">
            <p>계약과 관련된 여러가지 법률에 대해서 궁금하신점을 </p><p> 카카오톡이나 E-Mail을 통하여 상담을 진행하실 수 있습니다.</p>
     </div> </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  img-src="https://i.esdrop.com/d/DKAdhsVqqE.png" img-alt="Blank image">
            <span>삶의질 향상</span>
             <div style="padding: 1rem">
                  <p>계약과 관련된 여러가지 법률에 대해서 궁금하신점을 </p><p> 카카오톡이나 E-Mail을 통하여 상담을 진행하실 수 있습니다.</p>
          </div></b-carousel-slide>
    </b-carousel>

  </div>
</template>

<style>
span{
    font-family: 'Nanum Gothic Coding','Nanum Barun Gothic';
    color: rgb(0, 0, 0);
    background-color: rgba(255, 251, 0, 0.815);
    font-size: 2rem;
}

h3{
    background-color: rgba(0, 0, 0, 0.651);
    
    font-size: 1rem;
}
p{
    color: white;
    background-color: rgba(0, 0, 0, 0.452);
    font-family: 'Nanum Gothic';
    font-size: 1rem;
}
</style>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    // methods: {
    //   onSlideStart(slide) {
    //     this.sliding = true
    //   },
    //   onSlideEnd(slide) {
    //     this.sliding = false
    //   }
    // }
  }
</script>