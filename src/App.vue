<template>
  <div>
    <!-- 倒计时组件 -->
    <CountdownMask ref="countdownMask" :onFinish="onCountFinish"/>

    <div v-show="isShowRainContainer" class="rain-container" ref="rainContainer"></div>
    <!--最终记录组建-->
    <RecovedMask ref="recovedMask" :onClose="onRecovedClose"/>
  </div>
</template>

<script>
  import  CountdownMask  from './components/CountdownMask';
  import  RecovedMask  from './components/RecovedMask';
  import  RedPacket from './class/RedPacket'

  export default {
    name: 'App',
    components: {CountdownMask,RecovedMask},
    data(){
      return{
        isShowRainContainer: false
      }
    },
    methods: {
      onCountFinish() {
        console.log('客户端倒计时结束了')
        this.createRain(5000,200)
      },
      onRecovedClose(){
        console.log('用户关闭红包界面')
        
      },
      onRainEnd(){
        console.log('用户端雨到时间了')
        this.$refs.recovedMask.show(78)
      },
      //点击红包的回调
      onClickRedPacket(){
          console.log('用户点击了红包')
      },
      createRain(duration,speed){
        //展示下雨容器
        this.isShowRainContainer=true
        //下雨,循环
        this.timer=setInterval(()=>{
        new RedPacket({
          parent: this.$refs.rainContainer,
          //如果方法加了括号比如 callback: this.onClickRedPacket()那么是接受返回值
          callback: this.onClickRedPacket
          })
        },speed)
        //开启的定时器
        setTimeout(()=>{
          clearInterval(this.timer)
          this.onRainEnd()
        },duration)
      }
    },
    mounted(){
      //开启倒计时
      this.$refs.countdownMask.show(4500)
    },
  }
</script>

<style lang="scss" scoped>
  .rain-container{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image:linear-gradient(180deg,rgb(240,219,180),orange);
    //超出
    overflow: hidden;
  }
</style>
