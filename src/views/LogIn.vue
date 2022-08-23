<template>
<div class="container d-flex flex-column flex-lg-row justify-content-evenly mt-5 pt-5">
    <div class="text-center text-lg-start mt-lg-5 pt-lg-5">
        <h1 class="text-primary fw-bold">SOCIALS</h1>
        <p class="w-100 mx-auto mx-lg-0">connecting peoples</p>
    </div>
    <div style="max-width: 28rem;width:100%">
      <div class="bg-white shadow rounded p-3 input-group-lg">
        <form>
          <input type="email" class="form-control my-3" placeholder="Email address or phone number" />
          <input type="password" class="form-control my-3" placeholder="password" />
          <button @click="goFeed()" type="submit" class="btn btn-primary w-100 my-3">Login</button>
        </form>
        <p>Don't have an Account? <a type="button" data-bs-toggle="modal" data-bs-target="#createModal" href="/SignUp">Signup</a></p>
      </div>
    </div>
    <SignUp />
   <FooterView />
</div>

</template>
<script>
import FooterView from '../components/FooterView'
import SignUp from './SignUp.vue'
export default {
  name : 'LogIn',
  components:{
    FooterView,
    SignUp
  },
  methods:{
    goFeed(){
        this.$router.push('/FeedView');
    }
  }
};
</script>
