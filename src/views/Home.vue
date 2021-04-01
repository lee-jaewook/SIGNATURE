<template>
<div id ="main">
     <Carousel  />
       <div style="padding:2vw">
        <div style="padding:1vw">
            <div class="mt-4">
            <b-card class="cardimg" img-src="https://i.esdrop.com/d/rRHoD0K0dH.jpg" img-alt="Card image" img-right >
            
                <h5 style="font-size: 3vw" >
                기호에 맞는 계약서 작성
                <br> Write a Contract
                </h5>
                <br>
                <h7>사용하고자 하는 계약서 양식을 선택하여
                <br>계약서 작성에 대한 부담을 줄이고
                <br>쉽고 간편하게 작성이 가능합니다.
                </h7>
                <br><br><button>
                작성하기
                </button>
            </b-card><br><br>

            <b-card class="cardimg" img-src="https://i.esdrop.com/d/Ts956bElqf.jpg" img-alt="Card image" img-left>
            
                <h5 style="font-size: 3vw" >
                블록체인을 통한 안전한 계약서 보관
                <br> Using BlockChain
                </h5>
                <br>
                작성된 계약서는 허가형 블록체인에 저장됨으로써
                <br>계약당사자들 이외의 접근이 불가능 하기 때문에
                <br>계약서의 신뢰도 및 안정성을 보장합니다.
              <br><br>
            </b-card><br><br>

            <b-card class="cardimg" img-src="https://i.esdrop.com/d/CK1RsXeo3P.jpg" img-alt="Card image" img-right>
                <h5 style="font-size: 3vw" >
                    음성인식을 통한 계약서 작성 서비스
                    <br> STT(Speech To Text)
                </h5>
                <br>음성인식 기능인 STT(Speech To Text)을 사용하여
                <br>계약서의 작성없이 대화를 통해서 계약서가 완성이 됩니다.
                <br>계약을 한번 진행해보세요.
              <br><br><button>
          asdf
        </button>
            </b-card>
        </div>
         
        </div>
       
        </div>
        </div>
</template>

<style>
        .mt-4{
            
            justify-content: center; /*가로에서 가운데에 요소(자식요소)를 배치하겠다*/ 
            
            color: black;
        }

        
    .card{
        color: black;

    }

    .cardimg{
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

    .h5{

        align-items: center;
        
    }

</style>

<script>
import Carousel from '../components/layout/Carousel.vue';
export default {
        name: 'Main',
            components: {
                Carousel
            },
}
</script>
