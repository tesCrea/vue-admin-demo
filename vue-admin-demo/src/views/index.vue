
<template>
    <div class="common-layout">
      <el-container class="container">
        <el-aside width="200px" class="aside">
          <div class="head">
            <div>
              <img src="../assets/logo.svg" alt="logo">
            </div>
          </div>
          <el-menu background-color="skyblue" text-color="#fff" class="menu">
          <!--   :router="true"
             :default-openeds="state.defaultOpen"
               :default-active='state.currentPath' -->
            <el-sub-menu index="1">
              <template #title>
                <span>Dashboard</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/"><el-icon>
                    <Odometer />
                  </el-icon>首页</el-menu-item>
                <el-menu-item index="/"><el-icon>
                    <Plus />
                  </el-icon>添加商品</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
  
        <el-container class="content">
          <!-- 引入header组件 -->
          <el-header class="header"><Header/></el-header>
          <div class="main">
            <RouterView/>
          </div>
          <el-footer><Footer/></el-footer>
        </el-container>
      </el-container>
    </div>
  </template>
  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Login from './login.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  </script>
  <style>
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .container {
    height: 100%;
  }
  .aside{
    height: 100%;
  }
  .menu{
    height: 100%;
  }
  .header {
    width: 100vh;
    height: 200px;
    background-color: #fff;
  }
  .common-layout {
    min-height: 100vh;
    background-color: #fff;
  }
  
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  
  .head img {
    width: 100px;
    height: 100px;
    margin-top: 70px;
    margin-left: 70px;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
  
  /* element-plus ui */
  .el-header,
  .el-footer {
    background-color: #fff;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #fff;
    color: #fff;
    text-align: center;
    line-height: 200px;
    overflow: hidden;
  }
  
  .el-main {
    background-color: #fff;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
  
  body>.el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }</style>