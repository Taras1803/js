var man = {
    "name" : "Ivan",
    "surname" : "Ivanov",
    "fatherName" : "Petrovich"
}
var out = '<table class="simple-little-table">';
for (var  key in man){
    out+='<tr>';
    out+='<th>' + key + '</th>'+
         '<td>' + man[key] + '</td>';
    out+='</tr>';
}
out+='</table>';
    document.onclick = function () {
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd',out);
    }
