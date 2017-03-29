$(document).ready(function(){
	function addChildren() {
		var name = ["phoneNumber","identifyCode"] ;
		var placeholder = ["输入手机号","输入验证码"] ;
		var type = ["text","text"] ;
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
	children.push('<div class="am-whitespace ws50px"></div>') ;
	children.push('<div class="am-list form">') ;
	children.push('<div class="am-whitespace ws30px"></div>') ;
	children.push('<button type="button" class="am-button" id="signup">保&nbsp&nbsp存</button>') ;
	children[1] += ( addChildren() + '</div>' ) ;
	$("#register").addClass("am-wingblank wb30px") ;
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

	//检测密码合法性
	/*
	$("#password").blur(function(){
		var $r = $("#password") ;
		if ($r.val().length < 6  | $r.val().length > 15) {
			$("#checkPassword").html("密码长度不合法") ;
			$r.parent().parent().addClass("am-list-item-error") ;
		}
	}) ;
	
	$("#password").focus(function(){
		var $r = $("#password").parent().parent() ;
		if ($r.hasClass("am-list-item-error")) {
			$("#checkPassword").html("") ;
			$r.removeClass("am-list-item-error") ;
		}
	}) ;
	
	//检测确认密码合法性

	$("#confirmPassword").blur(function(){
		var $r = $("#password") ;
		if ($r.val() != $(this).val()) {
			$("#checkConfirmPassword").html("两次输入密码不同") ;
			$("#confirmPassword").parent().parent().addClass("am-list-item-error") ;
		}
	}) ;

	$("#confirmPassword").focus(function(){
		var $r = $(this).parent().parent() ;
		if ($r.hasClass("am-list-item-error")) {
			$("#checkConfirmPassword").html("") ;
			$r.removeClass("am-list-item-error") ;
		}
	}) ;
	*/
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


