<template>
  <div id="login">
    <div class="panel">
      <div class="log-bg">
        <div class="log-cloud cloud1"></div>
        <div class="log-cloud cloud2"></div>
        <div class="log-cloud cloud3"></div>
        <div class="log-cloud cloud4"></div>
        <div class="log-logo">Welcome!</div>
      </div>
      <el-form>
        <el-form-item>
          <el-input placeholder="用户名" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="密码" type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-button>Login</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import fetch from '@/common/js/fetch.js';
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        test: 'kiddd',
      },
    };
  },
  created: function() {
    fetch.get('/design').then(res => {
      console.log(res);
    });
  },
};
</script>
<style lang="less" scoped>
#login {
  height: 100%;
  background-image: url(~@/assets/background.png);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .panel {
    background-color: #ffffff;
    width: 432px;
    .el-form {
      padding: 20px;
      .el-input {
      }
      .el-button {
        width: 100%;
      }
    }
    .log-bg {
      width: 100%;
      height: 212px;
      background-color: #7dc5ea;
      overflow: hidden;
      .log-logo {
        height: 80px;
        margin: 80px auto 25px;
        text-align: center;
        color: #1fcab3;
        font-weight: bold;
        font-size: 40px;
      }
      .log-cloud {
        background-image: url(~@/assets/login-cloud.png);
        width: 63px;
        height: 40px;
        position: absolute;
        z-index: 1;
      }
      .cloud1 {
        top: 21px;
        left: -30px;
        transform: scale(0.6);
        animation: cloud1 20s linear infinite;
      }
      .cloud2 {
        top: 87px;
        left: 20px;
        animation: cloud2 19s linear infinite;
      }
      .cloud3 {
        top: 160px;
        left: 5px;
        transform: scale(0.8);
        animation: cloud3 21s linear infinite;
      }
      .cloud4 {
        top: 150px;
        left: -40px;
        transform: scale(0.4);
        animation: cloud4 19s linear infinite;
      }
    }
  }
}
@-webkit-keyframes cloud1 {
  0% {
    left: 200px;
  }
  100% {
    left: -130px;
  }
}
@keyframes cloud1 {
  0% {
    left: 200px;
  }
  100% {
    left: -130px;
  }
}
@-webkit-keyframes cloud2 {
  0% {
    left: 500px;
  }
  100% {
    left: -90px;
  }
}
@keyframes cloud2 {
  0% {
    left: 500px;
  }
  100% {
    left: -90px;
  }
}
@-webkit-keyframes cloud3 {
  0% {
    left: 620px;
  }
  100% {
    left: -70px;
  }
}
@keyframes cloud3 {
  0% {
    left: 620px;
  }
  100% {
    left: -70px;
  }
}
@-webkit-keyframes cloud4 {
  0% {
    left: 100px;
  }
  100% {
    left: -70px;
  }
}
@keyframes cloud4 {
  0% {
    left: 100px;
  }
  100% {
    left: -70px;
  }
}
</style>
