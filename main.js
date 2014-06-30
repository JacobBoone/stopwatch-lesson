$(document).on('ready', function() {


var stopwatch = function(hours, minutes, seconds){

	if(!hours){
		hours= "00";
	}
	if(!minutes){
		minutes= "00";
	}
	if(!seconds){
		seconds= "00";
	}


	console.log(hours, minutes, seconds)

}
  
	stopwatch();

});