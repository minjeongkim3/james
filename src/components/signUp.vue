<template>
  <div class="sign-up">
    <p>회원가입</p>
    <form @submit.prevent="submitForm">
			<div>
				<label for="username">id</label>
				<input type="text" id="username" v-model="ID" />
			</div>
			<div>
				<label for="name">이름</label>
				<input type="text" id="name" v-model="name" />
			</div>
			<div>
				<label for="password">비밀번호</label>
				<input type="password" id="password" v-model="password" />
			</div>
      <div>
				<label for="number">전화번호</label>
				<input type="text" id="number" v-model="number" />
			</div>
			<button type="submit">회원가입</button>
		</form>
    <span>또는 <router-link to="/">로그인</router-link>으로 돌아가기</span>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data: function() {
      return {
        ID: '',
        password: '',
        name: '',
        number: '',
      }
    },
    methods: {
      submitForm: function() {
        // event.preventDefault();
        console.log(this.ID, this.password, this.name, this.number);
        var url = 'http://localhost:8080/signup';
        var data = {
          ID: this.ID,
          password: this.password,
          name: this.name,
          number: this.number,
        }
        axios.post(url, data)
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
}
</script>

<style scoped>
  .signUp {
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
    font-size: 20px;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 15px;
  }
</style>
