<template>

         <q-card dark style="width: 900px;">
    
    <q-card-section>
     <div class="text-uppercase text-bold text-h6">Music News</div>
     <div class="row q-col-gutter-lg q-my-lg">
         <div class="col-4">
             <q-img src="https://picsum.photos/400/300" />
         </div>
         <div class="col-8">
             <div class="text-h5">Pizzas will be delivered by Drones</div>

                  <div class="q-mt-sm row no-wrap justify-between items-center">

                    <div class="row q-gutter-md">
                    <div>
                        <q-icon name="person" />
                        <span>John Smith</span>
                      </div>
                      
                      <div>
                        <q-icon name="schedule" />
                        <span>20 Jan 2021</span>
                      </div>

                      <div>
                        <q-icon name="chat_bubble_outline" />
                        <span>21 comments</span>
                      </div>
                    </div>
                  </div>
                  <div class="q-mt-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
         </div>
     </div>
    </q-card-section>
    
    <q-card-section>
        <div class="row q-col-gutter-lg">
            <div v-for="i in 4" class="col-6">
        <q-item class="q-pa-none q-mb-md">
                  <q-item-section avatar>
                    <q-avatar square size="100px">
                      <img src="https://picsum.photos/300/300" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div class="text-bold text-h6">Youtube as real Television</div>
                    <div class="q-my-sm text-grey-6 text-caption">
                      <div class="row items-center">
                        <div>
                          <q-icon name="schedule" />
                          <span>20 Jan 2021</span>
                        </div>

                        <div class="q-ml-lg">
                          <q-icon name="chat_bubble_outline" />
                          <span>21 comments</span>
                        </div>
                      </div>
                    </div>
                    <div class="q-mt-sm ellipsis-2-lines">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </q-item-section>
                </q-item>
                </div>
                </div>
    </q-card-section>
  </q-card>
 
</template>

<script>
export default {

  data() {
    return {

    }
  }

}
</script>