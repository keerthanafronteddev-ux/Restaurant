<template>
    <div class="bg-image-special">
        <div class="text-xs-center">
            <h1 class="display-2 pt-5 pb-2 pr-3 pl-3 font-weight-medium">Our Special Menu</h1>
            <h6 class="body-2  pt-3 pb-5 pl-5 pr-5">The role of a good cook ware in the preparation of a sumptuous meal
                cannot be over emphasized then one consider white bread.</h6>
        </div>
        <div class="pl-5 pr-5 w-container">
            <v-tabs v-model="active" light>
                <v-tab>
                    ALL
                </v-tab>
                <v-tab>
                    BREAKFAST
                </v-tab>
                <v-tab>
                    DESSERT
                </v-tab>
                <v-tab>
                    DINNER
                </v-tab>
                <v-tab>
                    FRESH FOOD
                </v-tab>
                <v-tab>
                    LUNCH
                </v-tab>
                <!-- All -->
                <v-tab-item class="width-xl pt-5">
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4 pb-5" v-for="item in menu" :key="item.id">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img :src="item.image" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>{{item.name}}<span class="pull-right text-yellow">${{item.price}}</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">{{item.description}}</div>
                                         <v-btn round color="primary" class="ml-0 font-weight-bold caption pl-3 pr-3" @click="addToCart(item)" small dark>Add to cart</v-btn>
                                    </div>
                                    <!-- <span>{{item.quantity}}</span> -->
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <!-- <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-3.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex> -->
                    </v-layout>
                    
                    <!-- <h5 v-for="item in cartCount" :key="item.id" >${{item.price}} x {{item.quantity}} <span>{{item.title}}</span> </h5>Total:{{cartTotal}}  -->
                    <!-- <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-5.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-1.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout> -->
                </v-tab-item>
                <!-- All -->

                <!-- BREAKFAST -->
                <v-tab-item class="width-xl pt-5">
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-3.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-5.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-tab-item>
                 <!-- BREAKFAST -->

                 <!-- DESSERT -->
                <v-tab-item class="width-xl pt-5">
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-3.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-5.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-1.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-tab-item>
                  <!-- DESSERT -->

                  <!-- DINNER -->
                <v-tab-item class="width-xl pt-5">
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-3.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-5.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-tab-item>
                 <!-- DINNER -->

                 <!-- FRESH FOOD -->
                <v-tab-item class="width-xl pt-5">
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-3.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-5.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-1.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-tab-item>
                <!-- FRESH FOOD -->

                <!-- LUNCH -->
                <v-tab-item class="width-xl pt-5">
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-3.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="pb-5">
                        <v-flex xs12 sm6 class="pr-4">
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-5.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div class="pb-xs-5">Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-layout row wrap>
                                <v-flex xs12 sm3>
                                    <v-avatar class="avatar-sm mb-3" data-aos-once="true" data-aos="zoom-out" data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <img src="../../assets/images/Dish-2.jpg" alt="John">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm9>
                                    <div>
                                        <h2>SURMAI CHILLI<span class="pull-right text-yellow">$ 15.00</span></h2>
                                        <v-divider class="mt-3 mb-3 border-dotted" light></v-divider>
                                        <div>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</div>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-tab-item>
                 <!-- LUNCH -->
            </v-tabs>
        </div>
        <div class="text-xs-left pb-5 text-xs-center">
            <v-btn round color="primary" class="ml-0 font-weight-bold" large dark>EXPLORE FULL MENU</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props:['cartTotal','cartCount'],
    // props:{
    //     cartTotal:{
    //         type:Number
    //     },
    //     cartCount:{
    //         type:Array
    //     }
    // },
    data(){ 
        return{
            total:0,
            // price:null,
            menu:[
                {
                    id:'1',
                    image:"https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-dinner-fish-46239.jpg&fm=jpg",
                    name:"SURMAI",
                    price:15,
                    description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames"

                },
                 {
                    id:'2',
                    image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=blur-close-up-dairy-product-376464.jpg&fm=jpg",
                    name:"CHILLI",
                    price:15,
                    description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames"

                },
                 {
                    id:'3',
                    image:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg",
                    name:"French Fries",
                    price:25,
                    description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames"

                },
                {
                    id:'4',
                    image:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg",
                    name:"SURMAI CHILLI",
                    price:25,
                    description:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames"

                }
            ],
            // cartCount:[],
        }
    },
   
    
    methods:{
        addToCart(item){
            // debugger;
            this.cartTotal += item.price;
            var found= false;
            // this.cart.push({
            //      id: item.id,
            //      title:item.name,
            //      price:item.price,
            //      quantity:1

            // });  
            this.$emit('totalCart',this.cartTotal);
            for(var i =0; i<this.cartCount.length; i++){
            if(this.cartCount[i].id === item.id){
                this.cartCount[i].quantity++;
                found=true;
                
            }
            }
            if(!found){
            this.cartCount.push(
                {
                    id: item.id,
                    image:item.image,
                    title:item.name,
                    price:item.price,
                    quantity:1

                }
            );
            console.log(item.total);
            console.log(item.name)
        }
    }
    }

}
</script>

<style>

.bg-image-special{
        background: #f4f2ed url(../../assets/images/SpecialMenu.png) !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}
.display-2{
     font-family: 'Quicksand', sans-serif!important;
}
.avatar-sm{
    height: 100px!important;
    width:100px!important;
}
.pull-right{
    float:right;
}
.border-dotted{
        border-style: dashed;
}

/* Tab customization */
a.v-tabs__item
{
    padding: 13px 30px;
    font-size: 15px;
}
a.v-tabs__item.v-tabs__item--active {
    background: #333;
    color: #FFF;
    border-radius: 25px;
    padding: 13px 30px;
    font-size: 15px;
}

.v-tabs__bar{
    border-radius: 25px;
        box-shadow: 0 0 20px #dddcd9;
    }
.v-tabs{
        margin-left: 19%;
    width: 63%;

}
.v-window-item.width-xl {
    width: 150%;
    margin-left: -25%;
}

.line-height-lg{
    line-height: 26px;
}




@media only screen and (max-width: 480px) {
.display-2{
    text-align: center!important;
}
.pr-5-xs{
    padding-right: 0px!important;
}
.pb-xs-5{
    padding-bottom: 44px;
}
a.v-tabs__item
{
    padding: 13px 20px;
    font-size: 15px;
}
}

</style>
