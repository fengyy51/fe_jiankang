severAddress = "http://123.57.37.50:8081" ;
//severAddress = "http://127.0.0.1:8080" ;
//severAddress = "http://169.254.212.67:8081" ;
appid = 'wx63d2b1530c8bb787' ;
redirect_uri = encodeURI("http://huzhu.liuhongnan.com") ;
uri = "http://huzhu.liuhongnan.com" ;

function Ajax(postData , method , url , f) {
	var query = "" ;
	var cou = 0 ;

	for (var prop in postData) {
		if (cou == 0) {
			query += prop + "=" + postData[prop] ;
		} else {
			query += "&" + prop + "=" + postData[prop] ;
		}
	}

	if (method == "get") {
		if (query != "") {
			query = "?" + query ;
			url += query ;
		}
	}

	var xhr = new XMLHttpRequest() ;
	xhr.responseType = "text" ;
	if (arguments.length == 5) {
		xhr.withCredentials = arguments[4] ;
	}
	xhr.open(method , url , true) ;
	xhr.onreadystatechange = function(){
	    var XMLHttpReq = xhr ;
	    if (XMLHttpReq.readyState == 4) {
	        if (XMLHttpReq.status == 200 || XMLHttpReq.status == 304) {
	            var text = XMLHttpReq.responseText ;
	            f(text) ;
	        }
	    }
	} ;
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	if (method == "post") {
		if (query == "") {
			xhr.send() ;
		} else {
			xhr.send(query) ;
		}
	} else {
		xhr.send() ;
	}
}


function isAuth_isLogin(data) {
	var data = JSON.parse(data) ;
	if (data.isAuth == false) {
		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx63d2b1530c8bb787&redirect_uri=http%3a%2f%2fhuzhu.liuhongnan.com%2fpage%2fpersonal_information.html&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect" ;

	} else if(data.isLogin == false) {
		window.location.href = "http://huzhu.liuhongnan.com/page/sign_up.html" ;
	}
}	