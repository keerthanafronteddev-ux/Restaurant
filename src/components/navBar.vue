<template>
    <div>
    <el-menu :default-active="activeIndex"  class="el-menu-demo el-container-nav nav-border-bottom" mode="horizontal"
        background-color="#383848" text-color="#fff" active-text-color="#ffd04b" shadow="always">
        <el-menu-item index="1" class="hidden-xs">Home</el-menu-item>
        <el-menu-item index="2" class="hidden-xs">Menu</el-menu-item>
        <el-menu-item index="3" class="hidden-xs">Shop</el-menu-item>
        <el-menu-item index="4" class="hidden-xs">Contact</el-menu-item>
        <el-menu-item index="5" class="p-xl">
            <img src="../assets/images/logo.png" class="logo-container">
        </el-menu-item>
        <el-menu-item index="6" class="hidden-xs"><i class="el-icon-date"></i>Book Table</el-menu-item>
        <el-menu-item index="7" class="hidden-xs" @click="dialogVisible = true"><i class="el-icon-goods"  ></i>Total ${{cartTotal}}</el-menu-item>
        <el-dropdown trigger="click" class="show-xs">
            <el-button type="warning">
                <i class="el-icon-menu"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item>Action 4</el-dropdown-item>
                <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
    <el-dialog
  title="Orders"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <!-- <h5 v-for="item in cartCount" :key="item.id" >${{item.price}} x {{item.quantity}} <span>{{item.title}}</span> </h5> -->
  <el-row v-for="item in cartCount" :key="item.id">
  <!-- <el-col :span="6"> -->
      <!-- <el-avatar>
          <img class="v-avatar mb-3"  height="50" width="50" :src="item.image" alt="John">
      </el-avatar> -->
      <!-- </el-col> -->
      <el-col :span="24">
           <h4 class="mt-2">{{item.title}}<span class="pull-right text-yellow">${{item.price}} x {{item.quantity}}</span></h4>
      </el-col>
  </el-row>
  <span class="pull-right pt-2 pb-2">Total ${{cartTotal}}</span>
  <span slot="footer" class="dialog-footer">
      <el-row>
          <el-col :span="8">&nbsp;</el-col>
              <el-col :span="8">
    <el-button size="small" class="mt-3" round>Confirm</el-button>
          </el-col>
          <el-col :span="8">&nbsp;</el-col>
      </el-row>
    <!-- <el-button type="primary" @click="dialogVisible = false">Confirm</el-button> -->
  </span>
</el-dialog>
    </div>
</template>
 
<script>
  export default {
      props:['cartTotal','cartCount'],
    data() {
      return{
       dialogVisible: false,
        activeIndex: '1'
      };
    },
    // methods:{
    //     cartTotal(updateTotal){
    //         this.total = updateTotal
    //     }
    // }
  }
</script>
<style>
.el-container-nav{

    padding:0 20%!important;
    text-align: center;

}
.el-menu--horizontal {
    position: fixed!important;
    z-index: 1!important;
    border-right: none;
    width:100%;
}
.logo-container{
    max-height: 76px;
}
.nav-border-bottom{
    border-bottom: 4px solid!important;
    border-color: #1c1c2a!important;
}
.el-dropdown.show-xs{
    display:none;
}
li.el-menu-item.is-active{
    border-bottom: 0px!important;
    border-color: #383848!important;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: #383848!important;
    
      transition: all 300ms linear 0ms !important;
     color: #E6A23C!important;
}
.el-menu--horizontal .el-menu-item{
        z-index: 99;
}
.p-xl{
    padding:0 10%!important;
}
.el-menu-item{
    font-weight: 500;
    font-size: 15px!important;
}
.el-dialog__body{
    padding: 10px 20px!important;
}
@media screen and (max-width: 1280px){ 
  .el-container-nav{
    padding:0 14%!important;
    text-align: center;
}
}

@media screen and (min-width: 1281px) and (max-width: 1598px) { 
  .el-container-nav{
    padding:0 16%!important;
    text-align: center;
}

}
@media screen and (min-width: 1599px) and (max-width: 1681px) { 
  .el-container-nav{
    padding:0 20%!important;
    text-align: center;
}


}
@media screen and (min-width: 1920px) {
   .el-container-nav{
    padding:0 26%!important;
    text-align: center;
} 
}

/* Ipad media query */
@media only screen 
and (min-width : 768px) 
and (max-width : 1024px) 
and (orientation : portrait) 
{ 
      .el-container-nav{
    padding:0 0%!important;
    text-align: center;
}
.p-xl{
    padding:0 3%!important;
}
 }

/* Mobile resolution */
 @media only screen 
and (min-width : 768px) 
and (max-width : 1278px) 
and (orientation : landscape) {
          .el-container-nav{
    padding:0 6%!important;
    text-align: center;
}


 }


 /* Mobile phone */
@media only screen and (max-width: 480px) {
    li.el-menu-item.hidden-xs{
        display: none;
    }
.el-menu-item{
    float: none!important;
}
.el-container-nav{
    padding:0 0%!important;
    text-align: center;
}
.el-dropdown.show-xs{
    position: absolute;
    display: block!important;
    right: 10px;
    top:12px;
        z-index: 99;
}
.el-button{
    padding:12px 15px!important;
}
    }


</style>

