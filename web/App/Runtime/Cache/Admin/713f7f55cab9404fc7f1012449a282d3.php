<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php echo ($title); ?></title>
</head>
<body>
	<?php echo ($_SERVER['SCRIPT_NAME']); ?>//输出$_SERVER['SCRIPT_NAME']变量
	<br>
	<?php echo (session('user_id')); ?> // 输出$_SESSION['user_id']变量
	<br>
	<?php echo ($_GET['name']); ?> // 输出$_GET['name]变量
	<br>
	<?php echo (cookie('abc')); ?>  // 输出$_COOKIE['name']变量
	<br>
	<?php echo ($_POST['name']); ?>  // 输出$_POST['name']变量
	<br>
	<?php echo (md5($title)); ?>
	<br>
	<?php echo substr($title,0,3);?>
	<br>
	<?php echo love;?>
	<br>
	<?php echo ((isset($info) && ($info !== ""))?($info):"这家伙很懒 什么都没留下"); ?>
	<br>
	<?php echo ($status?'正常':'错误'); ?>
	<hr>
	<!-- 当前网站的根目录url -->
	<a href="/zy/TP">baiduyixia</a>
	<br>
	<!-- 获取公共目录url -->
	<img src="/zy/TP/Public/Admin/img/timg.jpg" alt="">
	<br>
	/zy/TP/index.php
	<br>
	/zy/TP/index.php/Admin/User
	<br>
	/zy/TP/index.php/Admin/User
	<br>
	/zy/TP/index.php/Admin/User/edit
	<br>
	/zy/TP/index.php/Admin/User/edit?id=13
	<!-- /zy/TP： 会替换成当前网站的地址（不含域名） 
	/zy/TP/Public：会被替换成当前网站的公共目录 通常是 /Public/
	/zy/TP/index.php： 会替换成当前应用的URL地址 （不含域名）
	/zy/TP/index.php/Admin：会替换成当前模块的URL地址 （不含域名）
	/zy/TP/index.php/Admin/User（__或者/zy/TP/index.php/Admin/User 兼容考虑）： 会替换成当前控制器的URL地址（不含域名）
	/zy/TP/index.php/Admin/User/edit：会替换成当前操作的URL地址 （不含域名）
	/zy/TP/index.php/Admin/User/edit?id=13： 会替换成当前的页面URL -->
	<!-- 内置标签 -->
	
		{$title}
	

	<include file="public/index">
</body>
</html>