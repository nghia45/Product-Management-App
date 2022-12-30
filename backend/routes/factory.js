import express from "express";
import {addProToStock,
        exportToStore,
        getFactory,
        getFactorys,
        getProduct,
        getProducts,
        deleteFactoryproduct,
        getExports, } from "../controllers/factory.js";

const router = express.Router();

router.post("/addtostorage/:facid/:proid", addProToStock);

router.post("/exportToStore/:facid/:storeid/:proid", exportToStore);

router.get("/findFactoryProduct/:id/:proid", getProduct);

router.get("/factoryproducts/:id", getProducts);

router.get("/exports/:id", getExports);

router.delete("/exports/:id", getExports);

router.delete("/factoryproducts/:id", deleteFactoryproduct);

router.get("/findFactory/:id", getFactory);

router.get("/allFactorys", getFactorys);




export default router