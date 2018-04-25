var man = {
    "name" : "taras",
    "age" : 39,
    "id" : "1803t",
    "sex" : "male",
    "year" : function () {
        return 2018 - this.age;
    }
};
//console.log(man.year());
var m = {
    "mas" : [5,6,34,12,45],
    "sum" : function () {
        var sum = 0;
       for (var i = 0; i<this.mas.length; i++){
           sum += this.mas[i];
       }
return sum;
    }
}
//console.log(m.sum());
var goods = {
    "23456" : {
        "name" : "банан",
        "cost" : 30,
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Banana.png",
        "sklad" : "да"
    },
    "98769" : {
        "name" : "яблоко",
        "cost" : 20,
        "img" : "https://cdn4.iconfinder.com/data/icons/BRILLIANT/" +
        "education_icons/png/128/teachers_day.png",
        "sklad" : "да"
    },
    "76589" : {
        "name" : "клубника",
        "cost" : 80,
        "img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png",
        "sklad" : "нет"
    },
}
console.log(goods);
var out = '';
for (var  key in goods){
    out+='название: '+goods[key].name + '<br>';
    out+='цена: '+goods[key].cost + '<br>';
    out+='наличие: '+goods[key].sklad + '<br>';
    out+= '<img src="'+goods[key].img+'">';
    out+='<hr>';
}
document.getElementById('out').innerHTML = out;