import Vue from 'vue'
import Router from 'vue-router'
// import singup from '@/components/Signup'
import home from '@/components/home'
import blog from '@/components/blog'
import services from '@/components/services'
import contact from '@/components/contact'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'blog',
      component: blog
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})
