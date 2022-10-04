import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import james from '@/components/james'
import home from '@/components/home'
import header from '@/components/header'
import login from '@/components/login'
import App from '@/App.vue'
import footer from '@/components/footer'
import homecctv from '@/components/homecctv'
import news from '@/components/news'
import care from '@/components/care'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      components:{
        header: header,
        default: home,
        footer: footer
      }
    },
    {
      path: '/login',
      components: {
        header: header,
        default: login,
        footer: footer
      }
    },
    {
      path: '/homecctv',
      components: {
        header: header,
        default: homecctv,
        footer: footer
      }
    },
    {
      path: '/news',
      components: {
        header: header,
        default: news,
        footer: footer
      }
    },
    {
      path: '/care',
      components: {
        header: header,
        default: care,
        footer: footer
      }
     },
     {
      path: '/james',
      components: {
        header: header,
        default: james,
        footer: footer
      }
    }
  ]
})
