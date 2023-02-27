import express from "express";
import {addProToStock,
        exportToStore,
        getFactory,
        getFactorys,
        getProduct,
        getProducts,
        deleteFactoryproduct,
        getExports, } from "../controllers/factory.js";

import { verifyFactory } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/addtostorage/:facid/:proid", verifyFactory, addProToStock);

router.post("/exportToStore/:facid/:storeid/:proid", verifyFactory, exportToStore);

router.get("/findFactoryProduct/:id/:proid", verifyFactory, getProduct);

router.get("/factoryproducts/:id", verifyFactory, getProducts);

router.get("/exports/:id", verifyFactory, getExports);

router.delete("/exports/:id", verifyFactory, getExports);

router.delete("/factoryproducts/:id", verifyFactory, deleteFactoryproduct);

router.get("/findFactory/:id", verifyFactory, getFactory);

router.get("/allFactorys", verifyFactory, getFactorys);




export default router