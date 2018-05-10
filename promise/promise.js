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
    .then(array=> {
            var arr = JSON.parse(array);
            var country = document.getElementById("country");
            for (var key in arr) {
            var count = document.createElement('option');
            count.className = "t";
            count.innerText = key;
            country.appendChild(count);
                }
    return [country,arr];
    }
    ).then( array => {
array[0].onchange = function u() {
    var town = document.getElementById("city");
    town.innerHTML = "";
    var choose = country.value;
    var cities = array[1][choose];
    for (var i = 0; i < cities.length; i++) {
        var city = document.createElement('option');
        city.className = 't';
        city.innerText = cities[i];
        town.appendChild(city);
            }
        }
        console.log(array[0].value);
    return array[0].value;
}
).then(choose => httpGet("https://query.yahooapis.com/v1/public/yql?" + 'q=' + encodeURIComponent('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + choose2 + '")') + '&format=json')
).then(weather=>{
    console.log(weather);
})
