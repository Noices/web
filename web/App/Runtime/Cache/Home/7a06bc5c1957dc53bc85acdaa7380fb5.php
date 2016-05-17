<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en" class="no-js">

    <head>

        <meta charset="utf-8">
        <link rel="shortcut icon" type="image/x-icon" href="/Public/Home/Image/ico.png" style="width:16px;height:16px" />
        <title>Fullscreen Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
        <link rel="stylesheet" href="/Public/Home/Css/reset.css">
        <link rel="stylesheet" href="/Public/Home/Css/supersized.css">
        <link rel="stylesheet" href="/Public/Home/Css/style.css">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

    </head>

    <body>

        <div class="page-container">
            <h1>登&nbsp;&nbsp;录</h1>
            <form action="<?php echo U('Home/Dl/find');?>" method="post">
                <input type="text" name="username" class="username" placeholder="请输入用户名">
                <input type="password" name="pwd" class="password" placeholder="请输入密码">
                <button type="submit">登 录 小 站</button>
                <div class="error"><span>+</span></div>
            </form>
            <div class="connect">
                <p>Or connect with:</p>
                <p>
                    <a class="facebook" href="" title=""></a>
                    <a class="twitter" href=""></a>
                </p>
            </div>
        </div>
        <div align="center">Collect from <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a></div>

        <!-- Javascript -->
        <script src="/Public/Home/scripts/jquery-1.8.2.min.js"></script>
        <script src="/Public/Home/scripts/supersized.3.2.7.min.js"></script>
        <script src="/Public/Home/scripts/supersized-init.js"></script>
        <script src="/Public/Home/Scripts/scripts.js"></script>

    </body>

</html>