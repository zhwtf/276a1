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
	};

	var mean = function(){
		var per_counter = 0;//counter for valid percent
		var result = 0;
		for (i = 0 ; i < count; i++){
			var per_i = parseFloat( $(".percent:eq("+i+")").val() );
			if ( !isNaN(per_i) ){
				per_counter ++;
				result = result + per_i;
			}
		}
		result = result / per_counter;
		$("#mean_result").html(result);
	};

	$(".grade").keyup(function() {  
	    calculate();
	});

	$(".total_grade").keyup(function() {  
	    calculate();
	});

	// $("#weighted_button").click(function(){
	// 	weight();
	// });

	$("#mean_button").click(function(){
		mean();
	});
});

