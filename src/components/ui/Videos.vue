<!-- Blank Page Template -->
<template>

      <q-card dark style="width: 500px; height: 300px">
        <q-card-section>
          <div class="text-h5 q-mb-lg">Technology - Videos</div>
          <q-video
          :ratio="3 / 1"
          src="https://www.youtube.com/embed/h45V1RXrKqE"
        />
        </q-card-section>

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-3">
              <q-img src="http://img.youtube.com/vi/h45V1RXrKqE/0.jpg" />
            </div>
            <div class="col-3">
              <q-img src="http://img.youtube.com/vi/h45V1RXrKqE/0.jpg" />
            </div>
            <div class="col-3">
              <q-img src="http://img.youtube.com/vi/h45V1RXrKqE/0.jpg" />
            </div>
            <div class="col-3">
              <q-img src="http://img.youtube.com/vi/h45V1RXrKqE/0.jpg" />
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