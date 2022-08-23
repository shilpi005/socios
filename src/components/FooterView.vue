<template>
    <footer class="bg-white p-4 text-muted">
        <div class="container">
            <div class="d-flex flex-wrap">
               <p class="mx-2 mb-0">English us</p> 
            </div>
            <hr />
            <div class="d-flex flex-wrap">
               <p class="mx-2 mb-0">SignUp</p>
               <p class="mx-2 mb-0">LogIn</p>
               <p class="mx-2 mb-0">Messenger</p>
                <p class="mx-2 mb-0">SocialLite</p>
                   
            </div>
            <div class="mt-4 mx-2">
                <p>Socials &copy; 2022</p>
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterView',
}
</script>

<style scoped>
@media (min-width:62em ){
    footer {
        position:  fixed;
        bottom: 0;
        width: 100%;
    }
}
</style>
