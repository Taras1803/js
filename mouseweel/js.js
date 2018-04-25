document.onwheel = function (event) {
    console.log(event);
    if(event.deltaY > 0){
    	document.getElementById('line').innerHTML = 'вниз';
    }
    else {
        document.getElementById('line').innerHTML = 'вверх';
	}
    var speed = event.deltaY;
    speed = Math.abs(speed);
    if (speed<100) {
        document.getElementById('speed').innerHTML = 'низкая';
    }
    else if (speed < 150) {
        document.getElementById('speed').innerHTML = 'средняя';
    }
    else if (speed <250) {
        document.getElementById('speed').innerHTML = 'высокая';
    }
    else {
        document.getElementById('speed').innerHTML = 'очень высокая';
    }
}
var left = 290;
document.getElementById('test').onwheel = function (event){
    var line = event.deltaY;
    left = left + 0.2*line;
    document.getElementById('test2').style.left = left + 'px';
    return false;
}