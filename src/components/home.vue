<template>
    <section>
      <br><br>
        <div id="text2">
          ABOUT
        </div>
        <div id="tap_area1">
            <span id="tap1">
                <img id="img1" src="@/assets/pic1.png" />
                <h3>홈 CCTV</h3>
                <a href="#" @click="test1">우리집 둘러보기</a>
            </span>
            <span id="tap2">
                <img id="img2" src="@/assets/pic2.png" />
                <h3>제임스의 실내 케어 </h3>
                <a href="#" @click="test2">우리집을 부탁해 !</a>
            </span>
        </div>

        <div id="tap_area2">
            <span id="tap3">
                <img id="img3" src="@/assets/pic3.png" />
                <h3>오늘의 관심사는 ?</h3>
                <a href="#" @click="test3">관심 기사 바로가기</a>
            </span>
            <span id="tap4">
                <img id="img4" src="@/assets/pic4.png" /><br><br>
                <h3>제임스를 소개합니다</h3>
                <a href="#" @click="test4">제임스 알아보기</a>
            </span>
        </div>
        <div id="text1">
            제임스는 사용자가 집을 비워도 집을 지켜주며,<br>
            일상에 도움을 주는 토탈 케어 IoT 입니다.
        </div>
        <router-view></router-view>
    </section>
</template>

<script>
export default {
    methods: {
        test1()
        {
          this.$router.push({
            path: 'homecctv'
          })
        },
        test2()
        {
          this.$router.push({
            path: 'care'
          })
        },
        test3()
        {
          this.$router.push({
            path: 'news'
          })
        },
        test4()
        {
            this.$router.push({
                path: 'james'
            })
        }
    }
}
</script>

<style scoped>
    #img1, #img2, #img3, #img4{
      width: 80px;
      height: auto;
      position: relative;
      top: 10px;
    }
    #text1 {
        font-size: 15px;
    }
    #text2{
      font-size: 30px;
    }
    img {
        position: relative;
        top: -10px;
    }
    #tap1, #tap2, #tap3, #tap4 {
        width: 150px;
        height: 150px;
        margin: 10px;
        font-size: 12px;
        padding: 5px;
        display: inline-block;
        background-color: #FFFFFF;
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.25);
    }
    #tap3{
      position: relative;
      top:-10px;
    }
    #tap4{
      position: relative;
      top:-5px;
    }
    #tap_area1, #tap_area2 {
        width: auto;
        height: 200px;
    }
    a {
        text-decoration-line: none;
        background-color: #2F7AF4;
        border: 4px solid #2F7AF4;
        color: white;
        font-size: 10px;
        position: relative;
        top: -20px;
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);

    }

    h3 {
        position: relative;
        top: -15px;
    }

    section {
        background-color: #F1F2F3;
        height: 540px;
    }
</style>
