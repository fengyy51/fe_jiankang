$(document).ready(function(){

	//个人信息
	var children = [] ;
	var imgAddr = ["../resource/img/account.png","../resource/img/image-text.png","../resource/img/machinery.png"] ;
	children.push('<img src="https://os.alipayobjects.com/rmsportal/DzdIWWtLuecXwwj.jpeg" width="100%">') ;
	$("#headPicture").html(children[0]) ;

	s = [] ;
	s.push('<div class="am-list-body">') ;
	var children ;
	var content = ["&nbsp&nbsp我的资料管理","&nbsp&nbsp我的电子凭证","&nbsp&nbsp我的收货地址"] ;
	children = addList(content,imgAddr) ;
	s.push(children) ;
	s.push('<div class="am-whitespace ws10px"></div>') ;
	
	
	//健康模块
	var imgAddr = ["../resource/img/保障.png","../resource/img/cart.png"] ;
	var children ;
	var content = ["&nbsp&nbsp体质测评","&nbsp&nbsp爱康商城"] ;
	children = addList(content,imgAddr) ;
	s.push(children) ;
	s.push('<div class="am-whitespace ws10px"></div>') ;
	
	//区块链
	var imgAddr = ["../resource/img/积分.png","../resource/img/卡包.png","../resource/img/pic.png"] ;
	var children ;
	var content = ["&nbsp&nbsp积分管理","&nbsp&nbsp电子钱包","&nbsp&nbsp区块链公示"] ;
	children = addList(content,imgAddr) ;
	s.push(children) ;
	
	s.push('</div>') ;

	$("#personalInformation").html( s.join('') ) ;
}) ;