<template>

      <div class="text-white" style="width: 800px;">
        <vue-glide>
          <vue-glide-slide v-for="i in 10" :key="i">
            <q-card dark style="width: 300px" class="q-pa-md">
              <q-img src="https://picsum.photos/300/200" />
              <q-card-section>
                <div class="text-h6">Pizzas will be delivered by Drones</div>

                <div class="q-mt-md ellipsis-3-lines">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>

                <div class="row q-mt-md text-grey">
                  <div>
                    <q-icon name="schedule" />
                    <span>20 Jan 2021</span>
                  </div>

                  <div class="q-ml-lg">
                    <q-icon name="chat_bubble_outline" />
                    <span>21 comments</span>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </vue-glide-slide>
          <template slot="control">
            <button data-glide-dir="<">prev</button>
            <button data-glide-dir=">">next</button>
          </template>
        </vue-glide>
      </div>

</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>