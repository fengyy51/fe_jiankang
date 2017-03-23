$(document).ready(function(){

	//个人信息
	var children = [] ;
	children.push('<img src="https://os.alipayobjects.com/rmsportal/DzdIWWtLuecXwwj.jpeg" width="100%">') ;
	children.push('<div class="am-list-header">个人信息</div>') ;
	var s = [] ;
	var content = ["我的资料管理","我的电子凭证","我的收货地址"] ;
	for (var i = 0 ; i < content.length ; i ++ ) {
		var st = '' ;
		st += '<a href="#" class="am-list-item"><div class="am-list-content">' + content[i] + '</div></a>' ;
		s.push(st) ;
	}
	children.push('<div class="am-list-body">' + s.join('') + '</div>') ;
	$("#personalInformation").html(children[1] + children[2]) ;
	$("#headPicture").html(children[0]) ;

	//健康模块
	
	var children = [] ;
	children.push('<div class="am-list-header">关注健康</div>') ;
	s = [] ;
	var content = ["体质测评","爱康商城"] ;
	for (var i = 0 ; i < content.length ; i ++ ) {
		var st = '' ;
		st += '<a href="#" class="am-list-item"><div class="am-list-content">' + content[i] + '</div></a>' ;
		s.push(st) ;
	}
	children.push('<div class="am-list-body">' + s.join('') + '</div>') ;
	$("#healthModule").html(children.join('')) ;

}) ;