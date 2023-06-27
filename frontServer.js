const socket = io('http://193.168.4.130:3000')

socket.on('message', data => {
    updateMessages(data);
})

function sendToServer (data){
    socket.emit("newMessage", data);
}
