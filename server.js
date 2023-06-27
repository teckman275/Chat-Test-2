const {Server} = require('socket.io');

const io = new Server({
    cors:{
        origin: "*",
    }
});

const messages = [];
let numOnline = 0

io.on('connection', (socket) => {

    numOnline++;
    console.log("number online: " + numOnline)

    socket.emit('message', messages)

    console.log("this is on github")
    
    socket.on('newMessage', (data) => {
        messages.push(data)
        socket.emit('message', messages)
        socket.broadcast.emit('message', messages)
        console.log(messages)
    })
    
    socket.on('disconnect', () => {
        numOnline--;
        console.log("number online: " + numOnline)
      });
})

io.listen(3000);