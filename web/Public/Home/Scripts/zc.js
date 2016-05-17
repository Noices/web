// alert('111111');
var input=document.getElementsByTagName('input');
for (var i = 0; i < input.length; i++) {
	input[i].onfocus = function(){
		this.placeholder="";
		// this.setAttribute('placeholder','');
	}
};
var CUSER=true;
$('form').submit(function(){
			CUSER = true;
			//丧失焦点事件
			$('input').trigger('blur');
			//检验是否正确
			if(!CUSER){
				return false;
			}
			//阻止默认行为
			return  true;
})
input[0].onblur=function(){
	var username=this.value;
	var reg = /^\w{5,16}$/;
	var res=reg.test(username);
	var userStatus=document.getElementById('userStatus');
	var Error=document.getElementById('Error');
	if(!res){
		userStatus.setAttribute('class','judej1');
		Error.innerHTML='*请重新输入合法的用户名';
		CUSER = false;
		return false;
	}else{
		userStatus.setAttribute('class','judej2');
		Error.innerHTML='';
	}

	var x = new XMLHttpRequest();
	x.onreadystatechange = function(){
		if(x.readyState == 4 && x.status == 200){
			var res = x.responseText;
			// console.log(res);
			if(res==1){
				userStatus.setAttribute('class','judej1');
				Error.innerHTML='*用户名已经存在';
				CUSER = false;
				return false;
			}else{
				userStatus.setAttribute('class','judej2');
				Error.innerHTML='';
			}
		}
	}
	x.open('get','vcode?username='+username+'',true);
	x.send();

}
input[1].onblur=function(){
	var pwd=this.value;
	var reg = /^\w{6,14}$/;
	var res=reg.test(pwd);
	var pwdStatus=document.getElementById('pwdStatus');
	var Error=document.getElementById('pwdError');
	if(!res){
		pwdStatus.setAttribute('class','judej1');
		Error.innerHTML='*请重新输入密码';
		CUSER = false;
		return false;
	}else{
		pwdStatus.setAttribute('class','judej2');
		Error.innerHTML='';
	}
}


input[2].onblur=function(){
	var pwd1=this.value;
	var pwdStatus1=document.getElementById('pwdStatus1');
	var pwd = input[1].value;
	var Error=document.getElementById('pwd1Error');
	if(pwd1!=pwd||pwd1==''){
		pwdStatus1.setAttribute('class','judej1');
		Error.innerHTML='*二次密码不正确';
		CUSER = false;
		return false;
	}else{
		pwdStatus1.setAttribute('class','judej2');
		Error.innerHTML='';
	}
}


input[3].onblur=function(){
	var vcode=this.value;
	var Error=document.getElementById('vco1Error');
	if(vcode==''){
		Error.innerHTML='*验证码错误';
		CUSER = false;
		return false;
	}else{
		Error.innerHTML='';
	}
	// var x = new XMLHttpRequest();
	// x.onreadystatechange = function(){
	// 	if(x.readyState == 4 && x.status == 200){
	// 		var res = x.responseText;
	// 		console.log(res);
	// 		if(res==0||vcode==''){
	// 			Error.innerHTML='*验证码错误';
	// 			CUSER = false;
	// 			return false;
	// 		}else{
	// 			Error.innerHTML='';
	// 		}
	// 	}
	// }
	// x.open('get','vcode1?vcode='+vcode+'',true);
	// x.send();
}
