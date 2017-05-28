<template>
<div class="footer">
  <div class="container">
    <div class="contact">
      <ul>
        <li>
          <a href="" target="_blank">
            <img class="toggle-image1" src="/static/img/facebook.png">
            <img class="toggle-image2" src="/static/img/facebookb.png">
          </a>
        </li>
        <li>
          <img class="toggle-image1" src="/static/img/wechat.png">
          <img class="toggle-image2" src="/static/img/wechatb.png">
          <div class="contact-hover-image"><img src="/static/img/wxCode.jpg"></div>
        </li>
        <li>
          <img class="toggle-image1" src="/static/img/qq.png">
          <img class="toggle-image2" src="/static/img/qqb.png">
          <div class="contact-hover-image"><img src="/static/img/wxCode.jpg"></div>
        </li>
        <li>
          <a href="mailto:xxx@xxx.xxx">
            <img class="toggle-image1" src="/static/img/email.png">
            <img class="toggle-image2" src="/static/img/emailb.png">
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<style>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  /*right: 0;*/
  /*width: 100%;*/
  /*max-width: 960px;*/
  margin: 40px auto 80px;
}
.footer .container .contact {
  width: 200px;
}
.footer .container .contact ul {
  text-align: right;
}
.footer .container .contact li {
  position: relative;
  display: inline-block;
  width: 22px;
  padding: 0 2px;
  cursor: pointer;
}
.footer .container .contact li .toggle-image2 {
  display: none;
}
.footer .container .contact li:hover .toggle-image1 {
  display: none;
}
.footer .container .contact li:hover .toggle-image2 {
  display: block;
}
.footer .container .contact li:hover .contact-hover-image {
  display: block;
}
.footer .container .contact .contact-hover-image {
  display: none;
  position: absolute;
  bottom: 40px;
  left: -95px;
  width: 200px;
  padding: 10px;
  border-radius:4px;
  box-shadow:0 2px 8px rgba(0,0,0,.2);
  background:#fff;
  cursor: auto;
}
.footer .container .contact .contact-hover-image::after {
  content: "";
  position: absolute;
  bottom: -16px;
  left: 100px;
  width: 0;
  height: 0;
  border: 8px solid;
  border-color: transparent;
  border-top-color: #fff;
}
</style>

<script>
export default {
  name: 'footer',
}
</script>
