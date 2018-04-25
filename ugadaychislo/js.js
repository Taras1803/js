var number = Math.floor(10*Math.random())+ 1;// от 1 до 10
console.log(number);
var count = 2;
document.getElementById('check').onclick = function () {
	if(count >0) {
        var usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);
        var out = document.getElementById('out');
        if (usernum == number) {
            out.innerHTML = 'ура вы угадали!!';
            alert('поздравляем!!!');
			location.reload();
        }
        else if (usernum > number) {
            out.innerHTML = 'перелет';
        }
        else if (usernum < number) {
            out.innerHTML = 'недолет';
        }

        document.getElementById('count').innerHTML = 'осталось попыток:' + count;
        count = count - 1;
    }
    else {
        alert ('Попытки закончены, вы проиграли. Страница будет перезагружена');
        location.reload();
	}
}