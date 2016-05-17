<?php
namespace Home\Controller;
use Think\Controller;
class DlController extends Controller {
    public function dl(){
       $this->display();
    }
    public function find(){
    		// echo '<pre>';
    		// 	print_r($_POST);
    		// echo '</pre>';
    		$user=M('user');
    		$username=$_POST['username'];
    		$pwd=$_POST['pwd'];
    		$info = $user->where('username = "'.$username.'" and pwd = "'.$pwd.'"')->select();
  				// echo '<pre>';
  				// 	print_r($info);
  				// echo '</pre>';
  			if(!empty($info)){
				session_start();
				$_SESSION['uid'] = $info['id'];
				session('username',$info['username']);
				$this->success('登录成功',U('Home/Index/index'),3);
			}else{
				$this->error('登录失败','',3);
			}
    }
}