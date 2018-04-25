var block = document.getElementById('one');
// block.onclick = function () {
//     this.style.background = 'green';
// }
//
// block.ondblclick = function () {
//     this.style.background = 'red';
// }
// block.oncontextmenu = function () {
//     this.style.background = "pink";
//     return false;
// }
// document.oncontextmenu = function () {
//     return false;
// }
// block.onmouseenter = function () {
//     console.log("in!!!");
//     this.style.background = 'gold';
// }
// block.onmouseleave = function () {
//     console.log("out!!!");
//     this.style.background = 'red';
// }
// var a = 0;
// block.onmousemove = function () {
//     a++;
//     this.style.width = 100 + a + 'px';
// }
block.onmousedown = function (event) {
    this.style.background = 'red';
    console.log('button:' +event.button);
    console.log('which:' +event.which);
}
block.onmouseup = function () {
    this.style.background = 'white';
}
document.onmousemove = function () {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd',
     '<img src="https://cdn4.iconfinder.com/data/icons/animal-stickers/128/2.png" id="cat">')
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';

    document.onmousemove = function (event) {
        cat.style.position = 'fixed';
        cat.style.left = event.clientX +30+'px';
        cat.style.top = event.clientY +30+'px';
    }
}
