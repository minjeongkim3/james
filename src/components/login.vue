<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div class="login">
    <div v-if="state.account.id"> <!--id값이 들어오면-->
      <p>안녕하세요 {{state.account.name}}님</p>
      <p><router-link to="/home">메인 홈 페이지</router-link>로 이동합니다</p>
      <button @click="logout()">로그아웃</button> <!--로그아웃 버튼-->
    </div>
    <div v-else> <!--id값이 없다면 로그인 창이 뜸-->
      <h3>Login</h3>
      <input type="text" placeholder="username" id="loginId" v-model="state.form.loginId"><br>
      <input type="password" placeholder="password" id="loginPW" v-model="state.form.loginPW"><br>
      <button v-on:click="login">로그인</button>
    </div>
    <p>만약 계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!</p> <!--회원가입 페이지로 이동-->
  </div>
</template>

<script>
  import axios from "axios";
  import {reactive} from "vue";
  export default {
    setup(){
        const state = reactive({
            account:{
                //id: null,
                name: ""
            },
            form:{
                loginId: "",
                loginPW: ""
            }
        });

        const submit = () => { //submit 하면
            const args = {
                loginId: state.form.loginId,
                loginPW: state.form.loginPW,
            };
            //axios post로 인자 값을 보냄
            axios.post("/api/account", args).then((res) => { //성공하면
                alert("로그인에 성공했습니다.");
                state.account = res.data; //결과값을 state.account에 넣음
            })
            .catch(() => { //실패하면
                alert("로그인에 실패했습니다.");
            });
        };

        const logout = () => { //로그아웃을 누르면
            axios.delete("/api/account").then(()=>{ //delete 메서드를 통해 account창에 url을 던져주고
                alert("로그아웃 되었습니다.");
                state.account.id = null; //값을 비워줌
                state.account.name = "";
            });
        };

        axios.get("/api/account").then((res)=>{ //처음 접속했을 때 api get 방식으로 통신
            state.account = res.data; //성공하면 state.account에 데이터 값을 넣어줌
        });

        return {state, submit, logout};
    },
  }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 15px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
=======
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
  <section>
    <div>
      <form>
        LOGIN width James<br><br>
        <input class="id_login" type="text" placeholder="username"><br>
        <input class="pw_login" type="password" placeholder="password"><br>
        <button type="submit" class="btn_login">로그인</button><br>
          <a href="#" @click="logintest">로그인했다치 다음페이지</a>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'login',
    methods: {
        logintest()
        {
          this.$router.push({
            path: 'home'
          })
        }
  }
}
</script>
<style scoped>
  .id_login, .pw_login , .btn_login{
    width: 200px;
    /* box-shadow: 5px 10px 10px rgba(0,0,0,0.03); */
  }
  section{
    height: 700px;
    background-color: #F1F2F3;
  }
  form{
    padding-top: 50%;
<<<<<<< HEAD
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
  }
</style>
