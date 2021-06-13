<template>

      <q-card flat class="bg-grey-10 text-white" style="max-width: 400px;">
        <q-card-section>
          <div class="text-uppercase text-bold text-h6">Latest Tweets</div>
        </q-card-section>

        <q-card-section>
          <q-list>
            <q-item>
              <span class="text-grey q-mr-sm">@TrendingTweets</span>This is just
              a simple tweet. Join us at
              <span class="text-teal-3 q-mx-sm">#tweets</span>.
            </q-item>
            <q-item>
              <span class="text-grey q-mr-sm">@TrendingTweets</span>This is just
              a simple tweet. Join us at
              <span class="text-teal-3 q-mx-sm">#tweets</span>.
            </q-item>
            <q-item>
              <span class="text-grey q-mr-sm">@TrendingTweets</span>This is just
              a simple tweet. Join us at
              <span class="text-teal-3 q-mx-sm">#tweets</span>.
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            no-caps
            icon="more"
            class="text-uppercase text-grey text-bold"
            label="Read all tweets"
          />
        </q-card-actions>
      </q-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>