
var currentdate = new Date(); 
var tzoffset = currentdate.getTimezoneOffset();
var adjDateObj = new Date(currentdate.getTime() + tzoffset*60000 - 360*60000);

var bTBF = new Date(2018,10,22);
var blackFriday = new Date(2018,10,23);
var smallBiz = new Date(2018,10,24);
var cyberMonday = new Date(2018,10,26);

// var adjDateObj = new Date(2018,10,23);

if (adjDateObj.getDate() < bTBF.getDate()) {
	document.querySelector('.black-friday-deal').classList.remove('bf-2018-hide-deal');
} else if (adjDateObj.getDate() == bTBF.getDate()) {
	document.querySelector('.btbf-deal').classList.remove('bf-2018-hide-deal');				
} else if (adjDateObj.getDate() == blackFriday.getDate()) {
	document.querySelector('.black-friday-deal').classList.remove('bf-2018-hide-deal');					
	$('.btbf-expired').addClass('expired');					
} else if (adjDateObj.getDate() == smallBiz.getDate()) {
	document.querySelector('.small-biz-deal').classList.remove('bf-2018-hide-deal');
	$('.btbf-expired').addClass('expired');
	$('.black-friday-expired').addClass('expired');
} else if (adjDateObj.getDate() < cyberMonday.getDate()) {
	document.querySelector('.cyber-monday-deal').classList.remove('bf-2018-hide-deal');	
	$('.btbf-expired').addClass('expired');
	$('.black-friday-expired').addClass('expired');
	$('.small-biz-expired').addClass('expired');
} else if (adjDateObj.getDate() == cyberMonday.getDate()) {
	document.querySelector('.cyber-monday-deal').classList.remove('bf-2018-hide-deal');
	$('.btbf-expired').addClass('expired');
	$('.black-friday-expired').addClass('expired');
	$('.small-biz-expired').addClass('expired');
}

