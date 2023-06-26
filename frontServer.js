const socket = io('http://localhost:3000')

socket.on('message', data => {
    updateMessages(data);
})

function sendToServer (data){
    socket.emit("newMessage", data);
}
