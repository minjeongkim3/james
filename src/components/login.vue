<template>
  <section>
    <div>
      <form>
        Log-in<br><br>
        <input class="id_login" type="text" placeholder="username"><br>
        <input class="pw_login" type="password" placeholder="password"><br>
        <button type="submit" class="btn_login">로그인</button>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'login'
  };
</script>
<style scoped>
  .id_login, .pw_login , .btn_login{
    width: 200px;
    /* box-shadow: 5px 10px 10px rgba(0,0,0,0.03); */
  }
  section{
    height: 540px;
    background-color: #F1F2F3;
  }
  form{
    padding-top: 50%;
  }
</style>
