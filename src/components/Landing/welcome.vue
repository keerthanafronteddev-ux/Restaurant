<template>
    <div class="bg-image">
        <div class="text-center">
            <h1 class="display-2 text-center pt-5 pr-3 pl-3 font-weight-medium">Welcome To The La Boom</h1>
            <h6 class="body-2  pt-3 pb-5 pl-5 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        </div>
        <v-layout row wrap class="pl-5 pr-5 w-container pb-5">
            <v-flex xs12 sm6>
                <div class="body-2 pr-5 pr-5-xs line-height-lg">
                    Welcome. This is La Boom. Elegant & sophisticated restaurant template.
                    Royal plate offers different home page layouts with smart and unique design, showcasing beautifully
                    designed elements every
                    restaurant website should have. Smooth animations, fast loading and engaging user experience are
                    just some of , the features
                    this template offers. So, give it a try and dive into a world of La Boom restaurant websites
                </div>
                <div class="text-xs-left pt-5 pb-5">
                    <v-btn round color="primary" class="ml-0 font-weight-bold" large dark>LEARN MORE</v-btn>
                </div>
            </v-flex>
            <v-flex xs12 sm3>
                <div class="body-2 pb-4" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                    <img src="../../assets/images/welcome-dish-1.png">
                </div>
                 <div class="body-2" data-aos="fade-right" data-aos-once="true" data-aos-delay="300" data-aos-duration="1000">
                    <img src="../../assets/images/welcome-dish-2.png">
                </div>
            </v-flex>
            <v-flex xs12 sm3>
                <div class="body-2 pt-4 pb-4" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
                    <img src="../../assets/images/welcome-dish-3.png">
                </div>
                <div class="body-2 pb-3 " data-aos="fade-left" data-aos-once="true" data-aos-delay="300"  data-aos-duration="1000">
                    <img src="../../assets/images/welcome-dish-4.png">
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-image{
        background: #fff url(../../assets/images/welcome.png) !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}
.display-2{
     font-family: 'Quicksand', sans-serif!important;
}
.w-container{
    margin: 0 0%!important;
}
.line-height-lg{
    line-height: 26px;
}

/* 15 inch */
@media screen and (min-width: 1281px) and (max-width: 1366px) { 
    .w-container{
    margin: 0 4%!important;
}
}
/* 19 inch */
@media screen and (min-width: 1367px) and (max-width: 1440px) { 
    .w-container{
    margin: 0 6%!important;
}
}
/* 20 inch */
@media screen and (min-width: 1441px) and (max-width: 1600px) { 
    .w-container{
    margin: 0 9%!important;
}
}
/* 21 inch */
@media screen and (min-width: 1601px) and (max-width: 1680px) { 
    .w-container{
    margin: 0 12%!important;
}
}
/* 22 inch */
@media screen and (min-width: 1681px) and (max-width: 1920px) { 
    .w-container{
    margin: 0 16%!important;
}
}


/* Mobile responsive */
@media only screen and (max-width: 480px) {
.display-2{
    text-align: center!important;
}
.pr-5-xs{
    padding-right: 0px!important;
}
}

</style>
