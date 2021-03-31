<template>
<div id ="main"  >

     <Carousel />
       <div style="padding:3rem">
        <div >
            <h4>Top and Bottom</h4>
            <b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
                <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>

            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
                <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
            </b-card-group>
        </div>
        <div class="mt-4">
            <h4>Left and Right (or Start and End)</h4>
            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            </b-card>

            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            </b-card>
        </div>
        </div>
        </div>
</template>

<style>

</style>

<script>
import Carousel from '../components/layout/Carousel.vue';
export default {
        name: 'Main',
            components: {
                Carousel
            },

    data(){
        return{
            title: "개발자의 품격",
            title2: "welcome",
            input1: "abcd",
            options: [
                {v:"S", t:"Seoul"},
                {v:"J", t:"Jeonju"},
                {v:"B", t:"Busan"},
            ],
            region: "J"
        };
    },

    methods: {
        getdata(){
            alert(this.input1)
        },
        setdata(){
            this.input1 = "만카이!";
        },
        watch:{
            input1(){
                console.log(this.input1);
            }
        }
    }
}
</script>
