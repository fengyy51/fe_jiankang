$(document).ready(function(){
	$("#header").html('<div class="am-list-body"><div class="am-list-item"><div class="am-list-content am-ft-center">个人设置</div></div></div>') ;

	s = [] ;
	s.push('<div class="am-list-body">') ;
	var children ;
	var content = ["真实姓名"] ;
	var real = ["目前的姓名"] ;
	children = addList_manage(content,real) ;
	s.push(children) ;
	s.push('<div class="am-whitespace ws10px"></div>') ;
	
	

	var real = ["年龄","性别",""] ;
	var content = ["年龄","性别","身份证号"] ;
	var children ;
	children = addList_manage(content,real) ;
	s.push(children) ;
	s.push('<div class="am-whitespace ws10px"></div>') ;
	

	var real = ["","邮箱","地址"] ;
	var children ;
	var content = ["手机号","邮箱","地址"] ;
	children = addList_manage(content,real) ;
	s.push(children) ;
	
	s.push('</div>') ;

	$("#trueInformation").html( s.join('') ) ;
}) ;