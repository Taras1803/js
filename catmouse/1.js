document.onmousemove = function (){
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/cat-48.png" id="cat">');
	var cat = document.getElementById('cat');
	cat.style.position = 'fixed';

	document.onmousemove = function(event){
		cat.style.left = event.clientX +20+'px';
		cat.style.top = event.clientY +20+'px';
	}

}




