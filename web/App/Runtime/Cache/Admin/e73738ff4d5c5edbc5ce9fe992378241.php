<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form action="<?php echo U('Admin/User/insert');?>" method="post">
		用户名: <input type="text" name="username">
		<br>
		密码: <input type="password" name="password">
		<br>
		<input type="submit" value="提交">
	</form>
</body>
</html>