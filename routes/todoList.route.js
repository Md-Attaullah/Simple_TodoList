const todoList_controller = require("../controllers/todoList.controller")

module.exports = (app) =>
{
    app.get("/todoList/api/v1/list",todoList_controller.getList)

    app.get("/todoList/api/v1/list/:id",todoList_controller.getListById)

    app.post("/todoList/api/v1/list",todoList_controller.createList)

    app.put("/todoList/api/v1/list/:id",todoList_controller.UpdateByid)

    app.delete("/todoList/api/v1/list/:id",todoList_controller.DeleteById)

}