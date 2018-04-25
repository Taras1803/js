// document.onkeypress = function(event){
// 	console.log(event);
// 	if (event.shiftKey) {
// 		console.log('Нажата клавиша shift');
// 	}
// }

// document.getElementById('test').onkeypress = function(event){
// 	//console.log(event);
// 	if (event.keyCode<48 || event.keyCode>57) {
// 		console.log('не цифра');
// 		return false;
// 	}
// }
var str ='';
document.getElementById('test').onkeypress = function (event) {
	//console.log(event);
	str = str + event.key;
	console.log(str);
	this.value += String.fromCharCode(getRandomBetwen(65, 122));
	return false;
}
 function getRandomBetwen(min, max) {
	 return Math.floor(Math.random() * (max - min)) + min;
}