
var currentdate = new Date(); 
var tzoffset = currentdate.getTimezoneOffset();
var adjDateObj = new Date(currentdate.getTime() + tzoffset*60000 - 360*60000);

var bTBF = new Date(2018,10,22);
var blackFriday = new Date(2018,10,23);
var smallBiz = new Date(2018,10,24);
var cyberMonday = new Date(2018,10,26);

// var adjDateObj = new Date(2018,10,23);

if (adjDateObj.getDate() < bTBF.getDate()) {
	var header = 'Black Friday Sneak Peek!';
	var text = 'Preview Our Massive Discounts';
} else if (adjDateObj.getDate() == bTBF.getDate()) {
	var header = '"BTBF" Thursday Happening Now';
	var text = 'Book Now and Save Big!';				
} else if (adjDateObj.getDate() == blackFriday.getDate()) {
	var header = 'Black Friday Happening Now';
	var text = 'Get All The Details Here';						
} else if (adjDateObj.getDate() == smallBiz.getDate()) {
	var header = 'Small Biz Saturday Happening Now';
	var text = 'Support Small Business and SAVE!';					
} else if (adjDateObj.getDate() < cyberMonday.getDate()) {
	var header = 'Cyber Monday Sneak Peek!';
	var text = 'Preview Our Massive Discounts';					
} else if (adjDateObj.getDate() == cyberMonday.getDate()) {
	var header = 'Cyber Monday Happening Now';
	var text = 'Save BIG on All Gift Cards!';						
} else if (adjDateObj.getDate() > cyberMonday.getDate()) {
	var header = 'Cyber Monday Happening Now';
	var text = 'Save BIG on All Gift Cards!';						
}

document.querySelector('.overlay-header').innerHTML = header;
document.querySelector('.overlay-text').innerHTML = text;




//window.onload = function() {
//	setTimeout(
//		document.querySelector('.bf-promo-overlay').classList.add('show-overlay')
//		, 3000);
//}

function closeOverlay() {
	document.querySelector('.bf-promo-overlay').classList.remove('show-overlay');
}