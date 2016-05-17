<?php 
	namespace Admin\Controller;
	use Think\Controller;
	class UserController extends Controller{
		public function index(){
			//echo '后台用户首页';
			//创建数据表对象
			$user=M('user');
			//查询数据
			$res=$user->select();
			var_dump($res);
		}

		public function add(){
			//解析模板
			// echo 'www';
			$this->display();
		}

		public function insert(){
			//echo '后台用户数据插入';
			var_dump($_POST);
			var_dump(U('Admin/User/insert'));
		}

		public function edit(){
			//echo '后台用户的修改';
			//var_dump($_GET);
			//大I函数 用来接收指定数据
			//var_dump(I('get.id'));
			//
			//分配变量
			$this->assign('title','用户的修改');
			//超全局变量
			//设置post
			$_POST['name']='zhangsan';
			//设置get
			$_GET['name']='李四';
			//设置session
			session_start();
			$_SESSION['user_id']=12;
			//设置cookie
			setcookie('abc','abcdef');

			//解析模板
			$this->display();
		}

		public function update(){
			echo '后台用户的数据修改';
		}

		public function del(){
			echo '后台用户的删除';
		}
	}

 ?>