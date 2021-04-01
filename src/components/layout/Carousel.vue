<template>
  <div  >
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
      <b-carousel-slide class="carousel" 
        img-src="https://i.esdrop.com/d/8CkX6dH3TM.png"
      >
        <div >
          <h1 >간편한 계약</h1>
      
          <span>음성인식 기술을 이용하여   
            <br>간편하게 계약을 진행합니다.</span >

      
         </div>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide class="carousel" img-src="https://i.esdrop.com/d/PXcFsZCffw.png">
         <h1>신뢰성 있는 보안</h1>

         <span> 계약서를 위변조를 막기위해 블록체인에 보관함으로써
           <br> 안심하고 이용하실 수 있습니다.</span>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide class="carousel" img-src="https://i.esdrop.com/d/iwOLDLlBLX.png">
               <h1>계약서 양식</h1>
               
              <span>생활속에 많이 쓰이는 계약서의 템플릿을 제공하여
                <br>쉽고 빠르게 계약서를 작성해 보세요</span>
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
        
             <span >계약과 관련된 전문적인 법률 상담을 통해
               <br>손쉽게 법적 보호를 받아보세요.
             </span>
    </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide  class="carousel" img-src="https://i.esdrop.com/d/DKAdhsVqqE.png" img-alt="Blank image">
             <h1>법적 효력</h1>
                 <span >전자 문서의 법적 효력은
                   <br> 서면계약과 동일합니다
                 </span>
        </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<style>
 .carousel{
        position: relative;
        background-size: cover;
        align-items: center;
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
      padding: 1vw;
      color: #fff;
      text-align: center;
      
      font-family: 'Nanum Barun Gothic';
      font-size: 3vw;
      align-items: center;
      line-height: center;
      position: relative;}

    .carousel span{
      
              font-family: 'Nanum Barun Gothic';
              padding-top: 1rem;
              padding-bottom: 3em;
              color: rgb(255, 255, 255);
              font-size: 2vw;
    }

p{
    color: rgb(255, 255, 255);
    font-family: 'Nanum Gothic';
    font-size: 1vw;
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