severAddress ="http://123.57.37.50:8081";
//severAddress ="http://127.0.0.1:8080";
//severAddress ="http://169.254.212.67:8081";
appid ='wx63d2b1530c8bb787';
redirect_uri = encodeURI("http: //huzhu.liuhongnan.com");
uri ="http://huzhu.liuhongnan.com";

function Ajax(postData, method, url, f) {
    var query ="";
    var cou = 0;

    for (var prop in postData) {
        if (cou == 0) {
            query += prop + "=" + postData[prop];
        }
        else {
            query += "&" + prop + "=" + postData[prop];
        }
    }
    if (method == "get") {
        if (query != "") {
            query ="?"+ query;
            url += query;
        }
    }
    var xhr = new loadXMLDoc();

    if (arguments.length == 5) {
        xhr.withCredentials = arguments[4];
    }
    xhr.open(method, url, true);
    xhr.responseType ="text";

    xhr.onreadystatechange = function() {
        var XMLHttpReq = xhr;

        if (XMLHttpReq.readyState == 4) {

            if (XMLHttpReq.status == 200 || XMLHttpReq.status == 304) {
                var text = XMLHttpReq.responseText;
                f(text);
            }
        }
    }
    ;

    xhr.onerror = function(e) {
        alert("error!")
    }

    if (method == "post") {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (query == "") {
            xhr.send();
        }
        else {
            xhr.send(query);
        }
    }
    else {
        xhr.send();
    }
}
function loadXMLDoc() {
    var xmlhttp = null;

    if (window.XMLHttpRequest) {
        // code for all new browsers
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        // code for IE5 and IE6
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}
function isAuth_isLogin(data) {
    var data = JSON.parse(data);

    if (data.isAuth == false) {
        window.location.href ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx63d2b1530c8bb787&redirect_uri=http%3a%2f%2fhuzhu.liuhongnan.com%2fpage%2fpersonal_information.html&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
    }
    else if (data.isLogin == false) {
        window.location.href = uri + "/page/sign_up.html";
    }
}



//新AJAX封装
function AjaxNEW(type, url, data, success, withCredentials, failed) {
    // 创建ajax对象
    var xhr = null;

    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    var type = type.toUpperCase();
    // 用于清除缓存
    var random = Math.random();

    if(typeof data == 'object') {
        var str ='';

        for(var key in data) {
            str += key+'='+data[key]+'&';
        }
        data = str.replace(/&$/, '');
    }
    xhr.withCredentials = withCredentials;
    xhr.responseType ="text";

    if(type == 'GET') {
        if(data) {
            xhr.open('GET', url + '?' + data, true);
        }
        else {
            xhr.open('GET', url + '?t=' + random, true);
        }
        xhr.send();
    }
    else if(type == 'POST') {
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
    // 处理返回数据
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                success(xhr.responseText);
            }
            else {
                if(failed) {
                    failed(xhr.status);
                }
            }
        }
    }
}