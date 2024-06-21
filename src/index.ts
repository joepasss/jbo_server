import express from "express";
import http from "http";
import socketIo from "socket.io";

const app = express();
const server = http.createServer(app);
console.log("HELLO")
const io = socketIo(server);
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/test", (req, res) => {
  res.json("hello");
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // 클라이언트로부터의 메시지 수신
  socket.on("chat message", (msg) => {
    console.log("Message received: " + msg);
    io.emit("chat message", msg); // 모든 클라이언트로 메시지 브로드캐스트
  });

  // 클라이언트 연결 해제
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
