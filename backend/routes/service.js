import express from "express";
import { getSer,
         getSers,
         getWarranty,
         getWarrantys,
         updateWarranty,
         deleteWarranty,
         ReturnToFactory,
         ReturnToStore,
         getWarrantysInService } from "../controllers/service.js";

const router = express.Router();

router.get("/findWarranty/:id/:orderid", getWarranty);

router.patch("/returntostore/:id/:orderId", ReturnToStore);

router.patch("/returntofactory/:id", ReturnToFactory);

router.get("/guaranteesinservice/:id", getWarrantysInService);

router.get("/guarantees/:id", getWarrantys);

router.delete("/guarantees/:id", deleteWarranty);

router.get("/findService/:id", getSer);

router.get("/allServices", getSers);

router.put("/updateWarranty/:id", updateWarranty);

export default router