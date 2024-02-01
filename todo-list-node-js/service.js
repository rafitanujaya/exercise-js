class ServiceTodoList {
  constructor() {
    this.todolist = ["rafi", "tanujaya"];
  }

  getJson() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  getTodoList(req, res) {
    res.write(this.getJson());
    res.end();
  }

  addTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolist.push(body.todo);
    });
    req.addListener("end", () => {
      res.write(this.getJson());
      res.end();
    });
  }

  editTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
      }
    });
    req.addListener("end", () => {
      res.write(this.getJson());
      res.end();
    });
  }

  deteledTodoByIndexArray(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist.splice(body.id, 1);
      }
    });
    req.addListener("end", () => {
      res.write(this.getJson());
      res.end();
    });
  }
}

module.exports = { ServiceTodoList };
