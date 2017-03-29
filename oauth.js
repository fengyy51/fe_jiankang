$(function() {
	var $oauth = $("#a_oauth");

	//获取code
	$oauth.on('click', function() {
			var appid = "wx63d2b1530c8bb787";
			var redirect_uri = encodeURI("http://huzhu.liuhongnan.com");
			var response_type = "code";
			var scope = "snsapi_userinfo";
			var state = "1";
			var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=" + redirect_uri + "&response_type=" + response_type + "&scope=" + scope + "&state=" + state + "#wechat_redirect";
			window.location.href = url;
		})
		//获取access_token
	if ((code = getQueryString("code")) != null) {
		var appid = "wx63d2b1530c8bb787";
		var secret = "c11cd78715dbe2679c34bcce12311573";
		var grant_type = "authorization_code";
		var url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appid + "&secret=" + secret + "&code=" + code + "&grant_type=" + grant_type;
		getAccessToken(url);
	}


	//请求本服务后台
	function getAccessToken(url) {
		$.ajax({
			url: url,
			success: function(res) {
				alert("hehe");
				//获取用户基本信息
				res = typeof res === 'string' ? JSON.parse(res) : res;
				getUserInfo(res);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$("#div_con").text(XMLHttpRequest.status + ";" + XMLHttpRequest.readyState + ";" + textStatus);
				getUserInfo(res);
			}
		})
	}

	//请求本服务后台
	function getUserInfo(data) {
		alert(data);
		var access_token = data.access_token;
		var openid = data.openid;
		var lang = "zh_CN";
		var url = "https://api.weixin.qq.com/sns/userinfo?access_token=" + access_token + "&openid=" + openid + "&lang=" + lang;

		$.ajax({
			url: url,
			success: function(res) {
				res = typeof res === 'string' ? JSON.parse(res) : res;
				$("#user_div").show();
				console.log("信息", res);
				var user_img = res.headimgurl;
				var user_info = res.nickname;
				var openid = res.openid;
				$("#user_img").attr("src", user_img);
				$("#user_name").text(user_info);
			}
		})
	}
})