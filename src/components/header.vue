<template>
  <header id="head">
    <div id="head_area">
      <form>
        <input type="search" placeholder="Search">
        <span>검색</span>
      </form>
<<<<<<< HEAD
<<<<<<< HEAD
      <a href="#" id="log-in" @click="login1">LOGIN</a>
=======
      <a href="#" id="log-in"@click="login1">LOGIN</a>
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
      <a href="#" id="log-in"@click="login1">LOGIN</a>
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
      <h2>제임스, 우리집을 부탁해!</h2>
      <p>내가 없는 우리집에선 무슨 일이 일어날까?</p>
      <div>
        <ul>
          <!-- <li><a href="#">HOME</a></li> -->
<<<<<<< HEAD
<<<<<<< HEAD
          <!--<li><a href="#">LOGIN</a></li>-->
=======
          <li><a href="#">LOGIN</a></li>
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
          <li><a href="#">LOGIN</a></li>
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
          <!-- <li><a href="#">SERVICE</a></li>
          <li><a href="#">QnA</a></li> -->
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
      login1()
      {
          this.$router.push({
              path: 'login'
          })
      }},
      // back()
      // {
      //   this.$router.go(-1)
      // }
};
</script>

<style scoped>
#log-in{
  color: #fff;
  float: right;
  width: auto;
  height: 20px;
  position: relative;
  right:30px;
  top:-10px;
  opacity: 0.7;
  font-weight:bold;
  background-color: #333366;


}
form{
  position:relative;
  top:10px;
  left:5px;

  width:180px;
  height:auto;
  background: rgba(0,0,0,0.5);
  border-radius: 5px;
  margin-top:24px;
}
form > input {
  border: none;
  width:130px;
  height:23px;
  background: rgba(0,0,0,0);
  color:#fff;
  padding-left:bold;
}
form > span {
opacity: 0.5;
  color:#fff;
  font-weight:bold;
  cursor:pointer;
}
 *{
    margin: 0;
    background-color: #333366;
  }

  h2{
    vertical-align: middle;
    width:auto;
    position:relative;
    top:60px;
    left:25px;
    color:white;
<<<<<<< HEAD
<<<<<<< HEAD
    display: inline-block;
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
  }
  #head_area{
    height:220px;
    width:100%;
    text-align: center;
  }
  p{
    position:relative;
    top:60px;
    color:white;
  }
  /* 여기서 부터는 nav 부분 적용 */
  ul{
      background-color: #FFFFFF;
      height: 60px;
      width: 70%;
      margin-left: 15%;
      /* margin-right: 10%; */

      display: flex;
      text-align:center;
      padding:0;
      list-style:none;
      position:relative;
      top:95px;
      box-shadow: 5px 10px 10px rgba(0,0,0,0.2);
  }
  li{
    background-color: #FFFFFF;
    margin-left:40%;
    /* margin-right:50%; */
    margin-top:10%;
    /*fixed*/
    vertical-align: middle;
    /*overflow: initial;*/
  }
  a{
    text-decoration-line: none;
    color:black;
    background-color: #FFFFFF
    /* border-right:2px solid #F1F2F3; */
  }
</style>
