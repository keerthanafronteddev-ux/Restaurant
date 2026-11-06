<template>
    <div class="bg-image-dishes">
        <div class="text-xs-center pb-3">
            <h1 class="display-2 pt-5 pr-5 pl-5 font-weight-medium text-yellow">Today Hot Dishes</h1>
            <h6 class="body-2  pt-3 pb-5 text-white pl-5  pr-5">The role of a good cook ware in the preparation of a
                sumptuous meal cannot be over</h6>
        </div>
        <v-carousel hide-delimiters interval="90000" touch>
            <v-carousel-item>
                <v-layout row wrap class="pt-5 w-container">
                    <v-flex xs1>
                    </v-flex>
                    <v-flex xs-10 sm3 class="text-xs-center mr-xs mr-5">
                        <v-avatar class="avatar-lg"  data-aos-once="true" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
                            <img src="../../assets/images/Dish-1.jpg" alt="John">
                        </v-avatar>
                        <h1 class="text-white pt-3 font-weight-medium"> Surmai Chilli 1</h1>
                        <p class="text-white font-weight-medium pt-2 mr-2 ml-2">Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames</p>
                        <h1 class="font-weight-medium text-yellow">$ 15.00</h1>
                    </v-flex>
                    <v-flex xs-10 sm3 class="text-xs-center mr-5 hidden-xs">
                        <v-avatar class="avatar-lg"  data-aos-once="true" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="3000">
                            <img src="../../assets/images/Dish-2.jpg" alt="John">
                        </v-avatar>
                        <h1 class="text-white pt-3 font-weight-medium">Lasal Cheese</h1>
                        <p class="text-white font-weight-medium pt-2 mr-2 ml-2">Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames</p>
                        <h1 class="font-weight-medium text-yellow">$ 15.00</h1>
                    </v-flex>
                    <v-flex xs-10 sm3 class="text-xs-center mr-5  hidden-xs">
                        <v-avatar class="avatar-lg"  data-aos-once="true" data-aos="zoom-out" data-aos-delay="500" data-aos-duration="3000">
                            <img src="../../assets/images/Dish-3.jpg" alt="John">
                        </v-avatar>
                        <h1 class="text-white pt-3 font-weight-medium">Organic Fruit Salad</h1>
                        <p class="text-white font-weight-medium pt-2 mr-2 ml-2">Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames</p>
                        <h1 class="font-weight-medium text-yellow">$ 15.00</h1>
                    </v-flex>
                    <v-flex xs1>
                    </v-flex>
                </v-layout>
            </v-carousel-item>
            <v-carousel-item>
                 <v-layout row wrap class="pt-5 w-container">
                    <v-flex xs1>
                    </v-flex>
                    <v-flex xs-10 sm3 class="text-xs-center mr-xs mr-5">
                        <v-avatar class="avatar-lg"  data-aos-once="true" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
                            <img src="../../assets/images/Dish-1.jpg" alt="John">
                        </v-avatar>
                        <h1 class="text-white pt-3 font-weight-medium"> Surmai Chilli 1</h1>
                        <p class="text-white font-weight-medium pt-2 mr-2 ml-2">Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames</p>
                        <h1 class="font-weight-medium text-yellow">$ 15.00</h1>
                    </v-flex>
                    <v-flex xs-10 sm3 class="text-xs-center mr-5 hidden-xs">
                        <v-avatar class="avatar-lg"  data-aos-once="true" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="3000">
                            <img src="../../assets/images/Dish-2.jpg" alt="John">
                        </v-avatar>
                        <h1 class="text-white pt-3 font-weight-medium">Lasal Cheese</h1>
                        <p class="text-white font-weight-medium pt-2 mr-2 ml-2">Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames</p>
                        <h1 class="font-weight-medium text-yellow">$ 15.00</h1>
                    </v-flex>
                    <v-flex xs-10 sm3 class="text-xs-center mr-5  hidden-xs">
                        <v-avatar class="avatar-lg"  data-aos-once="true" data-aos="zoom-out" data-aos-delay="500" data-aos-duration="3000">
                            <img src="../../assets/images/Dish-3.jpg" alt="John">
                        </v-avatar>
                        <h1 class="text-white pt-3 font-weight-medium">Organic Fruit Salad</h1>
                        <p class="text-white font-weight-medium pt-2 mr-2 ml-2">Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames</p>
                        <h1 class="font-weight-medium text-yellow">$ 15.00</h1>
                    </v-flex>
                    <v-flex xs1>
                    </v-flex>
                </v-layout>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>


export default {

}
</script>

<style>
.bg-image-dishes{
        background: #fff url(../../assets/images/Bg-black.jpg) !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}
.text-yellow{
    color: #E6A23C!important;
}
.text-white{
    color:#fff;
}
.avatar-lg{
    height: 220px!important;
    width:220px!important;
}
.v-avatar{
	transition: all 400ms ease 0s!important;
}
.v-avatar:hover{
    
    transform: scale(1.1)!important;
}
.v-carousel{
    box-shadow: none!important;
}
/* .mr-xs-5{
    margin-right:48px;
} */

/* 15 inch */
@media screen and (min-width: 1281px) and (max-width: 1366px) { 
    .w-container{
    margin: 0 4%!important;
}
.v-carousel__prev {
    left: 8%;
}
.v-carousel__next {
    right: 8%;
}
}
/* 19 inch */
@media screen and (min-width: 1367px) and (max-width: 1440px) { 
    .w-container{
    margin: 0 6%!important;
}
.v-carousel__prev {
    left: 11%;
}
.v-carousel__next {
    right: 11%;
}
}
/* 20 inch */
@media screen and (min-width: 1441px) and (max-width: 1600px) { 
    .w-container{
    margin: 0 9%!important;
}
.v-carousel__prev {
    left: 14%;
}
.v-carousel__next {
    right: 14%;
}
}
/* 21 inch */
@media screen and (min-width: 1601px) and (max-width: 1680px) { 
    .w-container{
    margin: 0 12%!important;
}
.v-carousel__prev {
    left: 16%;
}
.v-carousel__next {
    right: 16%;
}
}
/* 22 inch */
@media screen and (min-width: 1681px) and (max-width: 1920px) { 
    .w-container{
    margin: 0 16%!important;
}
.v-carousel__prev {
    left: 18%;
}
.v-carousel__next {
    right: 18%;
}
}

 /* Mobile phone */
@media only screen and (max-width: 480px) {
.hidden-xs{
   display: none; 
}
.mr-xs.mr-5{
    margin-right: 0px!important;
}
}
</style>
