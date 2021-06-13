<!-- Blank Page Template -->
<template>
  <q-card dark style="width: 800px; height: 300px">
    <q-card-section>
      <div class="text-h5 q-mb-lg">Tourism - Gallery</div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-img class="full-height" src="https://picsum.photos/500/200" />
        </div>
        <div class="col-6">
          <div class="row q-gutter-md">
            <img v-for="i in 8" src="https://picsum.photos/80/80" />
          </div>
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