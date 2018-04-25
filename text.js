function out(){
    var p;
    p = document.getElementById('out');
    //p.innerHTML = 'hello';
    //p.innerHTML += ' <b>hello</b>';
    //p.innerText += ' <b>hello</b>';
   // p.insertAdjacentHTML('beforeBegin','hi');
   //p.insertAdjacentHTML('afterBegin','hi');
    //p.insertAdjacentHTML('beforeEnd','hi');
   // p.insertAdjacentHTML('afterEnd','hi');
    p.outerHTML = '<div class="t">taras</div>'
}