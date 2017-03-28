$(document).ready(function(){

	//ajax
	var headurl ;
	var 
	$.post(severAddress + "/user/is-auth", { "openId": 1 }, function (data) {
    	if (data.isRegiste == false) {
        	//如果没有注册，跳转注册页面
            location.href = severAddress + "/page/sign_up.html" ;
        } else {
        	if (data.result == false) {
        		//如果没有授权
        	} else {
        		//授权成功，可以获得个人信息
        		headurl = data.headImgUrl ;
        	}
        }
    }) ;
	 
	var currentUrl = window.location.href ;
	currentUrl = currentUrl.split("/") ;
	currentUrl.pop() ;
	currentUrl = currentUrl.join("/") ;
	//个人信息
	var children ;
	children = '<img src="' + headurl + '" width="100%">' ;
	$("#headPicture").html(children) ;

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
}) ;