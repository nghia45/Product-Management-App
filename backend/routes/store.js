import express from "express";

import { sellProduct,
         moveBrokenProToService,
         getStore,
         getStores,
         getOrder,
         getOrders,
         getProduct,
         getProducts,
         updateOrder,
         deleteOrder,
         deletestoreproduct,
         getOrdersInstore } from "../controllers/store.js";

import { verifyStore } from "../utils/verifyToken.js";


const router = express.Router();


router.post("/sellProduct/:storeid/:proid", verifyStore, sellProduct);

router.post("/moveBroProToSer/:orderid/:serviceid", verifyStore, moveBrokenProToService);

router.delete("/orders/:id", verifyStore,  deleteOrder);

router.get("/findStoreProduct/:id/:proid", verifyStore, getProduct);

router.get("/storeproducts/:id", verifyStore, getProducts);

router.get("/findStore/:id", verifyStore, getStore);

router.get("/allStores", verifyStore, getStores);

router.get("/findStoreOrder/:orderid", verifyStore, getOrder);

router.get("/orders/:id", verifyStore, getOrders);

router.get("/ordersinstore/:id", verifyStore, getOrdersInstore);

router.get("/updateOrder/:id", verifyStore, updateOrder);

router.delete("/storeproducts/:id", verifyStore, deletestoreproduct);

export default router