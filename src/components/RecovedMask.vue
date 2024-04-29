
<template>
  <van-overlay :show="isShow">
    <div class="wrapper">
      <div class="content">
        <span class="title">恭喜获得</span>
        <span class="amount">{{amount}}</span>
        <span class="unit">元</span>
      </div>
      <van-icon name="close" class="close-icon" @click="close"/>
    </div>
  </van-overlay>
</template>

<script>
export default {
  name: 'RecovedMask',
  data(){
    return {
      isShow:false,
      amount:0
    }
  },
  props:['onClose'],
  methods:{
    show(amount){
      this.amount=amount
      this.isShow=true
    },
    close(){
      this.isShow=false
      this.onClose()
    }
  }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    // background-image: url('../asserts/WechatIMG100.jpeg');
    // background-repeat: no-repeat;
    // background-size: 300px;
    // background-position: center;
    background: url('../asserts/WechatIMG102.jpeg') no-repeat center/300px;
    .content{
      text-align: center;
      transform: translateY(-100px);
      .title{
        display: block;
        font-size: 30px;
        color: orange;
        font-weight: 600;
        margin-bottom: 10px;
        font-weight: 600;
      }
      .amount{
        font-size: 40px;
        color: red;
      }
      .unit{
        color: red;

      }
      
    }
    .close-icon{
        position: fixed;
        top:10px;
        right: 10px;
        color: white;
        font-size: 60px;
      }
  }
  .seconds {
    font-size: 100px;
    color: rgb(252, 250, 249);
  }
</style>