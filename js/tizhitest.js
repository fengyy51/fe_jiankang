//九种体质对应数据数组
var valueMap=new Array();
//返回给后台的字符串
var returntizhi;
//保存转化分是否小于30 40 （0 1）  大于为10
var flag=0;
//返回给后台的字符串转化为汉字
var returnHanzi=["","气虚","特禀","血瘀","阳虚","阴虚","痰湿","湿热","气郁"];

$(document).ready(function() {
    //初始化操作，包含map数组初始化以及ajax获取数据
    init();
    // 选择性别后即隐藏 问题开始显示
    $('#btn-sex-male').click(function() {
        $('#real-title-tizhi').hide();
        // $('#questions').find('#no-17 p').css("display","none");
        // $('#questions').find('#no-17 options').css("display","none");
        // $('#questions').find('#no-17 p').addClass('disable');
        $('#btn-sex-male').addClass('clicked');
        $('#questions').find('#no-1').removeClass('disable');
        $('#questions').find('#no-1').addClass('active');
        action();
    });

    $('#btn-sex-female').click(function() {
        $('#real-title-tizhi').hide();
        // $('#questions').find('#no-16 p').css("display","none");
        // $('#questions').find('#no-16 options').css("display","none");
        // $('#questions').find('#no-17 p span').html("16");
        // $('#questions').find('#no-17 ').attr("name","16");
        $('#btn-sex-female').addClass('clicked');
        $('#questions').find('#no-1').removeClass('disable');
        $('#questions').find('#no-1').addClass('active');
        action();
    });
});
function init(){
    //valueMap初始化
    for(var k=0;k<9;k++){
    valueMap[k]=new Array();
    for(var j=0;j<11;j++){
         valueMap[k][j]="";         
         }
    }
    valueMap[0][0]="pinghezhi";valueMap[1][0]="qixuzhi";valueMap[2][0]="telinzhi";
    valueMap[3][0]="xueyuzhi";valueMap[4][0]="yangxuzhi";valueMap[5][0]="yinxuzhi";
    valueMap[6][0]="tanshizhi";valueMap[7][0]="shirezhi";valueMap[8][0]="qiyuzhi";
    // console.log(valueMap);
    //获取json文件内容
    $.ajax({
            url:"../json/ceshiquestion.json",
                    
            type:"GET",
            dataType:"json",
             success : function(json){
                question=json.data.item;
                $.each(question,function(i){
                    // console.log(this.content);
                 var strHtml=makeQuestionHtml(i+1,this.tagID,this.content,this.tizhi,"没有","很少","有时","经常","总是");
                    $('#questions').append(strHtml);
                    // console.log(strHtml);
                    
                });
            },
            error:function(error){
                 alert('fail');
                console.log(error);
            }
    });
}
//问题呈现函数
function makeQuestionHtml(questionIndex,questionTagId,questioncontent,questiontizhi,b1,b2,b3,b4,b5){
    var optionHtml='<p><span class="question-no">'+questionTagId+'</span>/60'+questioncontent+'</p>'+'<div class="question-options"><div class="am-button-group " role="group" aria-label="" > <button type="button" class="am-button white " value=1>'+b1+'</button>'
                +' <button type="button" class="am-button white " value=2 >'+b2+'</button>'+
                '<button type="button" class="am-button white " value=3>'+b3+'</button>'
                +'<button type="button" class="am-button white " value=4>'+b4+'</button>'
                +'<button type="button" class="am-button white " value=5>'+b5+'</button>'
                +' </div> </div></div>';
                // console.log(questioncontent);
                // console.log(optionHtml);
    var html='<div class="question disable num"'+' tizhi='+questiontizhi+' id="no-'+questionTagId+'"'+' name='+questionTagId+'>'+optionHtml+'</div>';
    return html;

}
//判断字符串数组内容是否有和某字符串相等的值 jsontizhi数组包含两个字符串
 function in_array(needle, haystack) {
            if(haystack){
            var data=haystack.split(",")
            var flag=false;
            // console.log(data.length);
            // console.log(data)
            if(data.length==1){
                // for(var i=0;i<data[0].length;i++){
                //     if(toString(data[0][i])!=toString(needle[i])){
                //         return false;
                //     }
                // }
                if(data==needle)
                {
                    return true;
                }
                else{
                    return false;
                }
            }
            if(data.length==2){
               var j=0;
                    for(;j<data[0].length;j++){
                        if(data[0][j]!=needle[j]){
                            flag=false;
                            break;
                        }
                    }
                    if(j==data[0].length){
                        flag=true;
                        j=0;
                        return true;
                    }
                    else{
                        for(j=0;j<data[1].length;j++){
                        if(data[1][j]!=needle[j]){
                            flag=false;
                            break;
                        }
                    }
                    }
                    if(j==data[1].length){
                        flag=true;
                        return true;
                    }
                    return false;

                
            }
            }
          //       for(var j in data){
          //       // console.log(haystack[j]);
          //       // for(var j=0;j<haystack.length;j++) {
          //     if(data[j] != needle[j]&&$data.length==1)
          //     {
          //       return false;
          //   // break;
          //     }
          //     if(data.length==2)
                
          // // }
          //   }
          //   }
            
          
          // return true;
 }
  
