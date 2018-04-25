function summa(a,b) {
    a = a || 10;
    b = b ||20;
    alert(a+b);
}
document.getElementById('b1').onclick = function () {
    summa(12);
}