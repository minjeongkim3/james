<template>
  <section>
    <div>
      <br><br>
      <span class="text1">ABOUT JAMES</span><br>
      <span>우리집을 지키는 제임스를 소개합니다</span>
      <img class="pic4" name="JAMES"src="@/assets/pic4.png"/>
      <div class="textbox1">제임스는, 사용자가 집을 비워도 집을 지켜주며
      일상에 도움을 주는 IoT 입니다.<br><br> 또한, 1인 가구와 독거노인의 삶의 질 향상
      및 위급상황과 고독사 방지를 위한 IoT 플랫폼 입니다. </div>
      <hr class="hr1">
      <img class="pic5" src="@/assets/pic5.jpg"/>
      <div class="textbox2">제임스는 간단한 음성인식과 집안주행,
      얼굴인식 뿐만 아니라, 응급 상황 대처, 실내 케어, 관심사 알림 기능
      등 여러가지 기능을 통해 사용자에게 편리함을 제공합니다.</div>
      <hr class="hr2"><br>
      <span class="text2">JAMES FUNCTIONS</span><br>
      <span>제임스의 대표적인 기능들을 소개합니다</span>
      <div class="icon">
          <img class="pic6" src="@/assets/pic6.png">
          <img class="pic7" src="@/assets/pic7.png">
          <img class="pic8" src="@/assets/pic8.png">
          <div class="textbox3">사용자가 관심사 키워드를 등록하면
            키워드가 포함되거나 관련된 기사를 사용자에게 알림으로
            전송합니다. <br><br><br><br>홈 CCTV를 통해 집안을 실시간
            스트리밍으로 확인 할 수 있습니다.
            <br><br><br><br><br>공기 중 미세먼지 농도와 온습도를
            측정한뒤, 사용자에게 알려주어 일정 수치를 넘기면
            실내 환기 및 냉난방기 설정을 유도합니다.</div>
      </div>
      <img class="pic9" src="@/assets/pic9.png">
      <span class="text3">@@일상의 편리함, 제임스를 경험해 보세요</span>

    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
  section{
    margin-top: 10px;
    height: 1300px;
  }
  .text1{
      font-size: 25px;
  }

  .pic4{
    width: 150px;
    position:relative;
    top:40px;
    left:-100px;
  }
  .pic5{
    width:300px;
    position: relative;
    top: -40px;
  }
  .pic6{
    width: 390px;
    position: relative;
    top: -180px;

  }
  .textbox1{
    /* border: 1px solid black; */
    width: 190px;
    height: 150px;
    position: relative;
    left: 180px;
    top: -100px;
    text-align: left;
    /* background-color: #F1F2F3; */
  }
  .hr1{
    position: relative;
    top: -60px;
  }
  .textbox2{
    width: 350px;
    position: relative;
    top: -20px;
    left: 30px;
    text-align: left;
  }
  .text2{
    font-size: 25px;
  }
  /* 뉴스 */
  .pic6 {
    width: 80px;
    position: relative;
    top: 10px;
    left: -20px;
  }
  /* 카메라 */
  .pic7{
    width: 80px;
    position: relative;
    top: 110px;
    left: -100px;
  }
  /* 미세먼지 */
  .pic8{
    width: 80px;
    position: relative;
    top: 220px;
    left: -190px;
  }
  .icon{
    height: auto;
    border: 1px solid;
    width: 350px;
    height: 300px;
    position: relative;
    top: 30px;
    left:20px;
  }
  .textbox3{
    /* border: 1px solid; */
    width: 200px;
    height: 280px;
    position: relative;
    left: 140px;
    top: -60px;
    text-align: left;
    font-size: 13px;
  }
  .pic9{
    width: 350px;
    position: relative;
    top: 70px;
    left: 20px;
    z-index: -1;

  }
  .text3{
    color: white;
    z-index: 10;
    position: relative;
    top:-20px;
    left: 10px;
  }
</style>
