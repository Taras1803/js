function jsonPost(url, data) {
    return new Promise((resolve, reject) => {
        var x = new XMLHttpRequest();
    x.onerror = () => reject(new Error('jsonPost failed'))
    //x.setRequestHeader('Content-Type', 'application/json');
    x.open("POST", url, true);
    x.send(JSON.stringify(data))

    x.onreadystatechange = () => {
    if (x.readyState == XMLHttpRequest.DONE && x.status == 200){
         resolve(JSON.parse(x.responseText));
    }
    else if (x.status != 200){
        reject(new Error('status is not 200'))
    }

}
})
}
var button = document.getElementById('button');

button.onclick =  async function insertmessage() {
    var message = document.getElementById('message').value;
    var data = await
    jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick: "taras", message: message});
    document.getElementById('message').value = null;
}


async function readmessage() {
    var data = await jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", messageId: 0});
    var mesid = data.nextMessageId-15;
    var data1 = await jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", messageId: mesid });
    console.log(data1,mesid);
    var data2 = data1.data;
    var table = document.getElementById('sms');
    table.innerHTML = '';
    var row = document.createElement('tr');
    table.appendChild(row);
    for (var item in data2[0]){
        var name = document.createElement('th');
        name.className = 't1 t3';
        name.innerText = item;
        row.appendChild(name);
    }
    for (var i=(data2.length)-1; i>=0; i--){
        var row = document.createElement('tr');
        table.appendChild(row);
        var count = document.createElement('td');
        count.className = 't3';
        count.innerText = data2[i].nick;
        row.appendChild(count);
        var count1 = document.createElement('td');
        count1.className = 't3';
        count1.innerText = data2[i].message;
        row.appendChild(count1);
        var count2 = document.createElement('td');
        count2.className = 't3';
        var todate=new Date(data2[i].timestamp).getDate();
        var tomonth=new Date(data2[i].timestamp).getMonth()+1;
        var toyear=new Date(data2[i].timestamp).getFullYear();
        var tohour=new Date(data2[i].timestamp).getHours();
        var tominute=new Date(data2[i].timestamp).getMinutes();
        var original_date=tomonth+'/'+todate+'/'+toyear+'  '+ tohour+':'+tominute;
        count2.innerText = original_date;
        row.appendChild(count2);
    }
}
setInterval(readmessage,2000);
