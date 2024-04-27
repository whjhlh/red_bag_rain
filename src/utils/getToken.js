// getToken.js
import { v4 as uuid } from 'uuid'

// ES6模块化
// 若是 export 分别暴露, 则加{}导入
// 若是 default 则为默认暴露,则不需要加入{}
export default function getToken() { // 修改为 export function getToken()
    // localStorage浏览器本地存储
    const token = localStorage.getItem('token')
    if (token) {
        return token
    } else {
        // 因为没有写登录界面,自己创造一个 token
        const newToken = uuid()
        localStorage.setItem('token', newToken)
        return newToken
    }
}