const todoList = require("../models/todoList.model")

let id = 3

exports.getList = (req,res) =>{

    res.status(200).send(todoList)

}

exports.getListById = (req,res) =>{

    todo_id = req.params.id

    if(todoList[todo_id]){

        res.status(200).send(todoList[todo_id])

    }else{
        res.status(404).send({
            message : "No todo list with this id"
        })
    }
    
}

exports.createList = (req,res) =>{
    
    todo_obj = req.body
    id++
    todo_obj["id"] = id
    todoList[id] = todo_obj

    res.status(201).send(todo_obj)

}

exports.UpdateByid = (req,res) =>{
    todo_id = req.params.id

    if(todoList[todo_id]){

        todo_obj = req.body
        todoList[id] = todo_obj
        res.status(200).send(todo_obj)

    }else{
        res.status(404).send({
            message : "No todo list with this id"
        })
    }
}

exports.DeleteById = (req,res) =>{

    todo_id = req.params.id

    if(todoList[todo_id]){
        delete todoList[todo_id]
        res.status(200).send({
            message : "Deleted the List"
        })

    }else{
        res.status(404).send({
            message : "No todo list with this id"
        })
    }
}