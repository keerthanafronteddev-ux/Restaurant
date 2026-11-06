<template>
    <div class="bg-image-time">
        <div class="text-xs-center bg-yellow pt-5 pb-5">
                            <div class="text-xs-center">
            <h1 class="display-2 pb-2 pr-3 pl-3 white--text font-weight-medium">Our Timings</h1>
            <h6 class="body-2  pt-3 pb-3 pl-5 white--text pr-5">Find the delicious food on these occusions</h6>
        </div>
            <v-layout row wrap class="pa-3">
                <v-flex xs12 sm3 class="pt-5 pb-5 mb-n-xs">
                    <img src="../../assets/images/Breakfast.png">
                    <h1 class="white--text pt-3 pb-3">Breakfast</h1>
                    <h4 class="white--text">8.00 am 10.00 am</h4>
                    
                </v-flex><v-divider class="connector-dotted"></v-divider>
                <v-flex xs12 sm3 class="pt-5 pb-5">
                    <img src="../../assets/images/Lunch.png">
                    <h1 class="white--text pt-3 pb-3">Lunch</h1>
                    <h4 class="white--text">1.00 am 2.00 am</h4>
                </v-flex>
                <v-flex xs12 sm3 class="pt-5 pb-5">
                    <img src="../../assets/images/Dinner.png">
                    <h1 class="white--text pt-3 pb-3">Dinner</h1>
                    <h4 class="white--text">7.00 am 9.00 am</h4>
                </v-flex>
                <v-flex xs12 sm3 class="pt-5 pb-5">
                    <img src="../../assets/images/Desserts.png">
                    <h1 class="white--text pt-3 pb-3">Dessert</h1>
                    <h4 class="white--text">All Day</h4>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-image-time {
    background: url(../../assets/images/Bg-Time.jpg) !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

.bg-yellow {
    background-color: #e4b95bd9;
}
.mb-n-xs{
    margin-top: -10px;
}
.connector-dotted{
    border-top: 3px solid ;
    border-style: dashed;
    border-color:#333!important;
    width:100px;

}
</style>
