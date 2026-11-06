<template>
<el-container class="hooper-list">
    <hooper :itemsToShow="1" :centerMode="false" pagination="no" :settings="hooperSettings" :infiniteScroll="true"
        :autoPlay="false" :playSpeed="3000">
        <slide>
            <transition name="slide" appear>
                <h1 class="hero-text hidden-xs" v-if="show"><b class="font-weight-bold">WE'RE<span class="text-warning"> LABOOM</span></b>
                    RESTAURANT</h1>
            </transition>
            <transition name="slide" appear>
                <h6 class="sub-text hidden-xs" v-if="show">Traditional Turkish Delicacies</h6>
            </transition>
            <transition name="slide" appear>
                <el-button round v-if="show" class="btn-text hidden-xs">EXPLORE NOW</el-button>
            </transition>
            <img src="../../assets/images/slider-home1.jpg" class="img-container height-xs">
        </slide>
        <slide>
        <transition name="slide" appear>
                <h1 class="hero-text hidden-xs" v-if="show"><strong>WE'RE<span class="text-warning"> LABOOM</span></strong>
                    RESTAURANT</h1>
            </transition>
            <transition name="slide" appear>
                <h6 class="sub-text hidden-xs" v-if="show">Traditional Turkish Delicacies</h6>
            </transition>
            <transition name="slide" appear>
                <el-button round v-if="show" class="btn-text font-weight-medium hidden-xs">EXPLORE NOW</el-button>
            </transition>
            <img src="../../assets/images/slider-home2.jpg" class="img-container">
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
</el-container>
</template>

<script>
  import {
      Hooper,
      Slide,
      Navigation as HooperNavigation
  } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
      components: {
          Hooper,
          Slide,
          HooperNavigation
      },
      data() {
          return {
              hooperSettings: {
                  itemsToShow: 1,
                  centerMode: false
              },
              show:true
          }
      }
  }
</script>

<style>
.img-container {
    width: 100%;


}

.hooper-list {
    height: 550px !important;
}

svg.icon.icon-arrowLeft,
svg.icon.icon-arrowRight {
    background: #ffffff91;
    border-radius: 50%;
    padding: 0px;
    /* margin: 55px; */
}

.hooper-next,
.hooper-prev {
    background-color: transparent;
    border: none;
    padding: 4em;
    position: absolute;
    top: 100% !important;
    bottom: 0%;
}

.hooper {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 260px;
}

button.hooper-next,
.hooper-prev {
    outline-color: transparent;
}
.hero-text {
  text-align: center;
  position: absolute;
  font-weight: 300;
  font-size: 60px;
  top: 25%;
  white-space: nowrap;
  margin:0 17%;
  color: white;
}
.sub-text{
      text-align: center;
  position: absolute;
  font-weight: 300;
  font-size: 18px;
  top: 40%;
  white-space: nowrap;
  margin:0 40%;
  color: white;
}
.btn-text{
          text-align: center!important;
  position: absolute;
  font-weight: 500!important;
  font-size: 13px!important;
  top: 50%;
  white-space: nowrap;
  margin:0 43%!important;
  color: white!important;
  background: transparent!important;
}

.el-button{
     border:2px solid!important;
       transition: all 300ms linear 0ms !important;
}
.el-button:focus, .el-button:hover {
    color: #E6A23C!important;
    border:2px solid!important;
    border-color: #E6A23C!important;
    background-color:transparent;
    transition: all 300ms linear 0ms !important;
}

.text-warning{
    color: #E6A23C;
}

.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 4s;
   
}
.slide-enter{
    /* transform: translateY(20px) */
}
.slide-enter-active{
    animation: slide-in 1.5s ease-in-out forwards;
}
@keyframes slide-in{
    from{
        transform: translateY(-20px);
    }
    to{
         transform: translateY(0px);
    }
}

/* 14 inch */
@media screen and (min-width:768px ) and (max-width: 1280px) { 
    .hero-text {
  margin:0 20%;
}
.sub-text{
  margin:0 41%;
}
.btn-text{
  margin:0 44.5%!important;
}

}

/* 15 inch */
@media screen and (min-width: 1281px) and (max-width: 1366px) { 
    .hero-text {
  margin:0 20%;
}
.sub-text{
  margin:0 41%;
}
.btn-text{
  margin:0 44.4%!important;
}

}
/* 19 inch */
@media screen and (min-width: 1367px) and (max-width: 1440px) { 
       .hero-text {
  margin:0 21%;
} 
.sub-text{
  margin:0 40%;
}
.btn-text{
  margin:0 43%!important;
}
}

/* 20 inch */
@media screen and (min-width: 1600px) and (max-width: 1680px) { 
.hero-text {
       top: 17%;
  margin:0 23%;
}
.sub-text{
  top: 30%;
  margin:0 42%;
}
.btn-text{
  top: 40%;
  margin:0 44%!important;
}

}


/* 22 24 inch */
@media screen and (min-width: 1920px) {
.hero-text {
       top: 17%;
  margin:0 28%;
}
.sub-text{
  top: 27%;
  margin:0 44%;
}
.btn-text{
  top: 35%;
  margin:0 46%!important;
}
}

@media screen and (min-width: 2440px) {
.hero-text {
       top: 17%;
  margin:0 28%;
}
.sub-text{
  top: 27%;
  margin:0 44%;
}
.btn-text{
  top: 35%;
  margin:0 45%!important;
}
}


@media only screen and (max-width: 480px) {
    .hidden-xs{
        display: none;
    }
    .hooper {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 180px;
}
    .hooper-list {
    height: 100% !important;
}
.hooper-prev {
    background-color: transparent;
    border: none;
    padding: 4em;
    position: absolute;
    top: 62% !important;
    bottom: 0%;
}
.hooper-next {
    background-color: transparent;
    border: none;
    padding: 4em;
    position: absolute;
    top: 62% !important;
    bottom: 0%;
}
.btn-text {
    margin: 0 35%!important;

}
.height-xs{
    height: 200px!important;
}
}
</style>
