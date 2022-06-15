import express from "express"
import { createHotel, updateHotel, deleteHotel, getHotelById, getHotel, countByCity } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createHotel
);

//UPDATE
router.put("/:id",verifyAdmin, updateHotel);

//DELETE
router.delete("/find/:id", verifyAdmin,deleteHotel);

//GET
router.get("/find/:id", getHotelById);
//GETALL
router.get("/", getHotel);

router.get("/countbycity", countByCity);
router.get("/countbytype", getHotel);

export default router
