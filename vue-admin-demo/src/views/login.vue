<template>
    <div class="login-body">
        <div class="login-container">
            <div class="head">
                <!-- logo -->
                <img src="../assets/logo.svg" alt="">
                <!-- 标题 -->
                <div class="name">
                    <div class="title">Login</div>
                </div>
            </div>
            <el-form label-position="top" ref="form" :rules="state.rules" :model="state.ruleForm" label-width="80px" class="el-form" >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model.trim="state.ruleForm.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model.trim="state.ruleForm.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin" style="width: 40%;">登录</el-button>
                    <el-button @click="handleRegister" style="width: 40%;">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script lang="ts" setup>

import { reactive, ref, watch } from 'vue'
import { Search, School } from '@element-plus/icons'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
    ruleForm:{
        name:'',
        password:'',
    },
    checked:true,
    rules:{
        username:[{required:true,message:'账户不能为空',trigger:'blur'}],
        password:[{required:true,message:'密码不能为空',trigger:'blur'}]
    }
})

watch(router,()=>{

})
async function handleLogin() {
    // axios.get('http://127.0.0.1:3000/index', {
    //     params: {
    //         username: input,
    //         pwd: password,
    //     }
    // }).then((res) => {
    //     console.log(res)
    // }).catch(error => console.log(error))
    await router.push({path:'/'})
}
function handleRegister(){


}
</script>
<style>
.login-body{
    background-color: #fff;
}
.login-container{
    position: absolute;
    left: calc(-50% - 210px);
    top: calc(-50% - 200px);
    width: 420px;   
    height: 400px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px  rgba(0, 0, 0, 0.2);
}
.head{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
}
.head img {
    margin-right: 100px;
    width: 100px;
    height: 100px;
}
.head .title {
    font-size: 28px;
    color:saddlebrown;
    font-weight: bolder;
}
.el-form{
    width: 70%;
    margin: 0 auto;
}
</style>
