<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div>
    <input type="button" value="알림창 띄우기" onclick="alert('잠시후에 창이 닫힙니다.');">
    <table border="1">
      <tr>
        <td>온도</td>
        <td>습도</td>
        <td>측정시간</td>
      </tr>
      <tr :key="index" v-for="(value, index) in items">
        <td>{{ value.Temperature }}</td>
        <td>{{ value.Humidity }}</td>
        <td>{{ value.Nowtime }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// 해당 스크립트 태그 안의 주석은 전부 삭제X
//import http from "../services/http-common.js"
export default {
  data() {
    return {
      items:
      [
          {
            "Humidity": "66.1%",
            "Nowtime": "2022-09-15 22:21:16",
            "Temperature": "25.2*C"
          }
      ]
    }
  },
  // methods: {
  //   getHomeinfo() {
  //     http
  //       .get("/homecare")
  //       .then(res => {
  //         console.log(res.data);
  //         this.items = res.data;
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   },
  // },
  // mounted() {
  //   this.getHomeinfo();
  // }
}
// function openNewWindow() {
//   newWin = window.open("http://lia.pe.kr/java Tip/sempl-17.htm", "5초후 자동으로 닫힙니다.", "scrollbars=no, resizable=no,copyhistory=no,width=410,height=310"); }// (1) setTimeout("newWin.close()", 5000); }
=======
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
  <section>
    <div>
        이곳은 실내케어 를 볼 수 있는 공간입니다.
        뭐가들어갈진 나도 모릅니다.<br>
        이곳은 실내케어를 볼 수 있는 공간입니다.
        뭐가들어갈진 나도 모릅니다.<br>
        이곳은 실내케어 를 볼 수 있는 공간입니다.
        뭐가들어갈진 나도 모릅니다.

    </div>
  </section>
</template>

<script>
export default {

}
<<<<<<< HEAD
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
=======
>>>>>>> 53f8fb5d4f7ea22b4be5294f3ffa4b3e693a1c8b
</script>

<style scoped>
    section{
      height: 540px;
      background-color: #F1F2F3;
    }
</style>
