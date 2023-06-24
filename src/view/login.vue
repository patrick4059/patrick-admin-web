<template>
  <div class="login" :style="'background-image:url('+ Background +');'">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px"
             class="login-form">
      <h3 class="title">
        后台管理系统
      </h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码"
                  @keyup.enter="handleLogin"/>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码" style="width: 63%"
                  @keyup.enter="handleLogin"/>
        <div class="login-code">
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0 0 25px 0;">
        记住我
      </el-checkbox>
      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.prevent="handleLogin">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Background from '@/assets/images/background.jpg'

export default {
  name: 'Login',
  data () {
    return {
      Background: Background,
      loginForm: {
        username: 'admin',
        password: '123456',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          message: '用户名不能为空'
        }],
        password: [{
          required: true,
          trigger: 'blur',
          message: '密码不能为空'
        }],
        code: [{
          required: true,
          trigger: 'change',
          message: '验证码不能为空'
        }]
      },
      loading: false
    }
  },
  created () {
  },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-size: cover;
  }

  .title {
    margin: 0 auto 30px auto;
    text-align: center;
    color: #707070;
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 385px;
    padding: 25px 25px 5px 25px;

    .el-input {
      height: 38px;

      input {
        height: 38px;
      }
    }
  }

  .login-code {
    width: 33%;
    display: inline-block;
    height: 38px;
    float: right;

    img {
      cursor: pointer;
      vertical-align: middle
    }
  }
</style>