function action() {
    $(' .am-button').bind('click',function(event) {
        //获取点击所在行数  // 单击此行按键后方才显示下一行
        var i = $(this).parents('.num').attr("name");
            var j = parseInt(i) + 1;
            $('#no-' + j).removeClass('disable');
            $('#no-' + j).addClass('active');
        //点击同一行两遍时只显示第二次的值，第一次的按键不显示 并把之前同一行的数值删除，添加新值
        if ($(this).parents('.true').length) {
            $(this).parent().find($('.am-button')).css("backgroundColor", "rgba(255,255,255,0.5)");;
            $(this).css("backgroundColor", "rgba(36, 161, 23,0.5)");
            //滚动显示
            $(window).scrollTop($(this).parents('.question').offset().top - 60);
             for(var i=0;i<9;i++){
                    for(var j=1;j<9;j++){
                    // console.log(valueMap[i][0]);
                    // console.log($(this).parents('.question').attr('tizhi'));
                    // console.log(in_array(valueMap[i][0],$(this).parents('.question').attr('tizhi')));
                    if (in_array(valueMap[i][0],$(this).parents('.question').attr('tizhi'))){
                        var val= $(this).attr("value");
                        if(valueMap[i][j]==$(this).parent().attr(valueMap[i][0]))
                        {
                            $(this).parent().attr(valueMap[i][0], parseInt(val));
                            valueMap[i][j]=val;
                            break;
                        }                    
                    }
                }
            }
            // console.log(valueMap[0]);
            //          console.log(valueMap[1]);
                     // console.log(valueMap[8]);
             //     // 将父类中保存的上次此行的按键删除  不同类型都保存相应的数值
            
            // if (in_array("qixuzhi",$(this).parents('.question').attr('tizhi'))) {
            //     // $(this).parents('.btn-group-justified').find($(".btn[name="+pos+"]")).css("backgroundColor","rgba(255,255,255,0.5)");

            //     qixuzhi.splice($.inArray($(this).parent().attr('valueqixu'), qixuzhi), 1);
            //     var i = $(this).attr("value");
            //     $(this).parent().attr('valueqixu', parseInt(i));
            //     // postizhi[1]=parseInt(i); 
            //     qixuzhi.push(i);
            //     // console.log(qixuzhi);
            // }

        }

        //第一次单击此行时，显示点击按键，判断所属体质类别，将对应数值添加到相应类别的数组中
        else {

            // 单击后添加背景色
            $(this).css("backgroundColor", "rgba(36, 161, 23,0.5)");
           
            //{
                // var upHeight = $('#no-' + 1).height();
                // $('#no-' + j).animate({
                //         marginBottom: upHeight
                //     },
                //     100,
                // scrool();

                $(window).scrollTop($(this).parents('.question').offset().top - 60);
                // console.log($(window).scrollTop($('#no-' + j).offset().top - 60));
              
                for(var i=0;i<9;i++){
                    for(var j=1;j<9;j++){
                    // console.log(valueMap[i][0]);
                    // console.log(valueMap[i][0].length);
                    
                    // console.log($(this).parents('.question').attr('tizhi'));
                    // console.log(in_array(valueMap[i][0],$(this).parents('.question').attr('tizhi')));
                    if (in_array(valueMap[i][0],$(this).parents('.question').attr('tizhi'))){
                        var val= $(this).attr("value");
                        $(this).parent().attr(valueMap[i][0], parseInt(val));
                        $(this).parents('.question').addClass('true');
                // postizhi[0]=parseInt(i);   
                        if(valueMap[i][j]=="")
                        {
                            valueMap[i][j]=val;
                            break;
                        }
                    }
                     // console.log(valueMap[0]);
                     // console.log(valueMap[6]);
                     // console.log(valueMap.get("qixuzhi"));
                    }
                }
                // console.log($(this).parents('.question').hasClass('true'));
        }
    });
    $('#no-' + 15).click(function(event) {
            sixtyquestion();   
    }); 
    $('#female .am-button').click(function(event) {
            // console.log(valueMap[7]);
            tijiao();   
       
    }); 
    $('#male .am-button').click(function(event) {
            // console.log(valueMap[7]);
            tijiao();   
    });
}

