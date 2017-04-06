severAddress = "https://123.57.37.50:8081" ;
//severAddress = "http://127.0.0.1:8080" ;
//severAddress = "http://169.254.212.67:8081" ;
appid = 'wx63d2b1530c8bb787' ;
redirect_uri = encodeURI("https://huzhu.liuhongnan.com") ;
uri = "https://huzhu.liuhongnan.com" ;

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

	var xhr = new loadXMLDoc() ;
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

function loadXMLDoc()
{
	var xmlhttp = null ;
	if (window.XMLHttpRequest) {// code for all new browsers
  		xmlhttp = new XMLHttpRequest();
  	} else if (window.ActiveXObject) {// code for IE5 and IE6
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
  	return xmlhttp ;
}

function isAuth_isLogin(data) {
	var data = JSON.parse(data) ;
	if (data.isAuth == false) {
		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx63d2b1530c8bb787&redirect_uri=http%3a%2f%2fhuzhu.liuhongnan.com%2fpage%2fpersonal_information.html&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect" ;

	} else if(data.isLogin == false) {
		window.location.href = uri + "/page/sign_up.html" ;
	}
}	