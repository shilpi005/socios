<template>
 <!-- <div class="col-12 col-lg-3 col-md-3"> -->
    <div class="d-none d-sm-block d-xxl-block h-100 fixed-top overflow-hidden scrollbar" style="max-width:360px;width:100%;z-index:4;">
        <ul class="navbar-nav mt-4 ms-3 d-flex flex-column pd-5 mb-5" style="padding-top:56px">
            <li class="dropdown-item p-1 rounded">
                <a href=# class="text-decoration-none text-dark d-flex align-items-center">
                        <div class="p=2">
                            <img src="http://source.unsplash.com/collection/happy-people" alt="avatar" class="rounded-circle me-2"
                            style="width:30px;height: 30px;object-fit:cover;"/>

                        </div>
                        <div>
                            <p class="m-0">John</p>
                        </div>
                </a>
            </li>

            <li class="dropdown-item p-1 rounded">
                <a href=# class="text-decoration-none text-dark d-flex align-items-center">
                        <div class="p=2">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" alt="avatar" class="rounded-circle me-2"
                            style="width:30px;height: 30px;object-fit:cover;"/>

                        </div>
                        <div>
                            <p class="m-0">Friends</p>
                        </div>
                </a>
            </li>

            <li class="dropdown-item p-1">
                <a href="#" class=" d-flex align-items-center justify-content-between text-decoration-none text-dark "
                >
                  <div class="d-flex align-items-center justify-content-evenly">
                    <div class="p-2">
                      <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png"
                        alt="from fb" class="rounded-circle" style="width: 38px; height: 38px; object-fit: cover"/>
                    </div>
                    <div>
                      <p class="m-0">Pages</p>
                    </div>
                  </div>
                </a>
              </li>
             <li class="dropdown-item p-1">
                <a href="#" class="  d-flex align-items-center  justify-content-between text-decoration-none text-dark " >
                  <div class="d-flex align-items-center justify-content-evenly">
                    <div class="p-2">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"
                        alt="from fb"
                        class="rounded-circle"
                        style="width: 38px; height: 38px; object-fit: cover"
                      />
                    </div>
                    <div>
                      <p class="m-0">Marketplace</p>
                    </div>
                  </div>
                </a>
              </li>
             <li class="dropdown-item p-1">
                <a href="#" class=" d-flex align-items-center
                    justify-content-between text-decoration-none text-dark ">
                  <div class="d-flex align-items-center justify-content-evenly">
                    <div class="p-2">
                      <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"
                        alt="from fb" class="rounded-circle" style="width: 38px; height: 38px; object-fit: cover" />
                    </div>
                    <div>
                      <p class="m-0">Watch</p>
                      <i
                        class="fas fa-circle text-primary"
                        style="font-size: 0.5rem !important"
                      ></i>
                      <span class="text-primary"> 9+ new videos</span>
                    </div>
                  </div>
                </a>
              </li>

              <li class="p-1" type="button">
                <div id="accordionExample">
                  <div>
                    <div>
                       <div class="d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" >
                         <div class="p-2">
                           <fa icon="chevron-down" class="rounded-circle p-2" style="background-color: #d5d5d5 !important" ></fa>
                         </div>
                          <div>
                             <p class="m-0">See More</p>
                          </div>
                       </div>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                      
                        <!-- item 1 -->
                        <div  class=" d-flex align-items-center dropdown-item p-0 m-0 " >  
                            <div class="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                                 alt="from fb" class="rounded-circle" style=" width: 38px; height: 38px; object-fit: cover; " />
                            </div>
                            <div>
                               <p class="m-0">Campus</p>
                             </div>
                          </div>
                         <div  class=" d-flex align-items-center dropdown-item p-0 m-0 " >  
                            <div class="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png"
                                 alt="from fb" class="rounded-circle" style=" width: 38px; height: 38px; object-fit: cover; " />
                            </div>
                            <div>
                               <p class="m-0">Event</p>
                             </div>
                          </div>
                            <div  class=" d-flex align-items-center dropdown-item p-0 m-0 " >  
                            <div class="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hLkEFzsCyXC.png"
                                 alt="from fb" class="rounded-circle" style=" width: 38px; height: 38px; object-fit: cover; " />
                            </div>
                            <div>
                               <p class="m-0">NewsFeed</p>
                             </div>
                          </div>
                        
                      </div>
                    </div>
                  </div>
                
              </li>
              <!-- <hr class="m-0" /> -->
              <div class=" d-flex justify-content-between align-items-center  mt-2 text-muted edit-heading " >
                 <h4 class="m-0 pointer">Your Shorcuts</h4>
                  <!-- <p class="m-0 text-primary me-3 pointer edit-button"
                     type="button" data-bs-toggle="modal" data-bs-target="#shortCutModal" > Edit </p> -->
                   <!-- modal -->

                     <div class="modal fade" id="shortCutModal" tabindex="-1" aria-labelledby="shortCutModalLabel" aria-hidden="true" data-bs-backdrop="false" >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <!-- head -->
                            <div class="modal-header align-items-center">
                                <h5 class="text-dark text-center w-100 m-0"
                                  id="exampleModalLabel" > Edit Your ShortCuts
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                            </div>
                               <!-- body -->
                            <div class="modal-body">
                                  <p class="text-muted">
                                    Shortcuts provide quick access to what you do most on
                                    Facebook. Your Shortcuts are sorted automatically, but
                                    you can pin something so it's always shown at the top
                                    or hide it from the list.
                                  </p>
                                  <!-- Search -->
                                  <div class="p-1">
                                    <div class=" input-group-text bg-gray border-0 rounded-pill " style="min-height: 40px; min-width: 230px">
                                      <i class="fas fa-search me-2 text-muted"></i>
                                      <input type="text" class="form-control rounded-pill border-0 bg-gray" placeholder="Search your Pages, groups, games, and events" />
                                    </div>
                                  </div>
                                  <!-- short-1 -->
                                  <li class="my-1 p-1">
                                    <div class=" d-flex  align-items-center justify-content-between text-decoration-none text-dark">
                                       <div class="d-flex align-items-center justify-content-evenly">
                                          <div class="p-2">
                                            <img src="https://source.unsplash.com/random/1" alt="from fb" class=" rounded border border-1 border-secondary " style=" width: 38px; height: 38px; object-fit: cover; " />
                                          </div>
                                          <div>
                                             <p class="m-0">Lorem Ipsum</p>
                                           </div>
                                       </div>
                                       <select class="form-select w-50 border-0 bg-gray" aria-label="Default select example" >
                                          <option selected value="1"> Short Automatically </option>
                                          <option value="2">Pin To Top</option>
                                          <option value="3">Hide</option>
                                       </select>
                                     </div>
                                  </li>
                        <!-- short-2 -->
                                  <li class="my-1 p-1">
                                    <div class=" d-flex align-items-center justify-content-between text-decoration-none text-dark " >
                                      <div class=" d-flex align-items-center justify-content-evenly " >
                                        <div class="p-2">
                                          <img src="https://source.unsplash.com/random/2"
                                            alt="from fb" class="rounded border border-1 border-secondary " style=" width: 38px; height: 38px; object-fit: cover; " />
                                        </div>
                                        <div>
                                          <p class="m-0">Lorem Ipsum</p>
                                        </div>
                                      </div>
                                      <select class="form-select w-50 border-0 bg-gray" aria-label="Default select example" >
                                        <option selected value="1"> Short Automatically </option>
                                        <option value="2">Pin To Top</option>
                                        <option value="3">Hide</option>
                                      </select>
                                    </div>
                                  </li>
                        <!-- short-3 -->
                                  <li class="my-1 p-1">
                                    <div class="d-flex align-items-center justify-content-between text-decoration-none text-dark " >
                                      <div class=" d-flex align-items-center justify-content-evenly" >
                                        <div class="p-2">
                                          <img src="https://source.unsplash.com/random/3" alt="from fb" class=" rounded border border-1 border-secondary " style=" width: 38px; height: 38px; object-fit: cover; " />
                                        </div>
                                        <div>
                                          <p class="m-0">Lorem Ipsum</p>
                                        </div>
                                      </div>
                                      <select class="form-select w-50 border-0 bg-gray" aria-label="Default select example" >
                                        <option selected value="1"> Short Automatically </option>
                                        <option value="2">Pin To Top</option>
                                        <option value="3">Hide</option>
                                      </select>
                                    </div>
                                  </li>
                        <!-- end -->
                      </div>

                      </div>
                      </div>
                      </div>
                      
                      </div>
                      <li class="dropdown-item p-1 ">
                          <a href=# class="text-decoration-none text-dark d-flex align-items-center">
                           <div class="p=2">
                               <img src="https://source.unsplash.com/random/1" alt="avatar" class=" me-2"
                                 style="width:30px;height: 30px;object-fit:cover;"/>

                            </div>
                            <div>
                              <p class="m-0">Lorem Ipsum</p>
                            </div>
                          </a>
                       </li>
                       <li class="dropdown-item p-1">
                          <a href=# class="text-decoration-none text-dark d-flex align-items-center">
                           <div class="p=2">
                               <img src="https://source.unsplash.com/random/1" alt="avatar" class=" me-2"
                                 style="width:30px;height: 30px;object-fit:cover;"/>

                            </div>
                            <div>
                              <p class="m-0">Lorem Ipsum</p>
                            </div>
                          </a>
                       </li>
                       <li class="dropdown-item p-1">
                          <a href=# class="text-decoration-none text-dark d-flex align-items-center">
                           <div class="p=2">
                               <img src="https://source.unsplash.com/random/1" alt="avatar" class=" me-2"
                                 style="width:30px;height: 30px;object-fit:cover;"/>

                            </div>
                            <div>
                              <p class="m-0">Lorem Ipsum</p>
                            </div>
                          </a>
                       </li>
                       <li class="p-1" type="button">
                <div id="accordionExample">
                  <div>
                    <div>
                       <div class="d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#shortAccordion" aria-expanded="false" aria-controls="shortAccordion" >
                         <div class="p-2">
                           <fa icon="chevron-down" class="rounded-circle p-2" style="background-color: #d5d5d5 !important" ></fa>
                         </div>
                          <div>
                             <p class="m-0">See More</p>
                          </div>
                       </div>
                    </div>
                    <div id="shortAccordion" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                      
                        <!-- item 1 -->
                        <div  class=" d-flex align-items-center dropdown-item p-0 m-0 " >  
                            <div class="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Y7r38CcFEw5.png"
                                 alt="from fb" class="rounded-circle" style=" width: 38px; height: 38px; object-fit: cover; " />
                            </div>
                            <div>
                               <p class="m-0">Campus</p>
                             </div>
                          </div>
                         <div  class=" d-flex align-items-center dropdown-item p-0 m-0 " >  
                            <div class="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hLkEFzsCyXC.png"
                                 alt="Eve" class="rounded-circle" style=" width: 38px; height: 38px; object-fit: cover; " />
                            </div>
                            <div>
                               <p class="m-0">Event</p>
                             </div>
                          </div>
                            <div  class=" d-flex align-items-center dropdown-item p-0 m-0 " >  
                            <div class="p-2">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hLkEFzsCyXC.png"
                                 alt="from fb" class="rounded-circle" style=" width: 38px; height: 38px; object-fit: cover; " />
                            </div>
                            <div>
                               <p class="m-0">NewsFeed</p>
                             </div>
                          </div>
                        
                      </div>
                    </div>
                  </div>
                
              </li>
        </ul>
          <div class="p-2 mt-5">
              <p class="text-muted fs-7">
                Privacy &#8226; Terms &#8226; Advertising &#8226; Ad Choices
                &#8226; Cookies &#8226; Socials © 2022
              </p>
            </div>
    </div>
 <!-- </div> -->
              

</template>

<script>
export default{
  name:'SideBar',
}
</script>

<style>
.scrollbar:hover{
overflow:auto !important;
}
</style>
