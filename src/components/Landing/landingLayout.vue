<template>
<div>
    <Nav-bar :cartTotal="total" :cartCount="qantity"></Nav-bar>
    <Carou-sel></Carou-sel>
    <Wel-come></Wel-come>
    <Today-dishes></Today-dishes>
    <Special-menu :cartTotal="total" :cartCount="qantity" @totalCart="total = $event"></Special-menu>
    <Chefs></Chefs>
    <Time></Time>
    <blog></blog>
</div>
</template>

<script>
import navBar from '../navBar.vue'
import carousel from './carousel.vue'
import welcome from './welcome.vue'
import TodayDishes from './TodayDishes.vue'
import SpecialMenu from './SpecialMenu.vue'
import Chefs from './Chefs'
import Time from './Time'
import Blog from './Blog'


export default {
    data(){
        return{
            total:0,
            qantity:[]
        
    }
    },
    components:{
        "Nav-bar":navBar,
        "Carou-sel":carousel,
        "Wel-come":welcome,
        "Today-dishes":TodayDishes,
        "Special-menu":SpecialMenu,
        "Chefs":Chefs,
        "Time":Time,
        "blog":Blog
    }

}
</script>

<style>

</style>
