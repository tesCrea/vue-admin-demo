import axios from 'axios'
// 创建axios实例，自定义配置项
const service = axios.create({
    url:'/',
    timeout:5000,
})
// axios拦截器，在.then()和.catch()回调处理之前提前进行拦截处理
service.interceptors.request.use(
    // .then()
    config => {

    },
    error=>{

    }
)
// 
service.interceptors.response.use(
    // .then()
    response => {

    },
    // .catch()
    error =>{

    }
)
export default service