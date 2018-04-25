function chek(){
     var n1,n2,p;
    p = document.getElementById('out');
    n1=document.getElementById('num1').value;
    n1 = parseInt(n1);
    n2=document.getElementById('num2').value;
    n2 = parseInt(n2);
    
if(n1>n2){
  p.innerHTML = ' первое число больше';
}
else if(n1==n2) {
    p.innerHTML = ' числа равны';
}
else {
    p.innerHTML = ' второе число больше';
}
}