<template>

  <q-card dark style="width: 900px">
    <q-card-section>
      <div class="text-h5 q-mb-lg">Technology - Polls and Reviews</div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-card dark>
            <q-img
              class="full-height"
              src="https://picsum.photos/500/200"
            />
            <q-card-section>
              
              <div class="text-h5">Pizzas will be delivered by Drones</div>

              <div class="q-mt-sm row no-wrap justify-between items-center">
                <q-rating
                  value="5"
                  size="2em"
                  icon="star_border"
                  icon-selected="star"
                />
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
            </q-card-section>
          </q-card>
        </div>
        <div class="col-6">
          <q-list>
            <q-item v-for="i in 3" class="q-pa-none q-mb-md">
              <q-item-section avatar>
                <q-avatar square size="100px">
                  <img src="https://picsum.photos/300/300" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <div class="text-bold">Youtube as real Television</div>
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
                <div class="q-mt-sm">
                  <q-rating
                    value="5"
                    size="1.5em"
                    icon="star_border"
                    icon-selected="star"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>