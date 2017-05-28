<template>
<div class="sidebar">
    <ul class="top-ul">
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <span class="link-like" @click="subActive('jewellery')">jewellery</span>
        <ul class="sub-ul" v-show="isJewelleryActive">
          <li><router-link to="/jewellery/necklaces">necklaces</router-link><img src="/static/upload/illustration/illustration.jpg" class="jewellery-illustration"></li>
          <li><router-link to="/jewellery/rings">rings</router-link><img src="/static/upload/illustration/illustration.jpg" class="jewellery-illustration"></li>
          <li><router-link to="/jewellery/earrings">earrings</router-link><img src="/static/upload/illustration/illustration.jpg" class="jewellery-illustration"></li>
          <li><router-link to="/jewellery/bracelets">bracelets</router-link><img src="/static/upload/illustration/illustration.jpg" class="jewellery-illustration"></li>
          <li><router-link to="/jewellery/accessories">accessories</router-link><img src="/static/upload/illustration/illustration.jpg" class="jewellery-illustration"></li>
          <li v-for="item in jewelleryCategory">
            <router-link :to="'/jewellery/'+item.url">item.name</router-link>
            <img :src="'/static/upload/illustration/'+item.img" class="jewellery-illustration">
          </li>
        </ul>
      </li>
      <li>
        <span class="link-like" @click="subActive('series')">series</span>
        <ul class="sub-ul" v-show="isSeriesActive">
          <li><router-link to="/series/less">less is more</router-link></li>
          <li><router-link to="/series/vintage">vintage</router-link></li>
          <li v-for="item in seriesCategory"><router-link :to="'/series/'+item.url">item.name</router-link></li>
        </ul>
      </li>
      <li>
        <span class="link-like" @click="subActive('historybook')">history book</span>
        <ul class="sub-ul" v-show="isHistorybookActive">
          <li><router-link to="/historybook/2017">2017</router-link></li>
          <li><router-link to="/historybook/2016">2016</router-link></li>
          <li><router-link to="/historybook/2015">2015</router-link></li>
          <li v-for="item in historybookCategory"><router-link :to="'/historybook/'+item.url">item.name</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/haute">High Jewellery</router-link>
      </li>
      <li>
        <router-link to="/about">about us</router-link>
      </li>
      <li>
        <router-link to="/contact">contact</router-link>
      </li>
    </ul>
</div>
</template>

<style>
.sidebar {
  position: absolute;
  top: 180px;
  bottom: 200px;
  width: 200px;
  /*margin-right: 20px;*/
}
.sidebar .top-ul {
  line-height: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: right;
}
.sidebar .top-ul li {
  display: block;
  position: relative;
}
.sidebar .sub-ul {
  font-style: italic;
  font-weight: normal;
  text-transform: none;
  margin-bottom: 1em;
}
.sidebar .jewellery-illustration {
  display: none;
  position: absolute;
  top: 0px;
  right: -60px;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  box-shadow:0 2px 8px rgba(0,0,0,.2);
  z-index: 1;
}
.sidebar .sub-ul li:hover .jewellery-illustration {
  display: block;
}
</style>

<script>
export default {
  name: 'aside',
  methods: {
    subActive(item) {
      this.isJewelleryActive = item == 'jewellery' ? true : false;
      this.isSeriesActive = item == 'series' ? true : false;
      this.isHistorybookActive = item == 'historybook' ? true : false;
    },
    getSidebarInfo() {
      axios.get('/getData?data=sidebar')
        .then((res)=>{
          this.jewelleryCategory = res.data.jewelleryCategory;
          this.seriesCategory = res.data.seriesCategory;
          this.historybookCategory = res.data.historybookCategory;
        })
        .catch((err)=>{
          console.log(err);
          this.$emit('messageEvent', 'error', '服务器错误: '+err);
        });
    },
  },
  beforeMount() {
    this.getSidebarInfo();
    this.subActive(this.$route.name);
  },
  data() {
    return {
      isJewelleryActive: false,
      isSeriesActive: false,
      isHistorybookActive: false,
      jewelleryCategory: [],
      seriesCategory: [],
      historybookCategory: [],
    }
  }
}
</script>
