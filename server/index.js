const express = require("express");
const databaseConnect = require("./configure/database");
const app = express();
const Routes = require("./Routes/routes");
app.use(express.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
// CORS options to allow requests from frontend running on port 5500
const corsOptions = {
  origin: "http://localhost:3000", // Allow only requests from this origin
  methods: "GET,POST,DELETE", // Allow only these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("hello jii, kyaa haal chaal");
});
const socketio = require("socket.io");
const server = require("http").Server(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000", 
    methods: ["GET", "POST"],
  },
});

app.use("/rtcce/version-1.0/", Routes);

databaseConnect();
io.on("connection", (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.on('join-room',(programid)=>{
  console.log('i am joinin the group')
    socket.join(programid);
    socket.to(programid).emit('say-hello',('hello'));

  })
  socket.on('leave-room', (roomId) => {
    socket.leave(roomId);
    console.log(`User left room: ${roomId}`);
  });

  socket.on('send-text',(data)=>{
    console.log(data);
    socket.to(data.programid).emit('get-text',(data))
  })
  
  socket.on("send-updated-code", (value) => {
    socket.broadcast.emit("get-updated-code", value);
  });
  
  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });
});
server.listen(4000, () => {
  console.log("hello server started");
});

// http://localhost:3000/rtcce/version-1.0/output
