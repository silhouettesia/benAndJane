<template>
<div sign-wrap>
  <div class="sign-mask" @click="$emit('signEvent',false)"></div>
  <div class="sign-box">
    <div class="sign-content">
      <div class="sign-input">
        <input type="text" placeholder="email" v-model.trim="account" @keyup="checkEmail">
        <input type="password" placeholder="password" v-model.trim="password">
      </div>
      <div class="sign-button">
        <button @click="login">login</button>
        <button @click="register">register</button>
      </div>
      <p class="sign-message">{{ message }}</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.sign-mask {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0,0,0,.2);
  z-index: 3;
  pointer-events: all;
}
.sign-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  box-sizing: border-box;
  width: 400px;
  height: 300px;
  padding: 50px 0;
  background-color: #99c;
  background: linear-gradient(#c5abd0,#8e8ec0);
  border-radius: 4px;
  box-shadow:0 4px 8px rgba(0,0,0,.5);
  z-index: 4;
}
.sign-content {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  z-index: 5;
}
.sign-input {}
.sign-button {}
.sign-message {
  color: #ddd;
}
input {
  margin-bottom: 1em;
  border: 0;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  background: transparent;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: 'Microsoft Yahei';
}
input:hover, input:focus{
  border-color:#c2a9d0;
  background: transparent !important;
}
::-webkit-input-placeholder {
  color: #fff;
}
:-moz-placeholder {
  color: #fff;
}
::-moz-placeholder {
  color: #fff;
}
:-ms-input-placeholder {
  color: #fff;
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}
button {
  display: block;
  width: 100px;
  margin: 0 auto;
  padding: 10px 0;
  border: 0;
  outline: none;
  background: transparent;
  color: #fff;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
}
button+button {
  border-top: 1px solid #fff;
}
button:hover {
  color: #c2a9d0;
}
p::selection, ::selection {
  color:#fff;
  background-color: #e8c5c0;
}
</style>

<script>
export default {
  name: 'sign',
  methods: {
    checkEmail() {
      if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this.account)) {
        this.message = (this.$store.state.language == 'zh') ? '邮箱格式不正确' : 'email format is incorrect' ;
        return false;
      } else {
        this.message = '';
        return true;
      }
    },
    checkPassword() {
      if (this.password.length < 6) {
        this.message = (this.$store.state.language == 'zh') ? '密码不得小于6位' : 'password must not be less than 6 digits' ;
        return false;
      }
      if (this.password.length > 30) {
        this.message = (this.$store.state.language == 'zh') ? '密码不得大于30位' : 'password must be less than 30 digits' ;
        return false;
      }
      if (!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,30}$/.test(this.password)) {
        this.message = (this.$store.state.language == 'zh') ? '密码需为6-30位数字英文组合' : 'password should contain number and charactor' ;
        return false;
      }
      return true;
    },
    userAction(action) {
      if (this.account && this.password) {
        if (this.checkEmail()) {
          axios.post('/userAction','action='+action+'&account='+this.account+'&password='+this.password)
            .then((res)=>{
              this.$store.commit('login', {'token':res.data.token, 'userid':res.data.userid});
              this.account = '';
              this.password = '';
              this.$emit('signEvent',false);
            })
            .catch((err)=>{
              console.log(err);
              this.message = (this.$store.state.language == 'zh') ? '服务器错误,请稍后再尝试' : 'server error';
            });
        } else {
          this.message = (this.$store.state.language == 'zh') ? '邮箱格式不正确' : 'email format is incorrect';
        }
      } else {
        if (this.account == '' && this.password == '') {
          this.message = (this.$store.state.language == 'zh') ? '请输入用户名密码' : 'please enter your username and password';
        }
        else if (this.account == '') {
          this.message = (this.$store.state.language == 'zh') ? '请输入用户名' : 'please enter your username';
        }
        else if (this.password == '') {
          this.message = (this.$store.state.language == 'zh') ? '请输入密码' : 'please enter your password';
        }
      }
    },
    login() {
      this.userAction('login');
    },
    register() {
      this.userAction('register');
    },
  },
  data() {
    return {
      account: '',
      password: '',
      message: '',
    }
  },
}
</script>
