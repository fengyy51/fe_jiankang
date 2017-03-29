$(document).ready(function(){

	var nickName,sex,homeAddr,phone,email ;

	$.ajax({
		url : severAddress + "/package.json" ,
		type : "GET" ,
		dataType : "json" ,
		success : function(data) {
			nickName = data.data.nickName ;
			sex = data.data.sex ;
			$.ajax({
				url : severAddress + "/newjiekou.json" ,
				type : "GET" ,
				dataType : "json" ,
				success : function(data) {
					homeAddr = data.data.homeAddress ;
					phone = data.data.phone ;
					email = data.data.email ;

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
					var real = [nickName] ;
					children = addList_manage(content,real,addr) ;
					s.push(children) ;
					s.push('<div class="am-whitespace ws10px"></div>') ;
					
					
					var addr = [currentUrl+'/personal_information_age.html',currentUrl+'/personal_information_sex.html',currentUrl+'/true_name.html'] ;
					var real = ["年龄",sex,""] ;
					var content = ["年龄","性别","身份证号"] ;
					var children ;
					children = addList_manage(content,real,addr) ;
					s.push(children) ;
					s.push('<div class="am-whitespace ws10px"></div>') ;
					
					var addr = [currentUrl+'/personal_information_phone.html',currentUrl+'/personal_information_email.html',currentUrl+'/personal_information_email.html'] ;
					var real = [phone,email,homeAddr] ;
					var children ;
					var content = ["手机号","邮箱","地址"] ;
					children = addList_manage(content,real,addr) ;
					s.push(children) ;
					
					s.push('</div>') ;

					$("#trueInformation").html( s.join('') ) ;
				} ,
				error : function(data) {
					alert("error2") ;
				} ,
			}) ;
		} ,
		error : function(data) {
			alert("error1") ;
		} ,
	}) ;
}) ;