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
  //用于发请求
  import request from './utils/request';

  export default {
    name: 'App',
    components: {CountdownMask,RecovedMask},
    data(){
      return{
        isShowRainContainer: false,
        rainKey:''
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
      async onRainEnd(){
        console.log('用户端雨到时间了')
        let {data}=await request.get('/api/v2/record/'+'${this.rainKey}')
        console.log(data)
        this.$refs.recovedMask.show(data)
      },
      //点击红包的回调
      onClickRedPacket(){   
        request.get('/api/v2/rob/${this.rainKey')
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
      },
      //开始进行联调
      async start(){
        //请求服务器开启红包雨,并且,获取 红包雨唯一token
        //await 等待服务器返回值
        let {data}=await request.get('/api/v1/send/100/20')
        //存取红包雨唯一token
        this.rainKey=data
        //开启倒计时
        this.$refs.countdownMask.show(3500)
      }
    },
     mounted(){
      //开启倒计时
      // this.$refs.countdownMask.show(4500)
      this.start()
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
