const http = require("http");
const { ServiceTodoList } = require("./service");

const servis = new ServiceTodoList();

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.method == "GET") {
    servis.getTodoList(req, res);
  } else if (req.method == "POST") {
    servis.addTodoList(req, res);
  } else if (req.method == "PUT") {
    servis.editTodoList(req, res);
  } else if (req.method == "DELETE") {
    servis.deteledTodoByIndexArray(req, res);
  }
});

server.listen(3000);
