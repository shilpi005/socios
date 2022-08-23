<template>
        <div class="  justify-content-center  mx-auto" style="padding-top: 56px;max-width:600px;box-shadow: 0 1px 5px #f2f2f2;padding:10px">
            <div class=" p-3 mt-3 rounded border shadow">
                 <div class="d-flex" type="button">
                    <div class="p-1">
                        <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" class="rounded-circle me-2" style="width:30px;height:30px;object-fit:cover;"/>     
                    </div>
                   
                    <input type="number"  class="form-control rounded-pill border-0" placeholder="what's on your mind?" style="background-color: #e2e2e2;" />
                    <button class="btn btn-primary border-0 rounded mx-4">Add</button>
                   
                    
                 </div>

            </div>
                <div class="mt-4 rounded" style="min-height:100px;box-shadow:1px 2px 5px #e2e2e2;background-color: #f7f7f7;">
                   <div class="p-1" style="left:0;text-align:left;">
                        <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" class="rounded-circle me-2" style="width:30px;height:30px;object-fit:cover;"/>     
                        <p class="mt-2">Hello World!</p>
                    </div>
                </div>

                <div class="mt-4 rounded" style="min-height:100px;box-shadow:1px 2px 5px #e2e2e2;background-color: #f7f7f7;">
                   <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" class="rounded-circle me-2" style="width:30px;height:30px;object-fit:cover;"/>
                            <p class="m-0 fw-bold">john</p>
                    </div>
                     
                        <fa icon="ellipsis-h" style="margin-right:5px"/>
                    </div>
                    <div class="mt-3">
                        <div>
                            <p style="text-align:left">loremipsumloremipsumloremipsum loremipsum loremipsumloremipsum loremipsumloremipsum</p>
                            <img src="https://source.unsplash.com/random/14" alt="image" class="img-fluid" />
                        </div>

                        <div class="d-flex justify-content-around">
                            <div class="d-flex align-items-center justify-content-center dropdown-item rounded text-muted p-1"
                            type="button">
                            <fa icon="thumbs-up" class="me-3" />
                            <p class="m-0">Like</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-center dropdown-item rounded text-muted p-1"
                            type="button">
                            <fa icon="comment-alt" class="me-3" />
                            <p class="m-0">comment</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
</template>

<script>


export default{
name:'TimeLine',

}
</script>
