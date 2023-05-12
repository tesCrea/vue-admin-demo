<template>
    <div class="header">
        <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" >
                <div>
                    <el-col :span="8">
                        <el-dropdown trigger="click" >
                            <span class="el-dropdown-link">
                                <el-avatar class="avator" src="https://empty" @error="errorHandle">
                                    <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
                                </el-avatar><el-icon class="el-icon--right"><arrow-down /></el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item :icon="Plus" @click="userInfo">个人信息</el-dropdown-item>
                                    <el-dropdown-item :icon="CirclePlusFilled" @click="updatePwd">
                                        修改密码
                                    </el-dropdown-item>
                                    <el-dropdown-item :icon="CirclePlus" @click="getOutLogin">退出登陆</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-col>
                </div>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { UserFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const router = useRouter()
const handleSelect = (() => {
})
const errorHandle = () => true
// 修改密码
const updatePwd = function(){

}
// 个人信息
const userInfo = function(){

}
// 退出登陆
const getOutLogin = async function(){
    await router.push({path:'/login'})
}
</script>
<style>
.header-menu{
    width: 100%;
}
.avator {
    margin-right: -30px;
    margin-bottom: 10px;
}
el-dropdown{
    position: absolute;
    right: 0;
}
</style>