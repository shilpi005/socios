<template>

<div class="container-fluid" >
    <div>
    <NavBar />
    </div>

    <MainContent />

</div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import MainContent from '../components/MainContent.vue'
export default {
    name: 'FeedView',
    components:{
    NavBar,
    MainContent,
},

}
</script>


