<template>
  <div class="hello">
<<<<<<< HEAD
<<<<<<< HEAD
    <h1>로그인 성공!</h1>
    <div class="">
      환영합니다
    </div>
    <!--<h1>{{ msg }}</h1>
=======
    <h1>{{ msg }}</h1>
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
    <h1>{{ msg }}</h1>
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
<<<<<<< HEAD
<<<<<<< HEAD
    </ul>-->
    <div>
      <button @click="test">메인 홈 화면으로 가기</button>
=======
    </ul>
    <div>
      <button @click="test">라우터 테스트</button>
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
    </ul>
    <div>
      <button @click="test">라우터 테스트</button>
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test()
    {
      this.$router.push({
<<<<<<< HEAD
<<<<<<< HEAD
        path: 'home'
=======
        path: 'james'
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
        path: 'james'
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
