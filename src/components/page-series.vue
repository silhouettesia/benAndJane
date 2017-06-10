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

<script>
import { mapState } from 'vuex'
export default {
  name: 'series',
  methods: {
    getProductList(){
      let category = this.$route.params['category'],
        color = this.$route.query['color'] || '';
      axios.get("/getData?data=productList&series="+category+"&color="+color)
        .then((res)=>{
          this.productList = this.productList.concat(res.data);
        })
        .catch((err)=>{
          console.log(err);
          this.$emit('messageEvent', 'error', '服务器错误: '+err);
        });
    },
    imageToggle: function(event) {
      var target = event.target, src = target.src, src2 = target.getAttribute('data-src2');
      if (src2) {
        [src, src2] = [src2, src];
        target.src = src;
        target.setAttribute('data-src2', src2);
      }
    },
  },
  watch: {
    $route() {
      this.getProductList();
    }
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
  data() {
    return {
      basicURL: '/static/upload/product/',
      productList: [
        // {
        //   "id": 1,
        //   "name": "name",
        //   "price": "1",
        //   "img": ['necklace.jpg','necklace1.jpg']
        // },
        // {
        //   "id": 2,
        //   "name": "name",
        //   "price": "1",
        //   "img": ['necklace3.jpg']
        // },
        // {
        //   "id": 3,
        //   "name": "name",
        //   "price": "1",
        //   "img": ['necklace4.jpg']
        // },
      ]
    }
  }
}
</script>
