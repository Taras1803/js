var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var country = document.getElementById("country");
        arr = JSON.parse(this.responseText);
        for (var key in arr) {
            var count = document.createElement('option');
            count.className = "t";
            count.innerText = key;
            country.appendChild(count);
        }
        country.onchange = function(){
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
        town.onchange  = function () {
           var choose2 = town.value;
            var request = new XMLHttpRequest();
            request.open('GET', "https://query.yahooapis.com/v1/public/yql?" + 'q=' + encodeURIComponent('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + choose2 + '")') + '&format=json', true);
            request.send();
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var table = document.getElementById("table");
                    table.innerHTML = "";
                    var arr = JSON.parse(this.responseText);
                    console.log(arr.query.results.channel);
                    var info = arr.query.results.channel.item.condition;
                    var location = arr.query.results.channel.location;
                    for (var item in info) {
                    var tr = document.createElement('tr');
                    table.appendChild(tr);
                        var th = document.createElement('th');
                        th.innerText = item;
                    tr.appendChild(th);
                        var td = document.createElement('td');
                        td.innerText = info[item];
                        tr.appendChild(td);
                    }
                    for (var item1 in location) {
                        var tr = document.createElement('tr');
                        table.appendChild(tr);
                        var th = document.createElement('th');
                        th.innerText = item1;
                        tr.appendChild(th);
                        var td = document.createElement('td');
                        td.innerText = location[item1];
                        tr.appendChild(td);
                    }
                 }
               }
            }
        }
    }
};

xhttp.open("GET", "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json", true);
xhttp.send();
