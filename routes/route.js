import express from "express"
import {
    getTest,
    postTest,
    addRoom,
    getRooms,
    getRoom,
    updateRoom,
    deleteRoom
} from "../controllers/roomController.js";

import {catchErrors} from "../helpers.js";
const  router = express.Router()

router.get('/',catchErrors(getTest) )


router.get('/test',catchErrors(getTest))

router.post('/test',catchErrors(postTest))

router.post('/room',catchErrors(addRoom))

router.get('/room/:id',catchErrors(getRoom))

router.patch('/room/:id',catchErrors(updateRoom))

router.delete('/room/:id',catchErrors(deleteRoom))

router.get('/rooms',catchErrors(getRooms))

export default  router
