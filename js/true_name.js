$(document).ready(function(){

	$("#header").html('<div class="am-list-body"><div class="am-list-item"><div class="am-list-content am-ft-center">个人设置</div></div></div>') ;

	$("#nameForm").html('<div class="am-list-item">' + 
			'<div class="am-list-content"><div class="am-list-title">填写您的真实姓名和身份证号</div>' + 
			'<div class="am-list-brief"><p><span id="hongse">*</span>请放心！我们会严格遵守法律法规，保护您的个<br>人信息和隐私</p></div>' + 
		'</div></div>' + '<div class="am-list-item am-input-autoclear"><div class="am-list-label">真实姓名</div>' + 
			'<div class="am-list-control"><input type="text" placeholder="请输入真实姓名" id="name"></div></div>' + 
			'<div class="am-list-item am-input-autoclear"><div class="am-list-label">身份证号</div><div class="am-list-control">' +
		    '<input type="text" placeholder="仅用于申请互助，严格保密" id="cardNum"></div></div>' ) ;
	$("#footer").html('<span id="hongse" class="wenzi">重要提示：</span>' + 
	'<span class="wenzi">根据会员公约，真实姓名和身份证将作为互助申请时最重要的身份认证材料，一旦输入，永久不可更改，请务必认真填写。</span>' + 
	 '<div class="am-whitespace ws30px"></div><button id="submitTrueName" type="button" class="am-button">完&nbsp&nbsp&nbsp&nbsp成</button>') ;

	$("#submitTrueName").click( function(){
		var name = $("#name").val() ;
		var cardNum = $("#cardNum").val() ;
		if (cardNum.length() != 18) {
			$("#dialog").css("aria-hidden","false") ;
		}
	}) ;
}) ;