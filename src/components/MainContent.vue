<template>
   <!-- <div class="container-fluid"> -->
    <div class="row justify-content-evenly"  >
        <div class="col-12 col-sm-3 col-md-3 col-lg-3">
            <SideBar />
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <TimeLine />
        </div>
        <div class="col-12 col-sm-3 col-md-3 col-lg-3">
           <ChatBar />
        </div>
      
    </div>

   <!-- </div>  -->
</template>

<script>
import SideBar from './SideBar.vue'   
import TimeLine from './TimeLine.vue'   
import ChatBar from './ChatBar.vue'   
export default{
    name:'MainContent',
    components:{
    SideBar,
    TimeLine,
    ChatBar,
}
};
</script>
