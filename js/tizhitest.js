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
	// if($('div.question[value]').attr("class").is("active"))
	// {
	// 	$('div.question[value]').click(function(){
	// 		$('div.question[value]')
	// 	})
	// }
	$('.num').click(function(){
		var i=$(this).attr('name');
		var j=parseInt(i)+1;
		$('#no-'+j).removeClass('disable');
		$('#no-'+j).addClass('active');
		console.log(j);	
	});
	// $('#no-'+1).click(function(){
	// 	// $('#real-title-tizhi').hide();
	// 	$('#no-'+2).removeClass('disable');
	// 	$('#no-'+2).addClass('active');
	// 	action();
	// });
	// for(var k=0;k<100;k++){
	// 	$("div:has('.active')").click(function() {
	// 		var i=this.attr('value');
	// 		var j=i+1;
	// 		$('#no-'+j).removeClass('disable');
	// 		$('#no-'+j).addClass('active');
	// 		console.log(j);	
	// });
	// }
	
	// var i=$('div.num')
	
	// for(var i=1;i<=60;i++){
	// 	var j=i+1;
	// 	if($('#no-'+i).hasClass('active')){
	// 		$('#no-'+i).click(function(){
	// 		$('#no-'+j).removeClass('disable');
	// 		$('#no-'+j).addClass('active');
	// 		console.log(j);
	// 	})
	// 	}
		
		// }
		
	
}