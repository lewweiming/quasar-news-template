<!-- PreviewLayout -->
<template>
  <q-layout view="lHh lpR lFf">
    <q-header class="bg-grey-10 text-white">
      <q-toolbar>

        <q-toolbar-title>
          <q-btn to="/" no-caps label="Quasar News Template" />
        </q-toolbar-title>

        <q-btn to="/" no-caps label="Exit preview" icon="exit_to_app" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      
      <q-scroll-area class="bg-grey-10" style="height: calc(100vh - 50px);">
      <router-view />
      </q-scroll-area>

    </q-page-container>
  </q-layout>
</template>

<script>

export default {

  components: {

  },
  data () {
    return {

    }
  }
}
</script>