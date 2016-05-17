<?php 
	namespace Admin\Controller;
	use Think\Controller;
	class GoodsController extends Controller{
		public function index(){
			echo '后台商品首页';
		}

		public function add(){
			echo '后台商品添加';
		}

		public function insert(){
			echo '后台商品数据插入';
		}

		public function edit(){
			echo '后台商品的修改';
		}

		public function update(){
			echo '后台商品的数据修改';
		}

		public function del(){
			echo '后台商品的删除';
		}
	}


 ?>