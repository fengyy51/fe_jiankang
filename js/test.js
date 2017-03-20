$(document).ready(function(){
	function addChildren(node) {
		var name = ["phoneNumber","password","identifyCode"] ;
		var div = [] ;
		for (var i = 0 ; i < name.length ; i++) {
			s = '<div class="am-list-item am-input-autoclear"><div class="am-list-control"> \
				<input id="'+ name[i] +'" type="text" placeholder="输入手机号" value=""></div>'
			if (i == 0) {
				s += '<div class="am-list-button"><button type="button">发送校验码</button></div>' ;
			}
			div.push(s) ;
		}
	} ;
	var children = [] ;
	children.push('<div class="am-ft-center">会员注册</div>') ;
	children.push('<div class="am-whitespace ws30px"></div>') ;
	children.push('<div class="am-list form"></div>') ;
	children.push('<div class="am-whitespace ws30px"></div>') ;
	children.push('<div class="am-whitespace ws30px"></div>') ;

	$("#register")

}) ;


