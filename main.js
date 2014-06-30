$(document).on('ready', function() {

// part1 stopwatch
var stopwatch = function(hours, minutes, seconds){

	if(!hours){
		hours= "00";
	}
	// hours=hours || 0:
	if(!minutes){
		minutes= "00";
	}
	if(!seconds){
		seconds= "00";
	}

	console.log(hours, minutes, seconds)
	// return hours + ":" + minutes + ":" +
}
  
	stopwatch();

//  part 2 getter setter

// var getnset = function(link, element){

// getter : var color = $('.button').css('color')
// setter: $('.button').css('color', 'red')


var href = function(el, url){
	// if(arguments.length === 2)
	if(url){
		el.attr('hreh', url);
	}
	else{
		return el.attr('href')
	}
}

//GETTER

var myUrl = href( $('.mylink'));


// SETTER

href( $('.mylink'), 'http://google.com' );







});