$(document).ready(function(){
	$("#header").html('<div class="am-list-body"><div class="am-list-item"><div class="am-list-content am-ft-center">性别</div></div></div>') ;
	$("#checkSex").html('<div class="am-list-body"><label class="am-list-item radio"><div class="am-list-thumb">' + 
        	'<img src="../resource/img/male.png" alt="图片描述"/></div><div class="am-list-content">男</div>' + 
      		'<div class="am-checkbox"><input type="radio" name="Sex"><span class="icon-check" aria-hidden="true"></span>' + 
      		'</div></label><label class="am-list-item radio"><div class="am-list-thumb">' + 
        	'<img src="../resource/img/female.png" alt="图片描述"/></div><div class="am-list-content">女</div>' + 
      		'<div class="am-checkbox"><input type="radio" name="Sex" checked="checked">' + 
        	'<span class="icon-check" aria-hidden="true"></span></div></label></div>') ;

	$("#submitSex").click(function() {
		alert($('input[type="radio"]:checked').parent().parent().text()) ;
	}) ;
}) ;