// function scrool() {
//      $('#questions .am-button').bind('click',function(event){
//         // event.preventDefault();
//         $('html,body').animate(
//         {
//             scrollTop: $(this).offset().top
//         },250);
//      });
//     // body...
// }

function sixtyquestion(){
    if($(' #btn-sex-male').hasClass('clicked'))
    {
        // console.log($('#btn-sex-male').hasClass('clicked'));
        $(' #male').removeClass('disable');
        $(' #male').addClass('active');
        $(' #male p').removeClass('disable');
        $(' #male p').addClass('active');
    }
     if($(' #btn-sex-female').hasClass('clicked'))
    {
        // console.log($('#btn-sex-female').hasClass('clicked'));
        $(' #female').removeClass('disable');
        $(' #female').addClass('active');
        $(' #female p').removeClass('disable');
        $(' #female p').addClass('active');
        // console.log($('#female').addClass('active'));
        // console.log($('#female p').addClass('active'));
      
    }
        
 }   
function tijiao() {
    // dataChuli();
    var $tijiao = $('<div class="tijiao"><img src="../resource/fonts/tijiao.png"> <button type="button" name="tijiao">提交测试</div>');
    var $form = $('form');
    if (!$form.find('.tijiao').length) {
        $form.append($tijiao);
        dataChuli();   
    }

}
//总的处理数据函数
var dataChuli=function(){
    //算出原始分数
    yuanshiHe();
    //算出转换分数 
    zhuanhua();
    //判断出结果
    panduan();
   
}
var yuanshiHe=function(){
    var sum=0;
    for(var i=0;i<9;i++){
        for(var j=1;j<9;j++){
            // console.log(valueMap[i][j]);

            if(valueMap[i][j]!=""){
                 sum=sum+(parseInt(valueMap[i][j]));
            }
            if(j==8){     
                    valueMap[i][9]=parseInt(sum);
                     // console.log(valueMap[i][9]);
                    sum=0;
            }
        }           
    }
}
var zhuanhua=function(){
    var len=0;
    for(var i=0;i<9;i++){
        for(var j=1;j<9;j++){
          
            if(valueMap[i][j]!=""){
                len++;
            }
            if(j==8){
                var data=valueMap[i][9];
                valueMap[i][10]=[(data-len)/(len*4)]*100; 
                console.log(valueMap[i][10]);   
                len=0;
            }
        }           
    }
    
}
var panduan=function(){
    for(var i=1;i<9;i++){
        if(valueMap[i][10]<30){
            flag+=0;
       
        }
        if(valueMap[i][10]>=30&&valueMap[i][10]<40){
        returntizhi="倾向是"+returnHanzi[i]+"体质";
        flag+=1;
         }
        if(valueMap[i][10]>=40){
        returntizhi="是"+returnHanzi[i]+"体质";
        flag+=10;
         }
    }
      if(valueMap[0][10]>=60&&flag==0){
            returntizhi+=("是平和质");
        }
         else if(valueMap[0][10]>=60&&flag<10){
            returntizhi+=("基本是平和质");
        }
        console.log(returntizhi);   
  
};