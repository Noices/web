<?php if (!defined('THINK_PATH')) exit();?>﻿
<!DOCTYPE html><html>
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<meta name="description" content="人人小站的描述" />
<meta name="keywords" content="人人,人人网,小站,话题" />
<link rel="shortcut icon" type="image/x-icon" href="http://a.xnimg.cn/smallsite/images/ico.png" />
<title>人人小站</title>
<link rel="stylesheet" href="/Public/Home/Css/login-new-all-min.css">
<script src="/Public/Home/Scripts/core.js"></script>
<script src="/Public/Home/Scripts/login-new.js"></script>
</head>
<body style="background:url('/Public/Home/Picture/beij.jpg') no-repeat;">
<div class="">
<div class="load"></div>
</div>
<!-- <div class="" style="background:url('/Public/Home/Picture/beij.jpg') no-repeat; height:300px"> -->
<!-- <div class="login-bg"><img src = "/Public/Home/Picture/x_large_7o72_7714000042d6125e.jpg"/></div> -->
<div class="login-content clearfix">
<ul class="login-word clearfix">
<li class="word-one"><span>Hello!</span></li>
<li class="word-two"><span>Welcome to</span></li>
<li class="word-three"><span>人人小站</span></li>
</ul>
<div class="login-main clearfix">
<form name="loginForm"  autocomplete="off">
<div class="item email clearfix">
<div class="item-input item-input-box">
<input value="http://zhan.renren.com/home?from=loginwindow" name="origURL" type="hidden" /> 
<input value="renren.com" name="domain" type="hidden" /> 
<input type="text" name="email" id="email" class="input-email" /> <label for="email">人人网帐号/注册邮箱</label>
</div>
<p id="emailErro">请填写用户名</p>
</div>
<div class="item password clearfix">
<div class="item-input">
<input type="password" name="passw" id="password"class="input-password" /> 

<label>输入密码</label> 
<a class="remember" href="javascript:;" title="未自动登录">自动登录</a>
</div>
<p class="prompt" id="pswErro">您还没有填写密码</p>
</div>
<div class="item icode clearfix">
<div class="item-input-icode">
<div class="input-icode-wrap"> 
<input type="text" name="icode" id="icode" class="input-icode" /> 
<label for='icode'>输入验证码</label> 
</div>
<!-- <span class="icodeWrap"><img src="/Picture/getcode.do" id="icodePic"></span> -->
<a  class="refreshIcode" href="javascript:refreshCode();">换一张</a>
</div>
<p class="prompt" id="validateError"></p>
</div>
<div class="item-btn clearfix">
<div class="login-icon	">
<a
href="https://api.weibo.com/oauth2/authorize?client_id=425157704&redirect_uri=http://zhan.renren.com/reg/sinaconfig&response_type=code&state=login"
target="_parent" class="weibo">weibo</a> <a
href="https://graph.qq.com/oauth2.0/authorize?client_id=100340414&redirect_uri=http://zhan.renren.com/reg/qqconfig&response_type=code&state=login"
target="_parent" class="qq">qq</a> <a href="http://zhan.renren.com/connectrenren?from=login" target="_parent" class="ren">renren</a> <a
href="https://www.douban.com/service/auth2/auth?client_id=013dc073f2883c7e03b9415bd798b57a&redirect_uri=http://zhan.renren.com/reg/doubanconfig&response_type=code&state=login" target="_parent" class="db">douban</a>
</div>
<input id="autoLogin" name="autoLogin" type="hidden" value="false" />
<input name="captcha_type" type="hidden" value="web_login"/>
<input type="submit" class="input-btn" value="登 录" id="login-btn"/>
<p class="tip">
<a class="" href="javascript:;" style="cursor:default">其他帐号登录</a> <a class="fogetPwd"
href="http://safe.renren.com/findPass.do">忘记密码</a>
</p>
</div>
</form>
</div>
</div>
<div class="footer">
<p class="about">
<a href="/loginall?from=login" class="about-icon">注册</a> <a href="/home?from=login"
class="about-icon">体验小站</a> <a class="about-icon"
href="http://zhan.renren.com/explore?from=login">探索话题</a> <a
class="about-icon" href="http://zhan.renren.com/suggest?from=login">推荐小站</a>
<span class="footerby">By</span>
<a href="http://zhan.renren.com/lovehoneymoon?gid=3674946092038640885" target="_blank" class="smallsite" > 甜蜜旅行</a>
<span class="imgname">: 三毛：“每想你一次，天上飘落一粒沙，从此形成了撒哈拉 ！”</span></p></div>
</div>
<span style="display:none">
<script language="javascript" type="text/javascript" src="/Public/Home/Scripts/14879491.js"></script>
<noscript><a href="http://www.51.la/?14879491" target="_blank"><img alt="&#x6211;&#x8981;&#x5566;&#x514D;&#x8D39;&#x7EDF;&#x8BA1;" src="/Public/Home/Picture/14879491.asp" style="border:none" /></a></noscript>
</span>
<script src="/Public/Home/Scripts/beacon.js"></script><script>
COMSCORE.beacon({ c1:2, c2:6934070, c3:"", c4:"", c5:"", c6:"", c15:"" });
</script>
<!-- <noscript>
<img src="/Public/Home/Picture/553a3ac6d09047daaf9e422a0a46ab0e.gif" />
</noscript> -->
	</body>
</html>