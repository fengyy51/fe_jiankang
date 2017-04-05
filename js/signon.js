$(document).ready(function(){

	loadDom() ;
	function addChildren() {
		var name = ["phoneNumber","identifyCode","yanzhengCode"] ;
		var placeholder = ["输入手机号","输入校验码","输入验证码"] ;
		var type = ["text","text","text"] ;
		var div = [] ;
		for (var i = 0 ; i < name.length ; i++) {
			var s = '<div class="am-list-item am-input-autoclear"><div class="am-list-control"> \
				<input id="'+ name[i] +'" type="' + type[i] + '" placeholder="'+ placeholder[i] +'" value=""></div>'
			if (i == 0) {
				s += '<div class="am-list-button"><button type="button" id="sendIdentifyCode">发送校验码</button></div>' ;
			}
			if (i == 2) {
				//s += '<div class="am-list-thumb right"><img src="' + pic + '"/></div>' ;
				s += '<div class="am-list-thumb right" id="yanzhengmaImg"></div>' ;
			}
			s += '</div>' ;
			div.push(s) ;
		}
		var s = div.join('') ;
		return s ;
	} ;

	function loadDom() {
		var children = [] ;
		children.push('<div class="am-whitespace ws50px"></div>') ;
		children.push('<div class="am-list form">') ;
		children.push('<div class="am-whitespace ws30px"></div>') ;
		children.push('<button type="button" class="am-button" id="signup">登&nbsp&nbsp陆</button>') ;
		children[1] += ( addChildren() + '</div>' ) ;
		$("#register").addClass("am-wingblank wb30px") ;
		$("#register").html(children.join('')) ;
		document.getElementById("sendIdentifyCode").setAttribute("disabled",true) ;
	}	

	//发送ajax请求获得验证码
	var xhr = new XMLHttpRequest();    
    xhr.open("get", severAddress + "/user/get-captcha", true);
    xhr.responseType = "blob";
    xhr.withCredentials=true ;
    xhr.onload = function() {
        if (this.status == 200) {
            var blob = this.response;
            var img = document.createElement("img");
            img.onload = function(e) {
              window.URL.revokeObjectURL(img.src); 
            };
            img.src = window.URL.createObjectURL(blob);
            img.id = "yanzhengmaID" ;
			$("#yanzhengmaImg").html(img) ;
 	} }; xhr.send();

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
		var phoneNumber = $("#phoneNumber").val() ;
		var data = {"mobile" : phoneNumber} ;
		Ajax(data , "get" , severAddress + "/user/get-verify-code" , 
			function(data) {
				var data = JSON.parse(data) ;
				if (data.data.result == true) {
					alert("校验码发送成功") ;
				} else {
					alert("校验码发送失败") ;
				}
			}
			,true 
		) ;
	}) ;

	//检测手机号合法性
	function checkPhone(phone){ 
	    if(!(/^1[34578]\d{9}$/.test(phone))){ 
	        return false; 
	    } 
	    return true ;
	}

	//检测手机号重复
	$("#phoneNumber").blur(function(){
		var phoneNumber = $("#phoneNumber").val() ;
		if (checkPhone(phoneNumber) == false) {
			alert("手机号不合法") ;
		} else {
			var $sendIdentifyCode = document.getElementById("sendIdentifyCode") ;
			var data = {"mobile" : phoneNumber} ;
			Ajax(data , "get" , severAddress + "/user/mobile-is-repeat" , 
				function(data) {
					var data = JSON.parse(data) ;
					if (data.data.result == true) {
						$sendIdentifyCode.setAttribute("disabled" , true) ;
					} else {
						$sendIdentifyCode.removeAttribute("disabled") ;
					}
				} 
				//,true
			) ;
		}	
	}) ;

	//验证码按钮
	$("#yanzhengmaImg").click(function(){
		var xhr = new XMLHttpRequest();    
	    xhr.open("get", severAddress + "/user/get-captcha", true);
	    xhr.responseType = "blob";
	    xhr.withCredentials=true ;
	    xhr.onload = function() {
	        if (this.status == 200) {
	            var blob = this.response;
	            var img = document.createElement("img");
	            img.onload = function(e) {
	              window.URL.revokeObjectURL(img.src); 
	            };
	            img.src = window.URL.createObjectURL(blob);
	            img.id = "yanzhengmaID" ;
				$("#yanzhengmaImg").html(img) ;
	 	} }; xhr.send();
	}) ;

	//注册按钮
	$("#signup").click(function(){
		//检验验证码
		
		var yanzhengCode = $("#yanzhengCode").val() ;
		var data = {"answer":yanzhengCode} ;
		Ajax(data , "post" , severAddress + "/user/check-captcha" ,
			function(data) {
				var data = JSON.parse(data) ;
				if (data.data.result == false) {
					alert("验证码输入错误") ;
					$("#yanzhengmaImg").trigger("click") ;
				} else {
					//检验校验码
					var identifyCode = $("#identifyCode").val() ;
					var data = {"answer":identifyCode} ;
					Ajax(data , "post" , severAddress + "/user/check-verify-code" ,
						function(data) {
							var data = JSON.parse(data) ;
							if (data.data.result == false ) {
								alert("短信校验码错误") ;
								$("#yanzhengmaImg").trigger("click") ;
							} else {
								//注册
								var mobile = $("#phoneNumber").val() ;
								var data = {"mobile": mobile} ;
								Ajax(data , "post" ,severAddress + "/user/login" , 
									function(data) {
										var data = JSON.parse(data) ;
										var currentUrl = window.location.href ;
										currentUrl = currentUrl.split("/") ;
										currentUrl.pop() ;
										currentUrl = currentUrl.join("/") ;
										window.location.href = currentUrl + "/personal_information.html" ;
									}
									,true
								) ;
							}
						}
					 	,true
					 ) ;
				}
			}
			, true
		) ;
	}) ;

}) ;


