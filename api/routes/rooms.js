import express from "express"
import { createRoom, deleteRoom, getRoom, getRoomById, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

router.post("/:hotelid",verifyAdmin, createRoom
);

//UPDATE
router.put("/:id",verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelId", verifyAdmin,deleteRoom);

//GET
router.get("/:id", getRoomById);
//GETALL
router.get("/", getRoom);

export default router
