<template>
<div>
  <div class="carousel" @mouseover="stopChange" @mouseout="autoChange">
    <div class="slider-list">
      <div v-for="(item,idx) in list" class="slider-item" :class="idx==activeIdx?'show':'hidden'">
        <img :src="basicURL+item">
      </div>
    </div>
    <ul class="slider-idx">
      <li v-for="(item,idx) in list" @click="activeChange(idx)">
        <button :class="idx==activeIdx?'active':''">{{idx}}</button>
      </li>
    </ul>
  </div>
</div>
</template>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
}
.slider-list {
  overflow: hidden;
  /*width: 100%;
  height: 0;
  padding-bottom: 55%;*/
}
.slider-item {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all .3s;
}
.slider-item.show {
  opacity: 1;
}
.slider-item.hidden {
  opacity: 0;
}
.slider-item img {
  display: block;
  position: absolute;
  margin: auto;
  top: 0;bottom: 0;left: 0;right: 0;
}
.slider-idx {
  position: absolute;
  bottom: -5px;
  list-style: none;
  text-align: center;
  width: 100%;
  height: 3px;
}
.slider-idx li {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin: 0 2px;
  padding: 10px 0;
  cursor: pointer;
}
.slider-idx li button {
  border: 0;
  cursor: pointer;
  background: #8391a5;
  opacity: .3;
  display: block;
  width: 16px;
  height: 3px;
  border-radius: 1px;
  outline: none;
  font-size: 0;
  color: transparent;
  transition: all .5s;
}
.slider-idx li .active {
  /*background: #fff;*/
  opacity: 1;
  width: 24px;
}
</style>

<script>
export default {
  name: 'historybook',
  methods: {
    getHitorybookList(year) {
      axios.get('/getData?data=historybookList&year='+year)
        .then((res)=>{
          if (res.data.length) {
            this.list = res.data;
            this.autoChange();
          }
        })
        .catch((err)=>{
          console.log(err);
          this.$emit('messageEvent', 'error', '服务器错误: '+err);
        });
      // this.list=[{'img':'1.JPG','show':true},{'img':'2.JPG','show':false},{'img':'3.JPG','show':false},{'img':'4.bmp','show':false}];
      // this.autoChange();
    },
    activeChange(id) {
      // console.log('activechange',id,this.activeIdx);
      this.activeIdx = id;
    },
    autoChange() {
      this.intervalId = setInterval(()=>{
        this.activeChange((this.activeIdx + 1) % this.list.length)
      },5000);
      console.log('setInterval',this.intervalId);
    },
    stopChange() {
      clearInterval(this.intervalId);
      console.log('clearInterval',this.intervalId);
    }
  },
  watch: {
    $route(val) {
      this.getHitorybookList(val.params['year']);
      this.stopChange();
      this.list = [];
    }
  },
  computed: {
    basicURL() {
      return '/static/upload/historybook/'+this.$route.params['year']+'/';
    }
  },
  data() {
    return {
      // basicURL: '',
      // year: '',
      list: [],
      activeIdx: 0,
      intervalId: null,
    }
  },
  beforeMount() {
    // this.year = this.$route.params['year'];
    this.getHitorybookList(this.$route.params['year']);
    this.basicURL = '/static/upload/historybook/'+this.$route.params['year']+'/';
  }
}
</script>
