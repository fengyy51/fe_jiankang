//九种体质对应数据数组
var yangxuzhi=["阳虚",7];
var yinxuzhi=[8];
var qixuzhi=["气虚",8];
var tanshizhi=[8];
var shirezhi=[7];
var xueyuzhi=[7];
var telinzhi=[7];
var qiyuzhi=["qiyuuzhi",7];
var pinghezhi=["平和",8];
//保存上次点击按键的name值
var pos=0;
$(document).ready(function(){
	$('#btn-sex-male').click(function(){
		$('#real-title-tizhi').hide();
		$('#no-1').removeClass('disable');
		$('#no-1').addClass('active');
		action();
	});
	$('#btn-sex-female').click(function(){
		$('#real-title-tizhi').hide();
		$('#no-1').removeClass('disable');
		$('#no-1').addClass('active');
		action();
	});

});
function action(){
		
	$('.btn').click(function(event){
		var i=$(this).parents('.question').attr("name");
		var me=$(this);
		
		// 单击后添加背景色
			// this.style.backgroundColor="rgba(33,158,78,0.5)";
			$(this).addClass('addcolor');

		// 单击此行按键后方才显示下一行
		var j=parseInt(i)+1;
		$('#no-'+j).removeClass('disable');
		$('#no-'+j).addClass('active');

		if($(this).parents('.pinghezhi').length){
				var i=$(this).attr("name");
				pos=parseInt(i);	
				pinghezhi.push(i);
				console.log(pinghezhi);
				$(this).parents('.question').addClass('true');
			};
		//判断所属体质类别，将对应数值添加到相应类别的数组中
			if($(this).parents('.qixuzhi').length){
				var i=$(this).attr("name");
				pos=parseInt(i);
				qixuzhi.push(i);
				console.log(qixuzhi);
				flag=true;
				$(this).parents('.question').addClass('true');
			};


		//点击同一行两遍时只显示第二次的值，第一次的按键不显示
		if($(this).parents('.true').length){
		
			// console.log(pos);
			// var $beforebutton=$(".btn[name="+pos+"]");
			// $beforebutton.css("backgroundColor","rgba(255,255,255,0.5)");
			// console.log($(this).parent().parent().find($(".btn[name="+pos+"]")));

			
			if($(this).parents('.pinghezhi').length){
				// $(this).parents('.btn-group-justified').find($(".btn[name="+pos+"]")).css("backgroundColor","rgba(255,255,255,0.5)");
				$(this).parents('.btn-group-justified').find($('.btn')).removeClass('addcolor');
				$(this).addClass('addcolor');
				pinghezhi.splice($.inArray(pos,pinghezhi),1)
				// console.log(pinghezhi);
			}
			if($(this).parents('.qixuzhi').length){
				$(this).parents('.btn-group-justified').find($(".btn[name="+pos+"]")).css("backgroundColor","rgba(255,255,255,0.5)");

				qixuzhi.splice($.inArray(pos,qixuzhi),1)
				console.log(qixuzhi);
			}

		}
		
			
			//判断所属体质类别，将对应数值添加到相应类别的数组中
			
	
		
	});

	
	

	
}