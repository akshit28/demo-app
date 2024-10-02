import { createRouter, createWebHashHistory } from 'vue-router'
import TestList from '@/components/TestList.vue'
import TestProgress from '@/components/TestProgress.vue'
import TestResult from '@/components/TestResult.vue'

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
  },
  {
    path: '/testresult',
    name: 'TestResult',
    component: TestResult
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
