const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 方法一:用于处理掉开发端异常问题的全部红屏显示
  //方法二:对可能出现红瓶显示的地方进行 trycatch 处理
  devServer:{
    client:{
      overlay:false
    },
    //代理设置
    //解决跨域问题
    proxy:{
      '/dev-api':{
        //转发目标服务器
        target:'http://rb.atguigu.cn',
        //影响后端接受 host 值
        changeOrigin:true,
        //请求前缀带有dev-api,就跨域到 target 服务器中
        pathRewrite:{'^/dev-api':''}
      }
    }
  }
})
