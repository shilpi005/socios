<template>
 <div class="row align-items-center shadow" style="position:relative;z-index:5;background-color:#fff">
    <div class="col d-flex align-item-center">
      <fa :icon="['fab', 'scribd']"  class="text-primary" style="font-size:3rem"/>
        <div class="input-group ms-2">
            <span class="input-groud-prepand d-none d-lg-black">
                <div class="input-group-text bg-grey border-0 rounded-pill" style="min-height:40px; min-width:230px;background-color:#e5e5e5">
                    <fa icon="magnifying-glass" />
                    <p>Search</p>
                </div>
            </span>
        </div>
    </div>
    <div class="col d-none d-sm-flex d-lg-flex justify-content-center">
        <div class="mx-4 nav__btn nav__btn-active">
            <button class="btn px-4">
              <fa icon="home" class="text-muted"/>  
            </button>
        </div>
        <div class="mx-4 nav__btn">
            <button class="btn px-4">
              <fa icon="store" class="text-muted"/>  
            </button>
        </div>
        <div class="mx-4 nav__btn">
            <button type="button" class="btn px-4">
            <fa icon="users" class="position-relative text-muted ">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
                <span class="visually-hidden"></span>
            </span>
            </fa>
            
            </button>
        </div>
        <div class="mx-4 nav__btn">
            <button class="btn px-4">
              <fa icon="gamepad" class="text-muted"/>  
            </button>
        </div> 
    </div>
    <div class="col d-flex align-items-center justify-content-end">
    <div class=" d-xl-flex- align-items-center justify-content-center">
        <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" class="rounded-circle me-2" style="width:30px;height:30px;object-fit:cover;"/>
        <p class="m-0" style="font-size:15px;">John</p>
    </div>
    <div class="d-flex align-items-center justify-content-center p-1 mx-2 bg-gray rounded-circle" 
    style="width:30px;height:30px;object-fit:cover;background-color: #e5e5e5;" type="button" id="mainMenu" data-bs-toggle="dropdown" aria-expanded="false">
        <fa icon="ellipsis" />
    </div>
  
  <ul class="dropdown-menu border-0 shadow p-3 overflow-auto" aria-labelledby="mainMenu" style="width:23em;max-height:600px;">
    <div>
        <li class="p-1" mx-2>
            <h2>Create</h2>
        </li>
        <li class="my-2 p-1">
            <a href="#" class="text-decoration-none text-dark d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3" style="width:38px;height:38px">
                    <fa icon="edit" />
                </div>
                <div>
                    <p class="m-0">Post</p>
                </div>
            </a>
        </li>
        <li class="my-2 p-1">
            <a href="#" class="text-decoration-none text-dark d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3" style="width:38px;height:38px">
                    <fa icon="video" />
                </div>
                <div>
                    <p class="m-0">Video</p>
                </div>
            </a>
        </li>
        <li class="my-2 p-1">
            <a href="#" class="text-decoration-none text-dark d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3" style="width:38px;height:38px">
                    <fa icon="flag" />
                </div>
                <div>
                    <p class="m-0">Page</p>
                </div>
            </a>
        </li>
        <li class="my-2 p-1">
            <a href="#" class="text-decoration-none text-dark d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-center rounded-circle bg-gray p-1 me-3" style="width:38px;height:38px">
                    <fa icon="users" />
                </div>
                <div>
                    <p class="m-0">Group</p>
                </div>
            </a>
        </li>
    </div>
  </ul>
     
        <div class=" rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2" style="width: 38px; height: 38px;background-color: #e5e5e5;"
              type="button"  id="chatMenu" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" >
              <fa icon="comment" />
            </div>
            <!-- chat  dd -->
            <ul
              class="dropdown-menu border-0 shadow p-3 overflow-auto"
              aria-labelledby="chatMenu"
              style="width: 23em; max-height: 600px"
            >
            <li class="p-1">
                <div class="d-flex justify-content-between">
                  <h2>Message</h2>
                  
                <div>
                    <fa icon="ellipsis" class="text-muted mx-2" type="button" data-bs-toggle="dropdown"></fa>
                    <fa icon="expand-arrows" class="text-muted mx-2"></fa>
                    <fa icon="edit" class="text-muted mx-2"></fa>
                </div>
            </div>
        </li>
        </ul>

         <div
              class=" rounded-circle p-1 d-flex align-items-center justify-content-center mx-2"
               style="width: 38px; height: 38px;background-color: #e5e5e5;" type="button" id="notMenu" data-bs-toggle="dropdown" 
               aria-expanded="false" data-bs-auto-close="outside" >
              <fa icon="bell" />
            </div>
             <div
              class=" rounded-circle p-1 bg-gray d-flex align-items-center justify-content-center mx-2"
               style="width: 38px; height: 38px;background-color: #e5e5e5;" type="button" id="notMenu" data-bs-toggle="dropdown" 
               aria-expanded="false" data-bs-auto-close="outside" >
              <fa icon="caret-down" />
            </div>
</div>
    </div>

</template>

<script>


export default{
    name:'NavBar',
}
</script>

<style scoped>
.nav__btn button:hover{
    background: #f0f2f5 !important;
}
.nav__btn button:hover fa{
    color: #0d6efd !important;
}
.nav__btn-active fa{
    color: #0d6efd !important;
}
.nav__btn-active{
    position:relative;
}
.nav__btn-active:before {
    content: '';
     position:absolute;
     bottom:-4.5px;
     left:0;
     transform: translateY(4.5px);
     width:100%;
     height:3px;
     border-bottom: 3px solid #0d6efd !important;
     }
</style>
