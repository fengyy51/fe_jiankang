$(document).ready(function(){
	$("#header").html('<div class="am-list-body"><div class="am-list-item"><div class="am-list-content am-ft-center">个人设置</div></div></div>') ;

	var currentUrl = window.location.href ;
	currentUrl = currentUrl.split("/") ;
	currentUrl.pop() ;
	currentUrl = currentUrl.join("/") ;

	s = [] ;
	s.push('<div class="am-list-body">') ;
	var children ;
	var addr = [currentUrl+'/true_name.html'] ;
	var content = ["真实姓名"] ;
	var real = ["目前的姓名"] ;
	children = addList_manage(content,real,addr) ;
	s.push(children) ;
	s.push('<div class="am-whitespace ws10px"></div>') ;
	
	
	var addr = [currentUrl+'/personal_information_age.html',currentUrl+'/personal_information_sex.html',currentUrl+'/true_name.html'] ;
	var real = ["年龄","性别",""] ;
	var content = ["年龄","性别","身份证号"] ;
	var children ;
	children = addList_manage(content,real,addr) ;
	s.push(children) ;
	s.push('<div class="am-whitespace ws10px"></div>') ;
	
	var addr = [currentUrl+'/personal_information_phone.html',currentUrl+'/personal_information_email.html',currentUrl+'/personal_information_email.html'] ;
	var real = ["","邮箱","地址"] ;
	var children ;
	var content = ["手机号","邮箱","地址"] ;
	children = addList_manage(content,real,addr) ;
	s.push(children) ;
	
	s.push('</div>') ;

	$("#trueInformation").html( s.join('') ) ;
}) ;