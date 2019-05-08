var $messagesList = document.getElementById('messages-list');

var xmlHttp = new XMLHttpRequest();
xmlHttp.open('GET', 'https://moc.chaostreff-flensburg.de/messages', false); // false for synchronous request
xmlHttp.send(null);

var messages = JSON.parse(xmlHttp.responseText);
console.log(messages);
var html = '';

var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };

for (let index = 0; index < messages.length; index++) {
  var timestamp = messages[index].created_at;
  var datetime = new Date(timestamp);
  datetime.toLocaleDateString('de-DE', options);
  
  html +=
  '<li class="list-item">' +
  messages[index].message +
  '<time class="list-item__time">' +
  datetime +
  '</time></li>';
}

$messagesList.innerHTML = html;
