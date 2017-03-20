$(document).ready(function(){
	function addChildren() {
		var name = ["phoneNumber","password","confirmPassword","identifyCode"] ;
		var placeholder = ["输入手机号","输入密码","确认密码","输入验证码"] ;
		var type = ["text","password","password","text"] ;
		var div = [] ;
		for (var i = 0 ; i < name.length ; i++) {
			var s = '<div class="am-list-item am-input-autoclear"><div class="am-list-control"> \
				<input id="'+ name[i] +'" type="' + type[i] + '" placeholder="'+ placeholder[i] +'" value=""></div>'
			if (i == 0) {
				s += '<div class="am-list-button"><button type="button" id="sendIdentifyCode">发送校验码</button></div>' ;
			}
			s += '</div>' ;
			div.push(s) ;
		}
		var s = div.join('') ;
		return s ;
	} ;
	var children = [] ;
	children.push('<div class="am-ft-center">会员注册</div>') ;
	children.push('<div class="am-whitespace ws30px"></div>') ;
	children.push('<div class="am-list form">') ;
	children.push('<div class="am-whitespace ws30px"></div>') ;
	children.push('<button type="button" class="am-button" id="signup">注册</button>') ;
	children[2] += ( addChildren() + '</div>' ) ;
	$("#register").html(children.join('')) ;

	//发送校验码
	$("#sendIdentifyCode").click(function(){
		var wait = 60 ;
		var $sendIdentifyCode = document.getElementById("sendIdentifyCode") ;
		function time(o) {
			if (wait == 0) {
            	o.removeAttribute("disabled");
                o.innerText = "发送校验码";
            } else { 
                o.setAttribute("disabled", true) ;
                o.innerText = "重新发送(" + wait + ")" ;
                wait-- ;
                setTimeout(function () {time(o) },1000) ;
            }
		} ;
		time($sendIdentifyCode) ;
	}) ;

	//注册按钮
	$("#signup").click(function(){
		var $phoneNumber = document.getElementById("phoneNumber") ;
		var $password = document.getElementById("password") ;
		var $confirmPassword = document.getElementById("confirmPassword") ;
		var $identifyCode = document.getElementById("identifyCode") ;

		if ($phoneNumber.value.length != 11 ) {
			alert("手机号格式不正确") ;
			$phoneNumber.value = "" ;
		}

		if ($password.value != $confirmPassword.value) {
			alert("两次输入密码不同") ;
			$password.value = "" ;
			$confirmPassword.value = "" ;
		}
	}) ;


}) ;
