var sdvig = 0;
var timer;

var test = document.getElementById('test');
//setInterval(function_name, time)
//move();

function move(){
	test.style.marginLeft = sdvig + 'px';
	sdvig= sdvig +10;
	timer = setTimeout(move, 50);
}

//var tr = setInterval(move, 50); //1s = 1000

document.getElementById('stop').onclick = function(){
	//clearInterval(tr);
	clearTimeout(timer);
}

//setTimeout(move, 5000);
var a =10;
obr();
function obr(){
	document.getElementById('out').innerHTML = a;
	a--;
	if (a<0){
		clearTimeout(timer);
		alert('Таймер отключен');
	}
	else {
		timer = setTimeout(obr, 1000);
	}
}