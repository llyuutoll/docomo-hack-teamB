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