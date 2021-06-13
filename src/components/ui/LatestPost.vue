<template>

      <q-card flat class="bg-grey-10 text-white" style="max-width: 400px;">
        <q-card-section>
          <div class="text-uppercase text-bold text-h6">Latest Posts</div>
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item v-for="i in 3" class="q-pa-none q-mb-md">
            <q-item-section avatar>
                <q-avatar square size="xl">
                    <img src="https://picsum.photos/300/300">
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
            </q-item-section>
        </q-item>
          </q-list>
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