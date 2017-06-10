<template>
<div>
  <ul class="product-list">
    <li v-for="item in productList">
      <router-link :to="'/product/'+item.id">
        <div class="product-image">
          <img v-bind:src="basicURL+item.img[0]" v-bind:data-src2="item.img.length>1?(basicURL+item.img[1]):''" v-on:mouseover="imageToggle" v-on:mouseout="imageToggle">
        </div>
        <div class="product-detail">
          <p>{{item.name[language]}}</p>
          <p>&yen {{item.price}}</p>
        </div>
      </router-link>
    </li>
  </ul>
</div>
</template>
<style>
.product-list {
  overflow: auto;
  height: 100%;
}
.product-list li{
    float: left;
    width: 30%;
    margin-right: 3%;
    text-align: center;
    transition: all .3s;
}
.product-image {
	max-width: 100%;
	width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
}
.product-image>img {
  position: absolute;
  margin: auto;
  top: 0;bottom: 0;
  left: 0;right: 0;
  width: 100%;
  height: 100%;
}
.product-detail {
	margin: 10px 0 40px;
}
@media screen and (max-width: 900px) {
  .product-list li {
    width: 45%;
  }
}
</style>
<script>
import { mapState } from 'vuex'
export default {
  name: 'jewellery',
  methods: {
    getProductList(){
      let category = this.$route.params['category'],
        query = this.$route.params['query'],
        color = this.$route.query['color'] || '',
        url = '';
      if (category) {
        url = "/getData?data=productList&category="+category+"&color="+color+"&page="+this.page+"&limit="+this.limit;
      };
      if (query) {
        url = "/search?search="+query+"&color="+color+"&page="+this.page+"&limit="+this.limit;
      }
      if (url) {
        axios.get(url)
        .then((res)=>{
          this.productList = this.productList.concat(res.data);
          this.page++;
        })
        .catch((err)=>{
          console.log(err);
          this.$emit('messageEvent', 'error', '服务器错误: '+err);
        });
      }
    },
    imageToggle: function(event) {
      var target = event.target, src = target.src, src2 = target.getAttribute('data-src2');
      if (src2) {
        [src, src2] = [src2, src];
        target.src = src;
        target.setAttribute('data-src2', src2);
      }
    },
    scrollHandler(event){
      if (event.target.scrollTop+event.target.clientHeight == event.target.scrollHeight) {
        this.getProductList();
      }
    },
  },
  watch: {
    $route() {
      this.getProductList();
    },
  },
  computed: {
    ...mapState({
      isLogin: state => Boolean(state.userid),
      language: state => state.language,
    }),
  },
  beforeMount() {
    this.getProductList();
  },
  mounted() {
    this.$el.addEventListener('scroll',this.scrollHandler);
  },
  data() {
    return {
      basicURL: '/static/upload/product/',
      page: 0,
      limit: 30,
      productList: [
      //   {
      //     "id": 1,
      //     "name": {"zh":"zh","en":"en"},
      //     "price": "1",
      //     "img": ['necklace.jpg','necklace1.jpg']
      //   },
      //   {
      //     "id": 2,
      //     "name": {"zh":"zh","en":"en"},
      //     "price": "1",
      //     "img": ['necklace3.jpg']
      //   },
      //   {
      //     "id": 3,
      //     "name": {"zh":"zh","en":"en"},
      //     "price": "1",
      //     "img": ['necklace4.jpg']
      //   },
      ]
    }
  }
}
</script>
