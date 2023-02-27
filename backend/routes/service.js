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

import { verifyService } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/findWarranty/:id/:orderid", verifyService, getWarranty);

router.patch("/returntostore/:id/:orderId", verifyService, ReturnToStore);

router.patch("/returntofactory/:id", verifyService, ReturnToFactory);

router.get("/guaranteesinservice/:id", verifyService, getWarrantysInService);

router.get("/guarantees/:id", verifyService, getWarrantys);

router.delete("/guarantees/:id", verifyService, deleteWarranty);

router.get("/findService/:id", verifyService, getSer);

router.get("/allServices", verifyService, getSers);

router.put("/updateWarranty/:id", verifyService, updateWarranty);

export default router