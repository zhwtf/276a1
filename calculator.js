$(document).ready(function() {
	var count = 4;
	var calculate = function() {
		for (i = 0 ; i < count; i++){
			var input1 = parseFloat($(".grade:eq("+i+")").val());
			var input2 = parseFloat($(".total_grade:eq("+i+")").val());
			if (!isNaN(input1) && !isNaN(input2) && input1 >= 0 && input2 >0 ) {
			  $(".percent:eq("+i+")").html(Math.round(input1/ input2 * 100*100)/100+"%");
			}
		}
	}
	$(".grade").keyup(function() {  
	    calculate();
	});

	$(".total_grade").keyup(function() {  
	    calculate();
	});
});

