$(document).ready(function(){

	var currentUrl = window.location.href ;
	currentUrl = currentUrl.split("/") ;
	currentUrl.pop() ;
	currentUrl = currentUrl.join("/") ;
	//ajax
	var headurl ;
	$.ajax({
		url : severAddress + "/user/is-auth" ,
		type : "POST" ,
		dataType : "json" ,
		data : { "openId" :"oDvDiwlzaTUU4GHjKURJ4zu_xzGY" } ,
		success : function(data) {
			//是否注册
			alert("success") ;
			if (data.data.isRegister == false) {
				alert("yes") ;
				window.location.href = currentUrl + "/sign_up.html" ;
			} else {
				//是否已经被授权
				if (data.data.result == false) {

				} else {
					headurl = data.data.headImgUrl ;
					var children ;
					children = '<img src="../' + headurl + '" width="100%">' ;
					$("#headPicture").html(children) ;

					//add dom
					//个人信息
					s = [] ;
					var imgAddr = ["../resource/img/account.png","../resource/img/image-text.png","../resource/img/machinery.png"] ;
					s.push('<div class="am-list-body">') ;
					var children ;
					var content = ["&nbsp&nbsp我的资料管理","&nbsp&nbsp我的电子凭证","&nbsp&nbsp我的收货地址"] ;
					var addr = [currentUrl + "/personal_information_manage.html",currentUrl + "/electronic_certificate.html", currentUrl + "/shop_address.html"] ;
					children = addListAddr(content,imgAddr,addr) ;
					s.push(children) ;
					s.push('<div class="am-whitespace ws10px"></div>') ;
					
					
					//健康模块
					var imgAddr = ["../resource/img/保障.png","../resource/img/cart.png"] ;
					var children ;
					var content = ["&nbsp&nbsp体质测评","&nbsp&nbsp爱康商城"] ;
					var addr = [currentUrl + "/tizhi.html",currentUrl + "/shopping.html"] ;
					children = addListAddr(content,imgAddr,addr) ;
					s.push(children) ;
					s.push('<div class="am-whitespace ws10px"></div>') ;
					
					//区块链
					var imgAddr = ["../resource/img/积分.png","../resource/img/卡包.png","../resource/img/pic.png"] ;
					var children ;
					var content = ["&nbsp&nbsp积分管理","&nbsp&nbsp电子钱包","&nbsp&nbsp区块链公示"] ;
					var addr = [currentUrl + "/jifen.html",currentUrl + "/money.html", currentUrl + "/gongshi.html"] ;
					children = addListAddr(content,imgAddr,addr) ;
					s.push(children) ;
					
					s.push('</div>') ;

					$("#personalInformation").html( s.join('') ) ;
				}
			}
		} ,	
		error : function(data) {
			alert("error") ;
		} ,
	}) ;
		
}) ;