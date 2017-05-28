<template>
  <div class="main">
    <div class="fixed-bg gradient-bgcolor"></div>
    <transition name="fade">
      <message
        v-show="message.show"
        :type="message.type"
        :content="message.content"
      ></message>
    </transition>
    <transition name="fade">
      <sign v-show="signShow" @signEvent="signHandler"></sign>
    </transition>
    <bjheader @messageEvent="messageHandler" @signEvent="signHandler"></bjheader>
    <bjaside @messageEvent="messageHandler"></bjaside>
    <router-view name="main" class="content" @messageEvent="messageHandler"></router-view>
    <bjfooter></bjfooter>
  </div>
</template>

<style>
.main {
  position: absolute;
  left: 0; right: 0;
  width: 100%;
  height: 100%;
  max-width: 960px;
  min-height: 800px;
  margin: 0 auto;
  /*padding: 20px 0;*/
}
.content {
  position: absolute;
  top: 180px;
  /*bottom: 200px;*/
  bottom: 50px;
  left: 200px;
  right: 0;
  margin-left: 20px;
  overflow: auto;
}
</style>

<script>
import message from '@/components/message'
import sign from '@/components/sign'
import bjheader from '@/components/header'
import bjaside from '@/components/aside'
import bjfooter from '@/components/footer'
export default {
  name: 'wrap',
  components: {
    message,
    sign,
    bjheader,
    bjaside,
    bjfooter,
  },
  methods: {
    messageHandler(type, content, duration = 3) {
      this.message.type = type;
      this.message.content = content;
      this.message.show = true;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(()=>{
        this.message.show = false;
        this.message.type = '';
        this.message.content = '';
      },duration*1000);
    },
    signHandler(flag) {
      this.signShow = flag;
    }
  },
  data() {
    return {
      message: {
        show: false,
        type: 'info',
        content: '',
        timeoutId: null,
      },
      signShow: false,
    }
  },
}
</script>
