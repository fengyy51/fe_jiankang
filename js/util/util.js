$(document).ready(function() {
    var firstArray = [];

    firstArray[0] = '<div class="header"></div>';
    firstArray[1] = '<div class="bodyer"></div>';
    firstArray[2] = '<div class="footer"></div>';

    $("#Page").append(firstArray.join("");
    var secondArray = {};
    secondArray[0] = '<div class="am-tab" role="tablist"></div>';
    secondArray[1] = '<div class="am-search-inpage am-input-autoclear"></div>';
    var x=$("Page").children()[0];
    x.append(secondArray[0]);
    x.append(secondArray[1]);
    var y=$("Page").children().children()[0];
    thirdArray[0]='<a class="am-tab-item  selected" role="tab">首页</a>';
    thirdArray[1]='<a class="am-tab-item" role="tab">最热</a>';
});
