const express = require("express");
const databaseConnect = require("./configure/database");
const app = express();
const Routes = require("./Routes/routes")
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello jii, kyaa haal chaal")
});
const socketio = require('socket.io');
const server = require('http').Server(app);
const io = socketio(server);

app.listen(3000,()=>{
    console.log("hello server started");
});


app.use('/rtcce/version-1.0/',Routes);

databaseConnect();
io.on('connection', (socket) => {
    console.log(`Socket ${socket.id} connected`);
  
    socket.on('sendMessage', (message) => {
      io.emit('message', message);
    });
  
    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  });


// http://localhost:3000/rtcce/version-1.0/output