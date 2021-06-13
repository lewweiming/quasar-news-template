
<!-- LeftPanel -->
<template>
  <q-list separator class="bg-grey-10 text-grey-2 full-height">
    <q-item-label header> Explore News Template UI </q-item-label>
    <q-item :to="i.route" v-for="i in items" clickable>
      <q-item-section avatar>
        <q-icon name="chevron_right" />
      </q-item-section>
      <q-item-section>
        {{ i.label }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
const items = [
{
    label: "Tweets",
    route: 'tweets'
  },
  {
    label: "Latest Posts",
    route: 'latest-posts'
  },
  {
    label: "Brand Card",
    route: 'brand-card'
  },
  {
    label: "Footer",
    route: 'footer'
  },
  {
    label: "Videos",
    route: 'videos'
  },
  {
    label: "Image Gallery",
    route: 'image-gallery'
  },
  {
    label: "Reviews",
    route: 'reviews'
  },
  {
    label: "Slider",
    route: 'slider'
  },
  {
    label: "Music News",
    route: 'music-news'
  },
  {
    label: "Top News",
    route: 'top-news'
  },
  {
    label: "News Grid",
    route: 'news-grid'
  }
];

export default {
  data() {
    return {
      items
    };
  },
};
</script>