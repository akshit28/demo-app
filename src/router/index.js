import { createRouter, createWebHashHistory } from 'vue-router'
import TestList from '@/components/TestList.vue'
import TestProgress from '@/components/TestProgress.vue'

const routes = [
  {
    path: '/',
    name: 'Test',
    component: TestList
  },
  {
    path: '/test',
    name: 'Test',
    component: TestList
  },
  {
    path: '/testprogress',
    name: 'TestProgress',
    component: TestProgress
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
