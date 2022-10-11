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
<<<<<<< HEAD
<<<<<<< HEAD
import signUp from '@/components/signUp'

Vue.use(Router);

// NavigationDuplicated error catch
['push','replace'].forEach(method => {
  const originalMethod = Router.prototype[method];
  Router.prototype[method] = function m(location) {
    return originalMethod.call(this, location).catch(error => {
      if (error.name !== 'NavigationDuplicated') {
        // capture exception
      }
    })
  };
});

export default new Router({
  mode: 'history',
  routes: [
    {
      //첫 로그인 화면
      path: '/',
      components: {
        header: header,
        default: login,
        footer: footer
      }
    },
    {
      //메인 홈 화면
      path: '/home',
      components:{
        header: header,
        default: home,
        footer: footer
      }
    },
    {
      //회원가입 화면
      path: '/SignUp',
      name: 'signUp',
      components:{
        header: header,
        default: signUp,
        footer: footer
      }
      // component: signUp
    },
    {
      //cctv 화면
=======
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'home',
      components: {
        default: login
      }
      // components:{
      //   header: header,
      //   default: home,
      //   footer: footer
      // }
    },
    {
      path: '/home',
      components: {
        header: header,
         default: home,
         footer: footer
      }
    },
    {
      path: '/login',
      components: {
        // header: header,
        default: login
        // footer: footer
      }
    },
    {
<<<<<<< HEAD
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
      path: '/homecctv',
      components: {
        header: header,
        default: homecctv,
        footer: footer
      }
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      //크롤링 된 뉴스 화면
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
      path: '/news',
      components: {
        header: header,
        default: news,
        footer: footer
      }
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      //온습도 등 우리집 케어 화면
      path: '/care',
      name: 'care',
=======
      path: '/care',
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
      path: '/care',
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
      components: {
        header: header,
        default: care,
        footer: footer
      }
<<<<<<< HEAD
<<<<<<< HEAD
    },
    {
       //제임스 소개 화면
=======
     },
     {
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
     },
     {
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
      path: '/james',
      components: {
        header: header,
        default: james,
        footer: footer
      }
<<<<<<< HEAD
<<<<<<< HEAD
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
    }
  ]
})
