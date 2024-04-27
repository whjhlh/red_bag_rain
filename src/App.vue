<template>
  <div>
    <h1>我是 app</h1>
    <van-button @click="test" size='large' type="info">信息按钮</van-button>
  </div>
</template>

<script>
  import request from '@/utils/request'
  export default {
    name: 'App',
    methods:{
      async test(){
        // //this.$toast.fail("操作失败")
        // Toast.fail("操作失败")
        // axios.get('/persom.json')
        let x = await request.get('api/v1/send/100/10')
        console.log(x)
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
