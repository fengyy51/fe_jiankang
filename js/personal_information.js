$(document).ready(function() {
    var currentUrl = window.location.href;
    currentUrl = currentUrl.split("/");
    currentUrl.pop();
    currentUrl = currentUrl.join("/");
    var state = getQueryString("state");
    if (state != null) {
        var code = getQueryString("code");
        var data = { "code": code };
        Ajax(data, "post", severAddress + "/user/do-auth",
            function(data) {
                var data = JSON.parse(data);
                // var headurl = data.data.headImgUrl;
                // loadDom(headurl);
                //window.location.href = "http://huzhu.liuhongnan.com/page/personal_information.html" ;
                window.location.href = uri + "/page/sign_up.html" ;

            }, true
        );
    } else {
        var data = {};
        Ajax(data, "post", severAddress + "/user/get-wechat-info",
            function(data) {
                var data = JSON.parse(data);
                if (data.isAuth == false) {
                    // alert("123");
                    //var https = encodeURI("https://huzhu.liuhongnan.com/page/personal_information.html") ;
                    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx63d2b1530c8bb787&redirect_uri=http%3a%2f%2fhuzhu.liuhongnan.com%2fpage%2fpersonal_information.html&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
                    //window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx63d2b1530c8bb787&redirect_uri=https%3a%2f%2fhuzhu.liuhongnan.com%2fpage%2fpersonal_information.html&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
                } else if (data.isLogin == false) {
                    //window.location.href = "http://huzhu.liuhongnan.com/page/sign_up.html" ;
                    window.location.href = uri + "/page/sign_up.html";
                } else {
                    // alert("yes!!!!!!!");
                    var headurl = data.data.headImgUrl;
                    loadDom(headurl);
                }
            }, true
        );
    }

    //load dom
    function loadDom(headurl) {
        var children;
        children = '<img src="' + headurl + '" width="100%" display:"block" height="550px">';
        $("#headPicture").html(children);

        //个人信息
        s = [];
        var imgAddr = ["../resource/img/account.png", "../resource/img/image-text.png", "../resource/img/machinery.png"];
        s.push('<div class="am-list-body">');
        var children;
        var content = ["&nbsp&nbsp我的资料管理", "&nbsp&nbsp我的电子凭证", "&nbsp&nbsp我的收货地址"];
        var addr = [currentUrl + "/personal_information_manage.html", currentUrl + "/electronic_certificate.html", currentUrl + "/shop_address.html"];
        children = addListAddr(content, imgAddr, addr);
        s.push(children);
        s.push('<div class="am-whitespace ws10px"></div>');


        //健康模块
        var imgAddr = ["../resource/img/保障.png", "../resource/img/cart.png"];
        var children;
        var content = ["&nbsp&nbsp体质测评", "&nbsp&nbsp爱康商城"];
        var addr = [currentUrl + "/tizhi.html", currentUrl + "/shopping.html"];
        children = addListAddr(content, imgAddr, addr);
        s.push(children);
        s.push('<div class="am-whitespace ws10px"></div>');

        //区块链
        var imgAddr = ["../resource/img/积分.png", "../resource/img/卡包.png", "../resource/img/pic.png"];
        var children;
        var content = ["&nbsp&nbsp积分管理", "&nbsp&nbsp电子钱包", "&nbsp&nbsp区块链公示"];
        var addr = [currentUrl + "/jifen.html", currentUrl + "/money.html", currentUrl + "/gongshi.html"];
        children = addListAddr(content, imgAddr, addr);
        s.push(children);

        s.push('</div>');

        $("#personalInformation").html(s.join(''));
    }
});
