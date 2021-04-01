<template>
  <div>
    <b-carousel 
    
      id="carousel-1"
      v-model="slide"
      :interval="40000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide class="carousel"
        img-src="https://i.esdrop.com/d/8CkX6dH3TM.png"
      >
        <div>
          <h1>간단한 계약</h1>
      
          <span>STT기술을 이용하여 일상속의 대화만을 
            <br>가지고도 간편하게 계약을 진행</span >
         </div>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide class="carousel" img-src="https://i.esdrop.com/d/PXcFsZCffw.png">
         <h1>블록체인</h1>

         <span >블록체인 기술을 이용하여 데이터를 
           <br>분산저장하여 신뢰도를 향상</span>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide class="carousel" img-src="https://i.esdrop.com/d/iwOLDLlBLX.png">
               <h1>다양한 계약서</h1>
               
              <span>생활속에 많이 쓰이는 계약의 템플릿을 
                <br>제공하여 쉽고 빠른 계약서작성</span>
         </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="carousel" >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://i.esdrop.com/d/xUruGFgS3n.png"
            alt="image slot"
            
          >
            
        </template>
         <h1>법률 서비스</h1>
        
             <span >계약과 관련된 전문적인 법률 상담</span>
    </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  class="carousel" img-src="https://i.esdrop.com/d/DKAdhsVqqE.png" img-alt="Blank image">
             <h1>문서 관리</h1>
                 <span >전자 문서를 통한 쉬운 관리</span>
        </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<style>
 .carousel{
        position: relative;
        background-size: cover;
        }

    .carousel::before{
        content: "";
        opacity: 0.4;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #000;
    }
    .carousel h1{
      padding: 1rem;
      color: #fff;
      text-align: center;
      font-family: 'Nanum Gothic Coding';
      font-size: 2rem;
      /* line-height: center;   */
      position: relative;}
    .carousel span{
              font-family: 'Nanum Gothic Coding','Nanum Barun Gothic';
              padding-top: 1rem;
              padding-bottom: 3em;
              color: rgb(255, 255, 255);
              font-size: 1rem;
    }

p{
    color: rgb(255, 255, 255);
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