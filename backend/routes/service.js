import express from "express";
import { getSer,
         getSers,
         getWarranty,
         getWarrantys,
         updateWarranty } from "../controllers/service.js";

const router = express.Router();

router.get("/findWarranty/:id/:orderid", getWarranty);

router.get("/allWarrantys/:id", getWarrantys);

router.get("/findService/:id", getSer);

router.get("/allServices", getSers);

router.put("/updateWarranty/:id", updateWarranty);

export default router