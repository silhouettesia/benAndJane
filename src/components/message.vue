<template>
<div class="message">
    <span>
      <div class="message-notice">
        <div class="message-notice-content">
          <div class="message-custom-content" :class="{'message-success': success, 'message-error': error, 'message-warning': warning, 'message-info': info, 'message-loading': loading}">
            <i class="icon" :class="{'icon-success': success, 'icon-error': error, 'icon-warning': warning, 'icon-info': info, 'icon-loading': loading}"></i>
            <span>{{ content }}</span>
          </div>
        </div>
      </div>
    </span>
</div>
</template>
<style>
.message{
  font-size:12px;
  position:fixed;
  z-index:2;
  width:100%;
  top:16px;
  left:0;
  pointer-events:none;
}
.message-notice{
  padding:8px;
  text-align:center
}
.message-notice-content{
  padding:8px 16px;
  border-radius:4px;
  box-shadow:0 2px 8px rgba(0,0,0,.2);
  background:#fff;
  display:inline-block;
  pointer-events:all;
}
.message-success .icon{
  color:#00a854
}
.message-error .icon{
  color:#f04134
}
.message-warning .icon{
  color:#ffbf00
}
.message-info .icon,.message-loading .icon{
  color:#108ee9
}
.message .icon{
  margin-right:8px;
  font-size:14px;
  top:1px;
  position:relative
}
.message .icon:before {
  font-style: normal;
}
.icon-success:before{
  content:"\2714";
  /*font-style: normal;*/
}
.icon-error:before{
  content: "\2716";
  /*font-style: normal;*/
}
.icon-warning:before{
  content: "\26A0";
  /*font-style: normal;*/
}
.icon-info:befere{
  content: "\2709";
}
.icon-loading:before{
  content: "\27F3";
}
</style>
<script>
export default {
  name: 'message',
  props: ['type', 'content', 'duration'],
  watch: {
    type(val) {
      this.success = (val == 'success') ? true : false;
      this.error = (val == 'error') ? true : false;
      this.warning = (val == 'warning') ? true : false;
      this.info = (val == 'info') ? true : false;
      this.loading = (val == 'loading') ? true : false;
    },
  },
  data() {
    return {
      // show: false,
      timeoutId: null,
      success: false,
      error: false,
      warning: false,
      info: false,
      loading: false,
    }
  }
}
</script>
