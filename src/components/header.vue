<template>
<div class="header">
  <div class="container">
    <div class="logo left">
      <img src="/static/img/logo.png">
    </div>
    <div class="header-action right">
      <div class="lang-action">
        <span class="link-like" @click="$store.commit('langEn')" v-show="!en">中文</span>
        <span class="link-like" @click="$store.commit('langZh')" v-show="en">english</span>
      </div>
      <div class="user-action">
        <template v-if="isLogin">
          <span>{{ en ? 'wish list' : '心愿单' }}</span>
          <span class="span-split"></span>
          <span class="link-like" @click="logout">{{ en ? 'logout' : '退出' }}</span>
        </template>
        <template v-else>
          <span class="link-like" @click="$emit('signEvent',true)">{{ en ? 'join' : '注册'}}</span>
          <span class="span-split"></span>
          <span class="link-like" @click="$emit('signEvent',true)">{{ en ? 'login' : '登录' }}</span>
        </template>
      </div>
      <div class="search-action">
        <input type="text" v-model.trim="query" @keyup.enter="productSearch"><span class="link-like" @click="productSearch">{{ en ? 'search' : '搜索' }}</span>
        <template v-if="$route.name=='jewellery' || $route.name=='series' || $route.name=='search'">
          <span class="span-split"></span>
          <div class="link-like color-filter">
            <span>{{ en ? 'color' : '颜色筛选' }}</span>
            <div class="color-list">
              <ul>
                <!-- <li v-for="color in colorList" class="link-like" @click="colorFilter(color['en'])">{{color[language]}}</li> -->
                <li v-for="color in colorList"><router-link :to="{path:$route.path,query:{color:color['en']}}" active-class="">{{color[language]}}</router-link></li>
              </ul>
            </div>
          </div>

        </template>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.header {
  box-sizing: border-box;
  height: 180px;
  padding-top: 40px;
  /*overflow: hidden;*/
}
.logo {
  width: 200px;
  height: 140px;
}
.logo img {
  box-sizing: border-box;
  max-height: 100%;
  margin-left: 120px;
  padding-bottom: 10px;
}
.header-action {
  width: 300px;
  padding: 10px;
  text-align: right;
  text-transform: uppercase;
}
.lang-action,
.user-action {
  font-size: 0;
  margin-bottom: 10px;
}
.lang-action {
}
.user-action {}
.search-action {}
.search-action input {
  width: 90px;
  background-color: transparent;
  border-radius: 0;
  border-width: 0;
  border-bottom-width: 1px;
  padding: 0 7px;
  text-align: center;
}
.color-filter {
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
}
.color-list {
  display: none;
  position: absolute;
  top: 20px;
  right: 0;
  width: 100px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
  z-index: 1;
}
.color-filter:hover .color-list {
  display: block;
}
.color-list li {
  margin: 8px;
  text-align: center;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: 'header',
  computed: {
    ...mapState({
      isLogin: state => Boolean(state.userid),
      en: state => state.language == 'en',
      language: 'language',
      userid: 'userid',
    }),
  },
  methods: {
    getColorList() {
      axios.get('/getData?data=color')
        .then(res=>{
          this.colorList = res.data;
        })
        .catch(err=>{
          console.log(err);
          this.$emit('messageEvent', 'error', '服务器错误: '+err);
        });
        this.colorList = [{'zh':'红','en':'red'},{'zh':'蓝','en':'blue'},{'zh':'粉','en':'pink'}];
    },
    productSearch() {
      if (this.query) {
        this.$router.push('/search/'+this.query);
        this.query = '';
      }
    },
    // colorFilter(color) {
    //   this.$router.push({
    //     path: this.$route.path,
    //     query: {color},
    //   })
    // },
    logout() {
      axios.post('/adminAction','action=logout&userid='+this.userid)
        .then((res)=>{
          this.$store.commit('logout');
        })
        .catch((err)=>{
          this.$emit('messageEvent', 'error', (this.language == 'en' ? 'logout failed' : '退出登录失败: ')+err);
        })
    },
  },
  data() {
    return {
      query: '',
      // colorToggle: false,
      colorList: [],
    }
  },
  beforeMount() {
    this.getColorList();
  }
}
</script>
