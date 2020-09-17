<<<<<<< HEAD
function dispLoading(msg) {
  //引数なし（メッセージなし）を許容
  if (msg == undefined) {
    msg = '';
  }
  //画面表示メッセージ
  var dispMsg = "<div class='loadingMsg'>" + msg + '</div>';
  // ローディング画像が表示されていない場合のみ出力
  if ($('#loading').length == 0) {
    $('body').append("<div id='loading'>" + dispMsg + '</div>');
  }
}

function removeLoading() {
  $('#loading').remove();
  $('.search').fadeIn(500);
}

function enter(){
  if( window.event.keyCode == 13 ){
   　putMyText();
  }
}

function putMyText(){
  let input=$('.form-control').val();
  if(input == "") return;

  //console.log(input);
  $('#main').append(
  $('<div>', {class:'speech-bubble'}).append(
  $('<div>', {class:'sb-bubble sb-line sb-right'}).append(
  $('<p>', {text:input}))));
  $('.form-control').val('');
  window.scroll(0,$(document).height());
  //sendMyText(Call(input));
}

function putHistoryText(input){
  $('#main').append(
  $('<div>', {class:'speech-bubble'}).append(
  $('<div>', {class:'sb-bubble sb-line sb-right'}).append(
  $('<p>', {text:input}))));
  $('.form-control').val('');
  window.scroll(0,$(document).height());
  sendMyText(input);
}

function hankaku2Zenkaku(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}

function sendMyText(input){
  //console.log(input);
  if (input != '') {
    for (i = 0; i < input.length; i++) {
        let showEle = $('<ul>', {class:'sb-add sb-pos',text:input[i]}).toggle()
        let timerEle = $('<div>', {class:'stage'}).append($('<div>', {class:'dot-pulse'}))
        setTimeout(function(data) {
            $('#main').append(
                $('<div>', {class:'speech-bubble'}).append(
                    $('<div>', {class:'sb-bubble sb-line sb-left'}).append(
                        showEle).append(
                        timerEle
                    ))
            );
            window.scroll(0,$(document).height());
        }, 500 * (i + 1) + input[i].length * 5 + Math.floor( Math.random() * (200 + 1 + 200) ) - 200, input[i]);

        setTimeout(function(ele, ele2) {
            ele.toggle()
            ele2.toggle()
            window.scroll(0,$(document).height());
        }, 1500 * (i + 1) + input[i].length * 5 + Math.floor( Math.random() * (200 + 1 + 200) ) - 200, showEle, timerEle);
    }
  }
  //$('ul').removeClass("sb-add");
}

window.onload=function(){
  var searchHeight=$('.form-group').outerHeight();
  $('#main').css({
    'padding-top' : 10,
    'padding-bottom' : searchHeight
  });
  //let list = Call('');
    let list = ["TestSend"];
  //console.log(list);
  for (i = 0; i < list.length; i++) {
      let showEle = $('<ul>', {class:'sb-add sb-pos',text:list[i]}).toggle()
      let timerEle = $('<div>', {class:'stage'}).append($('<div>', {class:'dot-pulse'}))
      $('#main').append(
        $('<div>', {class:'speech-bubble'}).append(
        $('<div>', {class:'sb-bubble sb-line sb-left'}).append(
        $('<p>', {text:list[i]}))));
  }
}


$('body').on('click', '.list', function(){
  //click
});

if (
  navigator.userAgent.indexOf('Chrome') != -1
) {
  $('.form-control').val('');
}
=======
//const socket = io('http://localhost:3000')
const socket = io('https://server-chat-docomo-hack.herokuapp.com')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`, "left")
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`, "right")
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message, flag = "center") {
  const messageElement = document.createElement('div')
  messageElement.className = "speech-bubble"

  if (flag == "right")
    messageElement.innerHTML = "<div class='sb-bubble sb-line sb-right'>" + message + "</div>"
  else if (flag == "left")
    messageElement.innerHTML = "<div class='sb-bubble sb-line sb-left'>" + message + "</div>"
  else
    messageElement.innerHTML = "<div>" + message +"</div>"

  messageContainer.append(messageElement)
}
>>>>>>> 3b9c1cbcf30c4fee8fa90cf60884c7a5a47c3650
