<!-- Blank Page Template -->
<template>

<div>
      <q-card dark style="width: 900px">
        <q-card-section>
          <div class="text-uppercase text-bold text-h6 q-mb-md">Top News</div>
          <div class="row q-col-gutter-md">
            <div class="col-6">
              <q-card dark class="bg-purple-8">
                <q-img
                  contain
                  src="https://images.pexels.com/photos/1662163/pexels-photo-1662163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                >
                  <div class="absolute-bottom">
                    <div class="text-h6">One Planet, One Earth</div>
                    <div class="row">
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
                </q-img>
              </q-card>
            </div>
            <div class="col-6">
              <q-card dark class="bg-purple-8">
                <q-img
                  contain
                  src="https://images.pexels.com/photos/1662163/pexels-photo-1662163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                >
                  <div class="absolute-bottom">
                    <div class="text-h6">One Planet, One Earth</div>
                    <div class="row">
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
                </q-img>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div class="row q-col-gutter-lg bg-grey-10 text-white" style="width: 900px">
        <div v-for="i in 4" class="col-6 position-relative">
          <q-item class="q-pa-none q-mb-md">
            <q-item-section avatar>
              <q-avatar square size="100px">
                <img src="https://picsum.photos/300/300" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <div class="text-bold text-h6">Youtube as real Television</div>
              <div class="q-my-sm text-grey-6">
                <div class="row items-center justify-between">
                  <div class="bg-red text-h6 text-white q-pa-sm">Music</div>
                  <div>
                    <q-icon name="schedule" />
                    <span>20 Jan 2021</span>
                  </div>
                </div>
              </div>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>