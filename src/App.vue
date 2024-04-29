<template>
  <div>
    <!-- 倒计时组件 -->
    <CountdownMask ref="countdownMask" :onFinish="onCountFinish"/>

    <div class="rain-container" ref="rainContainer"></div>
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
    methods: {
      onCountFinish() {
        console.log('倒计时结束了')
      },
      onRecovedClose(){
        console.log('红包界面关闭了')
      }
    },
    mounted(){
      setInterval(()=>{
        new RedPacket({
        parent: this.$refs.rainContainer,
        callback(){
          console.log('你点击了红包')
        }
      })
      },200)
      
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
