import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HumanIntroView from '@/views/human/HumanIntroView.vue'
import HumanRdvView from '@/views/human/HumanRdvView.vue'
import HumanRdvRaisonView from '@/views/human/HumanRdvRaisonView.vue'
import HumanRdvMenaceView from '@/views/human/HumanRdvMenaceView.vue'
import HumanRdvCalmeView from '@/views/human/HumanRdvCalmeView.vue'
import HumanHomeView from '@/views/human/HumanHomeView.vue'
import HumanHomeBlacklistView from '@/views/human/blacklist/HumanHomeBlacklistView.vue'
import HumanBarView from '@/views/human/HumanBarView.vue'
import HumanBarBlacklistView from '@/views/human/blacklist/HumanBarBlacklistView.vue'
import HumanBarOutView from '@/views/human/HumanBarOutView.vue'
import HumanBarOutBlacklistView from '@/views/human/blacklist/HumanBarOutBlacklistView.vue'
import HumanSleepView from '@/views/human/HumanSleepView.vue'
import HumanSleepBlacklistView from '@/views/human/blacklist/HumanSleepBlacklistView.vue'
import HumanReveilView from '@/views/human/HumanReveilView.vue'
import HumanReveilBlacklistView from '@/views/human/blacklist/HumanReveilBlacklistView.vue'
import HumanEntretienView from '@/views/human/HumanEntretienView.vue'
import HumanEntretienAgView from '@/views/human/HumanEntretienAgView.vue'
import HumanEntretienProView from '@/views/human/HumanEntretienProView.vue'
import HumanPasseurView from '@/views/human/HumanPasseurView.vue'
import HumanHopitalView from '@/views/human/HumanHopitalView.vue'
import HumanHopitalAndroid1View from '@/views/human/HumanHopitalAndroid1View.vue'
import HumanHopitalAndroid2View from '@/views/human/HumanHopitalAndroid2View.vue'
import HumanFinView from '@/views/human/HumanFinView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/humanIntro',
      name: 'HumanIntro',
      component: HumanIntroView
    },
    {
      path: '/humanRdv',
      name: 'HumanRdv',
      component: HumanRdvView
    },
    {
      path: '/humanRdvRaison',
      name: 'HumanRdvRaison',
      component: HumanRdvRaisonView
    },
    {
      path: '/humanRdvNRV',
      name: 'HumanRdvNRV',
      component: HumanRdvMenaceView
    },
    {
      path: '/humanRdvCalme',
      name: 'HumanRdvCalme',
      component: HumanRdvCalmeView
    },
    {
      path: '/humanHome',
      name: 'HumanHome',
      component: HumanHomeView
    },
    {
      path: '/humanHomeBlacklist',
      name: 'HumanHomeBlacklist',
      component: HumanHomeBlacklistView
    },
    {
      path: '/humanBar',
      name: 'HumanBar',
      component: HumanBarView
    },
    {
      path: '/humanBarOut',
      name: 'HumanBarOut',
      component: HumanBarOutView
    },
    {
      path: '/humanBarBlacklist',
      name: 'HumanBarBlacklist',
      component: HumanBarBlacklistView
    },
    {
      path: '/humanBarOutBlacklist',
      name: 'HumanBarOutBlacklist',
      component: HumanBarOutBlacklistView
    },
    {
      path: '/humanSleep',
      name: 'HumanSleep',
      component: HumanSleepView
    },
    {
      path: '/humanSleepBlacklist',
      name: 'HumanSleepBlacklist',
      component: HumanSleepBlacklistView
    },
    {
      path: '/humanReveil',
      name: 'HumanReveil',
      component: HumanReveilView
    },
    {
      path: '/humanReveilBlacklist',
      name: 'HumanReveilBlacklist',
      component: HumanReveilBlacklistView
    },
    {
      path: '/humanEntretien',
      name: 'HumanEntretien',
      component: HumanEntretienView
    },
    {
      path: '/humanEntretienAg',
      name: 'HumanEntretienAg',
      component: HumanEntretienAgView
    },
    {
      path: '/humanEntretienPro',
      name: 'HumanEntretienPro',
      component: HumanEntretienProView
    },
    {
      path: '/humanPasseur',
      name: 'HumanPasseur',
      component: HumanPasseurView
    },
    {
      path: '/humanHopital',
      name: 'HumanHopital',
      component: HumanHopitalView
    },
    {
      path: '/humanHopitalAndroid1',
      name: 'HumanHopitalAndroid1',
      component: HumanHopitalAndroid1View
    },
    {
      path: '/humanHopitalAndroid2',
      name: 'HumanHopitalAndroid2',
      component: HumanHopitalAndroid2View
    },
    {
      path: '/humanFin',
      name: 'HumanFin',
      component: HumanFinView
    },
  ]
})

export default router