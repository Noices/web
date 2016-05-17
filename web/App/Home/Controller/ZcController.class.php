<?php
namespace Home\Controller;
use Think\Controller;
class ZcController extends Controller {
    public function zc(){
    	$this->display();
    }
    public function vcode(){
    	$user=M('user');
    	$username=$_GET['username'];
    	// echo $username;
    	// $u = array('username'=>$username);
    	$res=$user->where("username='$username'")->select();
    	// var_dump($res);
    	if(empty($res)){
    		echo 0;
    	}else{
    		echo 1;
    	}
    }
    // public function vcode1(){
    // 	$user=M('user');
    // 	$vcode=$_GET['vcode'];
    //     echo $vcode;
    //         echo '<pre>';
    //             print_r($_SESSION);
    //         echo '</pre>';

    // 	function check_verify($code){    
    // 		$verify = new \Think\Verify();    
    // 		return $verify->check($code);
    // 	}
    // 	$res=check_verify($vcode);   	
    // 	if($res){
    // 		echo 1;
    // 	}else{
    // 		echo 0;
    // 	}
    // }
    public function yanzhen(){
    		// echo '<pre>';
    		// 	print_r($_POST);
    		// echo '</pre>';
        function check_verify($code){    
            $verify = new \Think\Verify();    
            return $verify->check($code);
        }
        $vcode=$_POST['vcode'];
        $res=check_verify($vcode); 
        if($res==false){
            $this->error('注册失败,验证码错误');
            exit;
        }
    	$user=M('user');
    		   //创建数据
        $user->create();
        //执行添加
       if($user->add()){
             //设置成功后跳转页面的地址，默认的返回页面是$_SERVER['HTTP_REFERER']
            $this->success('注册成功', U('Home/Dl/dl'),2);
       }else{
            //错误页面的默认跳转页面是返回前一页，通常不需要设置
            $this->error('注册失败');
       }
    }
}