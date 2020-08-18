var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  console.log("Yo Remo!")
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg);
  });
});



http.listen(port, () => {
  console.log('listening on *:3001');
});