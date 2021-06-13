
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'tweets', component: () => import('pages/Tweets.vue') },
      { path: 'latest-posts', component: () => import('pages/LatestPost.vue') },
      { path: 'brand-card', component: () => import('pages/BrandCard.vue') },
      { path: 'footer', component: () => import('pages/Footer.vue') },
      { path: 'videos', component: () => import('pages/Videos.vue') },
      { path: 'image-gallery', component: () => import('pages/ImageGallery.vue') },
      { path: 'reviews', component: () => import('pages/Reviews.vue') },
      { path: 'slider', component: () => import('pages/Slider.vue') },
      { path: 'music-news', component: () => import('pages/MusicNews.vue') },
      { path: 'top-news', component: () => import('pages/TopNews.vue') },
      { path: 'news-grid', component: () => import('pages/NewsGrid.vue') }
    ]
  },

  {
    path: '/preview',
    component: () => import('layouts/PreviewLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Preview.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
