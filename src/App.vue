<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
html, body {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
body, p, span, input, textarea, table {
	/*font-family: "Times New Roman", "Microsoft YaHei";*/
  font-family: "Microsoft YaHei";
	font-size: 12px;
	letter-spacing: 1px;
	color: #000;
}
a {
	color: #000;
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
}
img {
	max-width: 100%;
	/*width: 100%;*/
}
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  text-align: left;
}
td,th {
  padding: 16px 8px;
  word-break: break-all;
  transition: all .3s;
}
thead>tr>th {
  background: #f7f7f7;
  font-weight: 500;
  color: rgba(0,0,0,.85);
}
tbody>tr>td {
  border-bottom: 1px solid #e9e9e9;
}
label {
	display: block;
  position: relative;
}
textarea {
  box-sizing: border-box;
  width: 100%;
  resize: none;
  padding: 4px 7px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  line-height: 1.5;
  color: rgba(0,0,0,.65);
  transition: all .3s;
  outline: none;
}
textarea:hover, textarea:focus {
  border-color: #49a9ee;
}
input {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 4px 7px;
  width: 100%;
  line-height: 1.5;
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all .3s;
  outline: none;
}
input:hover, input:focus{
  border-color:#49a9ee;
}
input[type='button'] {
  width: 150px;
  height: 28px;
  margin-bottom: 12px;
  margin-right: 8px;
  background: #f0f0f0;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: #d9d9d9;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  font-size: 12px;
  color: rgba(0,0,0,.65);
  background-color: #fff;
}
input[type='button']:hover {
  background: #fff;
  color:#108ee9;
  border-color:#108ee9
}
input[type='checkbox'] {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  left: 0; top:0; right:0; bottom: 0;
  cursor: pointer;
}
.checkbox-span {
  width: 14px;
  height: 14px;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: text-bottom;
  margin-right: 4px;
}
select {
  display: inline-block;
  padding: 4px 7px;
  margin-bottom: 1em;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  transition: all .3s;
  outline: none;
}
option {
  outline: none;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
input[type=text]:focus, input[type=password]:focus, textarea:focus {
  -webkit-box-shadow: 0 0 0 1000px white inset;
}
.right {
	float: right;
}
.left {
	float: left;
}
.link-like {
	cursor: pointer;
}
.link-like:hover {
  text-decoration: underline;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.gradient-bgcolor {
  background: #d8d8d8;
  background: linear-gradient(#fff, #d8d8d8);
  background: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#d8d8d8));
  background: -moz-linear-gradient(top, #fff, #d8d8d8);
  background: -o-linear-gradient(top, #fff, #d8d8d8);
}
</style>
