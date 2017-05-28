<template>
  <div class="product">
    <div class="product-image">
      <div class="product-image-thumb">
        <ul>
          <li v-for="(file,idx) in product.img" @click="mainImage=basicURL+file">
            <img :src="basicURL+file|thumbFilter">
          </li>
        </ul>
      </div>
      <div class="product-image-main">
        <img :src="mainImage">
      </div>
    </div>
    <div class="product-detail">
      <h1 class="product-name">{{product.name[language]}}</h1>
      <div class="product-price"><p><span>&yen</span>{{product.price|priceFilter}}</p></div>
      <!-- <div class="product-color"><p><span>color:</span>{{product.color|colorFilter}}</p></div> -->
      <div class="product-favor"><p><span class="link-like" @click="addFavor">{{ language == 'zh' ? '加入收藏夹' : 'Add to wish list'}}</span></p></div>
      <div class="product-description"><p>{{product.desc[language]}}</p></div>
    </div>
  </div>
</template>

<style scoped>
.product {
  margin: 10px;
  overflow: hidden;
}
.product-image {
  float: left;
  width: 50%;
  overflow: hidden;
  margin-right: 30px;
}
.product-image-thumb {
  float: left;
  width: 80px;
  margin-right: 10px;
}
.product-image-thumb ul {
  list-style: none;
}
.product-image-thumb li {
  margin-bottom: 14px;
  cursor: pointer;
}
.product-image-thumb img {
  width: 80px;
}
.product-image-main {
  overflow: hidden;
}
.product-detail {
  overflow: hidden;
}
.product-detail .product-name {
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
}
.product-detail .product-price>p {
  font-size: 20px;
  /*font-family: Georgia, "Times New Roman", "Microsoft YaHei";*/
}
.product-detail .product-price>p>span {
  font-size: 18px;
  margin-right: 0.25em;
}
.product-detail .product-color {
  margin-top: 20px;
}
.product-detail .product-color>p {
}
.product-detail .product-color>p>span {
  text-transform: uppercase;
  margin-right: 0.5em;
}
.product-detail .product-favor>p {
}
.product-detail .product-favor>p>span {
  text-transform: uppercase;
  margin-right: 0.5em;
}
.product-detail .product-favor {
  margin-top: 20px;
}
.product-description {
  margin-top: 20px;
}
@media screen and (max-width:760px) {
  .product-image {
    float: none;
    width: 100%;
  }
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: 'product',
  data() {
    return {
      basicURL: '/static/upload/product/',
      mainImage: '',
      product: {}
    }
  },
  beforeMount() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo(){
      let url = '/getData?data=productInfo&id='+this.$route.params['prod'];
      if (this.isLogin) {
        /* todo: http header */
          url += '&uesrid='+this.userid;
      }
      axios.get(url)
        .then((res)=>{
          console.log('product',res.data)
          this.product = res.data;
          this.mainImage = '/static/upload/product/'+this.product.img[0];
        })
        .catch((err)=>{
          console.log(err);
          this.$emit('messageEvent', 'error', '服务器错误: '+err);
        });
      this.product = {
        "name": {"zh":"zh","en":"en"},
        "price": "9.9",
        "series": "series",
        "cat": "cat1",
        "color": "red",
        "img": ["necklace.jpg","necklace1.jpg"],
        "desc": {"zh":"zh","en":"en"},
      }
      this.mainImage = '/static/upload/product/'+this.product.img[0];
    },
    addHistory(prodId, userId) {},
    addFavor(prodId, userId) {}
  },
  computed: {
    ...mapState({
      isLogin: state => Boolean(state.userid),
      language: 'language',
      userid: 'userid',
    }),
  },
  filters: {
    thumbFilter(value) {
      var parts = value.split('.');
      // return parts[0]+'_thumb.'+parts[1];
      return value;
    },
    priceFilter(value) {
      return ''+value;
    },
    colorFilter(value) {
      if (Array.isArray(value)) {
        var str = '';
        value.forEach(function(item,idx,arr) {
          str += item + (idx<arr.length-1?'，':'');
        });
        return str;
      }
      return value;
    },
  }
}
</script>
