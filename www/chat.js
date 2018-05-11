function jsonPost(url, data) {
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();
        x.onerror = () => reject(new Error('jsonPost failed'));
        x.open("POST", url, true);
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var Taras = JSON.stringify(data);
        x.send('param=' + Taras);
        x.onreadystatechange = () => {
            if (x.readyState == XMLHttpRequest.DONE && x.status == 200){
                //console.log(JSON.parse(x.responseText));
                resolve(JSON.parse(x.responseText));
            }
            else if (x.status != 200){
                reject(new Error('status is not 200'))
                 }
             }
         }
    )
}
var button = document.getElementById('button');
button.onclick =  function insertmessage() {
    var message = document.getElementById('message').value;
    jsonPost("http://casino.tarasvrudenko.php.a-level.com.ua/chat2/server.php", {func: 'addMessage', nick: "Taras", message: message})
        .then(data =>{console.log(data);});
    document.getElementById('message').value = null;
    readmessage();
}

 function readmessage() {
     jsonPost("http://casino.tarasvrudenko.php.a-level.com.ua/chat2/server.php", {func: "getMessages", messageId: 0})
         .then(data => {
     let mesid = data[1][0] - 10;
     return mesid;
 }).then(mesid => {
     return jsonPost("http://casino.tarasvrudenko.php.a-level.com.ua/chat2/server.php", {func: "getMessages", messageId: mesid});
 }).then(data => {
         console.log(data);
     var data2 = data[0];
     var table = document.getElementById('sms');
     table.innerHTML = '';
     var row = document.createElement('tr');
     table.appendChild(row);
     for (var item in data2[1]) {
         var name = document.createElement('th');
         name.className = 't1 t3';
         name.innerText = item;
         row.appendChild(name);
     }
     for (var i = (data2.length) - 1; i >= 0; i--) {
         var row = document.createElement('tr');
         table.appendChild(row);
         for (var item in data2[i]) {
             let cell = document.createElement('td');
             cell.className = 't3';
             cell.innerHTML = data2[i][item];
             row.appendChild(cell);
            }
          }
        }
    )
 }
readmessage();
setInterval(readmessage,5000);
