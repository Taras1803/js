var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var country = document.getElementById("weather");
        var arr = JSON.parse(this.responseText);
        console.log(arr)
        for (var key in arr.query.results.channel) {
            var count = document.createElement('option');
            count.innerText = key;
            country.appendChild(count);
        }

    }
}
;


request.open('GET', "https://query.yahooapis.com/v1/public/yql?" + 'q=' + encodeURIComponent("select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"london\")") + '&format=json', true);
request.send();
