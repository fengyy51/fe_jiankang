function addList(content,imgAddr) {
	if (arguments.length == 2) {
		var children = [] ;
		var s = [] ;
		for (var i = 0 ; i < content.length ; i ++ ) {
			var st = '<a href="#" class="am-list-item"><div class="am-list-content">' + content[i] + '</div>' + 
			'<div class="am-list-thumb right"><img src="' + imgAddr[i] + '" alt="图片描述" /></div>' +
				'<div class="am-list-arrow" aria-hidden="true"><span class="am-icon arrow horizontal"></span></div>' + '</a>' ;
			s.push(st) ;
		}
		children.push(  s.join('') ) ;
		return children ;
	}
}
//personal_information_manage
function addList_manage(content,real) {
	if (arguments.length == 2) {
		var children = [] ;
		var s = [] ;
		for (var i = 0 ; i < content.length ; i ++ ) {
			var st = '<a href="#" class="am-list-item"><div class="am-list-content">' + content[i] + '</div>' + 
			'<div class="am-list-thumb right">' + real[i] + '</div>' +
				'<div class="am-list-arrow" aria-hidden="true"><span class="am-icon arrow horizontal"></span></div>' + '</a>' ;
			s.push(st) ;
		}
		children.push(  s.join('') ) ;
		return children ;
	}
}