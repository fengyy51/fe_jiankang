//九种体质对应数据数组
var yangxuzhi = ["阳虚", 7];
var yinxuzhi = [8];
var qixuzhi = ["气虚", 8];
var tanshizhi = [8];
var shirezhi = [7];
var xueyuzhi = [7];
var telinzhi = [7];
var qiyuzhi = ["qiyuuzhi", 7];
var pinghezhi = ["平和", 8];
// //保存上次点击按键的name值
// var postizhi=[];

$(document).ready(function() {
    // 选择性别后即隐藏 问题开始显示
    $('#btn-sex-male').click(function() {
        $('#real-title-tizhi').hide();
        $('#no-1').removeClass('disable');
        $('#no-1').addClass('active');
        action();
    });
    $('#btn-sex-female').click(function() {
        $('#real-title-tizhi').hide();
        $('#no-1').removeClass('disable');
        $('#no-1').addClass('active');
        action();

    });

});

function action(event) {

    $('.am-button').click(function(event) {
        //获取点击所在行数
        var i = $(this).parents('.question').attr("name");


        // 单击此行按键后方才显示下一行
        var j = parseInt(i) + 1;
        $('#no-' + j).removeClass('disable');
        $('#no-' + j).addClass('active');



        //点击同一行两遍时只显示第二次的值，第一次的按键不显示 并把之前同一行的数值删除，添加新值
        if ($(this).parents('.true').length) {

            // console.log(pos);
            // var $beforebutton=$(".btn[name="+pos+"]");
            // $beforebutton.css("backgroundColor","rgba(255,255,255,0.5)");
            // console.log($(this).parent().parent().find($(".btn[name="+pos+"]")));
            $(this).parent().find($('.am-button')).css("backgroundColor", "rgba(255,255,255,0.5)");;
            $(this).css("backgroundColor", "rgba(36, 161, 23,0.5)");
            $(window).scrollTop($(this).offset().top - 60);
            if ($(this).parents('.pinghezhi').length) {


                // 将父类中保存的上次此行的按键删除  不同类型都保存相应的数值
                pinghezhi.splice($.inArray($(this).parent().attr('valuepinghe'), pinghezhi), 1);
                var i = $(this).attr("value");
                $(this).parent().attr('valuepinghe', parseInt(i));

                pinghezhi.push(i);
                console.log(pinghezhi);
            }
            if ($(this).parents('.qixuzhi').length) {
                // $(this).parents('.btn-group-justified').find($(".btn[name="+pos+"]")).css("backgroundColor","rgba(255,255,255,0.5)");

                qixuzhi.splice($.inArray($(this).parent().attr('valueqixu'), qixuzhi), 1);
                var i = $(this).attr("value");
                $(this).parent().attr('valueqixu', parseInt(i));
                // postizhi[1]=parseInt(i); 
                qixuzhi.push(i);
                console.log(qixuzhi);
            }

        }


        //第一次单击此行时，显示点击按键，判断所属体质类别，将对应数值添加到相应类别的数组中
        else {

            // 单击后添加背景色
            // this.style.backgroundColor="rgba(33,158,78,0.5)";
            // $(this).addClass('addcolor');
            $(this).css("backgroundColor", "rgba(36, 161, 23,0.5)");
            // $(this).parents('.question').find('span.question-no').css("color","rgba(36, 161, 23,0.5)");
            // if(j<3)
            {
                // var upHeight = $('#no-' + 1).height();
                // $('#no-' + j).animate({
                //         marginBottom: upHeight
                //     },
                //     100,
                //     function() {

                //         /* stuff to do after animation is complete */
                //     });


                // var height=$('#no-' + 1).height();
       
              setTimeout(change,10); 
   
    
                // if ($(".recordList ul li").length > 0) {
                //     setInterval('AutoScroll(".recordList")', 2000)
                // } else {
                //     $(".recordList").hide()
                // }
                // $(window).scrollTop($('#no-' + j).offset().top - 60);
                // console.log($(window).scrollTop($('#no-' + j).offset().top - 60));
            }

            if ($(this).parents('.pinghezhi').length) {
                var i = $(this).attr("value");
                // 不同类型都保存相应的数值
                $(this).parent().attr('valuepinghe', parseInt(i));
                // postizhi[0]=parseInt(i);   

                pinghezhi.push(i);
                $(this).parents('.question').addClass('true');
                // console.log($(this).parents('.pinghezhi').length);
                console.log(pinghezhi);
            };
            //判断所属体质类别，将对应数值添加到相应类别的数组中
            if ($(this).parents('.qixuzhi').length) {
                var i = $(this).attr("value");
                $(this).parent().attr('valueqixu', parseInt(i));
                // postizhi[1]=parseInt(i);
                qixuzhi.push(i);
                $(this).parents('.question').addClass('true');
                console.log(qixuzhi);
                // console.log($(this).parents('.qixuzhi').length);

            };

        }

        if ($('#no-' + 3).hasClass('true')) { tijiao(); }

    });
    // if(i==3)tijiao();



}
function change(){
        upscroll();
    }
 function upscroll(){
        var content = $(".num");
        var offset = ($(".num").eq(0).height()+5)*-1 + "px";
        content.stop().animate({top:offset},1000,function(){
            var first = $(".num").first();
            $(".num").append(first);
            $(".num").css("top","0px");
        });
        
        setTimeout(change,3000);
    }
    
function tijiao() {

    var $tijiao = $('<div class="tijiao"><img src="../resource/fonts/tijiao.png"> <button type="button" name="tijiao">提交测试</div>');
    var $form = $('form');
    if (!$form.find('.tijiao').length) {
        $form.append($tijiao);
    }



}
