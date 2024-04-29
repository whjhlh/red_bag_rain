import axios from "axios"
import { Toast } from 'vant'
import  getToken from './getToken' // 修改导入方式

const request = axios.create({
    //请求基本路径
    baseURL:'/dev-api',
    timeout: 10000 // 超时时间
})

// 请求拦截器
request.interceptors.request.use(
    // 成功回调
    config => {
        config.headers.token = getToken()
        console.log(config)
        return config
    },

    // 失败回调
    error => {
        Toast.fail(error.message)
        return Promise.reject(error.message)
    }
)
//响应拦截器
request.interceptors.response.use(
    // 成功回调
    response => {
        //检查是否真的成功
       const{code ,message}=response.data
       //全等,指的数据类型和数值都一致
       if(code === 200){
        return response.data
       }
       else{
        //person中的 message
        Toast.fail(message)
        return Promise.reject(message)
       }
    },

    // 失败回调
    error => {
        Toast.fail(error.message)
        return Promise.reject(error.message)
    }
)

export default request
