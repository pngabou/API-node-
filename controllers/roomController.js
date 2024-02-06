import RoomModel from "../models/roomModel.js";
import e from "express";
export const getTest = (_,res)=>{
    res.send('hello depuis controller')
}

export  const postTest =  (req,res)=>{
    res.send({name:"jbvfjfjbfjl"})
}


//Create
export const addRoom = async (req,res)=>{
    console.log(req)
    const room = new  RoomModel(req.body)
    await room.save()
    res.send(room)
}

//Read All

export const getRooms = async  (req,res) =>{
    const rooms = await RoomModel.find({})
    res.send(rooms)
}

//Read one

export const getRoom = async  (req,res) =>{
    const room = await RoomModel.find({_id:req.params.id})
    res.send(room)
}

//Update

export const updateRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
    await room.save()
    res.send(room)
}

//delete


export const deleteRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndDelete(req.params.id)

    if (!room) res.status(404).send('Aucune chambre trouvée.')
    res.status(200).send()
}
