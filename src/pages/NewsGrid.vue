<template>
  <!-- Dark style -->
  <q-page class="q-pa-lg bg-grey-10">
  <div class="q-mb-lg">
        <h5 class="text-white">News Grid Widget</h5>
        <div class="text-white">
        Grid generated using
        <a
          target="blank"
          class="text-white"
          href="https://www.webconxept.com/apps/quasar-grid/#/mapper"
          >Mapper Tool</a
        >
      </div>
        
        <!-- Content -->
        <NewsGrid />

  </div>
</q-page>
</template>

<script>
import NewsGrid from 'components/ui/NewsGrid.vue'
export default {
  components: {
    NewsGrid
  },
  data() {
    return {

    }
  }

}
</script>