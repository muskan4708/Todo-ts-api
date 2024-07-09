import { Request, Response } from 'express';
import Todo from '../models/todoModels';

export const createTodo=async (req:Request,res:Response)=>{
    const {title,description,completed}=req.body;
    try{
        const newTodo=new Todo({
            title,
            description,
            completed:completed || false
        })
        await newTodo.save();
        res.status(201).json(newTodo)
    }
    catch{
res.status(500).json({message:'Server Error'})
    }
};
export const getTodo=async(req:Request,res:Response)=>{
    const todo =await Todo.find()
    if(todo){
        res.status(200).json(todo)
    }
else{
    res.status(200).json({message:"Not found"})
}
}

export const getTodoById=async (req:Request,res:Response)=>{
    const{id}= req.params;
    const todo  =await Todo.findById(id)
    if(todo){
        res.status(200).json(todo)
}
else{
    res.status(202).json({message:"Not found"})
}
}
export const deleteTodo= async(req:Request,res:Response)=>{
    const{id}= req.params;
    const todo =await Todo.findByIdAndDelete(id)
    if(todo){
        res.status(200).json({message:"Todo deleted"})
        }
        else{
            res.status(202).json({message:"Not found"})
        }
}

export const updateTodo=async(req:Request,res:Response)=>{
    const{id}= req.params;
    const {title,description,completed}=req.body;
    const todo=await Todo.findByIdAndUpdate( id,
        { title, description, completed },
        { new: true })
        if(todo){
            res.status(200).json(todo)
            }
            else{
                res.status(202).json({message:"Not found"})
}
}