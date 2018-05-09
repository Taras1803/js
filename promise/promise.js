function httpGet(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}
httpGet(`https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json`)
    .then(city=> {
    city = JSON.parse(city);
console.log(city);
return city
}).then(arr=>{
    for (var key in arr) {
    var count = document.createElement('option');
    count.className = "t";
    count.innerText = key;
    country.appendChild(count);
}
country.onchange = function u(){
    var town = document.getElementById("city");
    town.innerHTML = "";
    var choose = country.value;
    var cities = arr[choose];
    for (var i = 0; i < cities.length; i++){
        var city = document.createElement('option');
        city.className = 't';
        city.innerText = cities[i];
        town.appendChild(city);
    }
    }
})
