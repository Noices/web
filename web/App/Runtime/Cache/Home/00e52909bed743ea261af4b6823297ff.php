<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="shortcut icon" type="image/x-icon" href="/Public/Home/Image/ico.png" style="width:16px;height:16px" />
	<title>人人小站</title>
	<link rel="stylesheet" href="/Public/Home/Css/index.css">
</head>
<body>
	<div  id="page">
		<header id="header">
			<div class="header-box">
			<div class="logo">
				<a href="/home?from=bar"></a>
			</div>
			<div class="header-search">
				<form id="tagSearchForm" method="get" action="http://zhan.renren.com/tag">
					<input name="value" type="hidden">
				</form>
				<input placeholder="告诉我你的梦想" style="color: rgb(136, 136, 136);" data-not-use-placeholder="true" id="tag-key" class="search" autocomplete="off" maxlength="20" type="text">
			</div>
			<div class="nologinContainer">
				<a href="<?php echo U('Home/Dl/dl');?>" class="login">登 录</a>
				<a href="<?php echo U('Home/Zc/zc');?>" class="regist">注 册</a>
			</div>
			</div>
			<div class="sub-header" style="height: 5px"></div>
		</header>
	</div>
	<div class="left">
		<div class="left0">
			<div class="left1"><img src="" alt=""></div>
			<div class="left2"></div>
		</div>
		<div class="left3">
			<h3>
				<a href="" class="left3-a">11111</a>
			</h3>
			<h2>
				<a href="" class="left3-a1">222</a>
			</h2>
		</div>
	</div>

	<div class="left">
		<div class="left0">
			<div class="left1"><img src="" alt=""></div>
			<div class="left2"></div>
		</div>
		<div class="left3">
			<h3>
				<a href="" class="left3-a">11111</a>
			</h3>
			<h2>
				<a href="" class="left3-a1">222</a>
			</h2>
		</div>
	</div>
	<div class="right">
		<ul class="right0">
			<li>
				<a data-title="设计" href="/tag?value=设计">
				<i style=""></i>
				<span class="tag-tit" style="top: 0px;">设计
				</span></a>
			</li>
			<li>
				<a data-title="设计" href="/tag?value=设计">
				<i style=""></i>
				<span class="tag-tit" style="top: 0px;">设计
				</span></a>
			</li>
			<li>
				<a data-title="设计" href="/tag?value=设计">
				<i style=""></i>
				<span class="tag-tit" style="top: 0px;">设计
				</span></a>
			</li>
			<li>
				<a data-title="设计" href="/tag?value=设计">
				<i style=""></i>
				<span class="tag-tit" style="top: 0px;">设计
				</span></a>
			</li>
			<li>
				<a data-title="设计" href="/tag?value=设计">
				<i style=""></i>
				<span class="tag-tit" style="top: 0px;">设计
				</span></a>
			</li>
			<li>
				<a data-title="设计" href="/tag?value=设计">
				<i style=""></i>
				<span class="tag-tit" style="top: 0px;">探索更多话题
				</span></a>
			</li>
		</ul>
	</div>





	<script src="/Public/Home/Scripts/jquery-1.8.3.min.js"></script>
	<script src="/Public/Home/Scripts/index.js"></script>
</body>
</html>