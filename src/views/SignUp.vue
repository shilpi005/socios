<template>
            <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <!-- head -->
                <div class="modal-header">
                  <div>
                    <h2 class="modal-title" id="exampleModalLabel">Sign Up</h2>
                    <span class="text-muted fs-7">It's quick and easy.</span>
                  </div>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- body -->
                <div class="modal-body">
                  <form>
            <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-9">
            <input type="Text" class="form-control" v-model="name">
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Contact No.</label>
            <div class="col-sm-9">
            <input type="number" class="form-control" v-model="contact">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
            <input type="email" class="form-control" id="inputEmail3" v-model="email">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
            <div class="col-sm-9">
            <input type="password" class="form-control" id="inputPassword3" v-model="password">
            </div>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="addUser()">SignUp</button>

         </form>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import axios from 'axios'
export default{
   name: 'SignUp',
   data() {
    return{
        name:'',
        contact:'',
        email:'',
        password:'',

    }
   },
   methods:{
     async   addUser(){
        let result = await axios.post("http://localhost:3000/users" , {
                name:this.name,
                contact:this.contact,
                email:this.email,
                password:this.password

            })
                console.log(result);
        }
   },
}
</script>
