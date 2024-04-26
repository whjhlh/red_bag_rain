<template>
  <div>
    <h1>我是 app</h1>
    <van-button @click="test" size='large' type="info">信息按钮</van-button>
  </div>
</template>

<script>
  import {Toast} from 'vant'
  export default {
    name: 'App',
    methods:{
      test(){
        //this.$toast.fail("操作失败")
        Toast.fail("操作失败")
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1{
    background-color: orange;
    width: 187.5px;
  }
</style>
