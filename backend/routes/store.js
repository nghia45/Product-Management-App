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
const router = express.Router();


router.post("/sellProduct/:storeid/:proid", sellProduct);

router.post("/moveBroProToSer/:orderid/:serviceid", moveBrokenProToService);

router.delete("/orders/:id",deleteOrder);

router.get("/findStoreProduct/:id/:proid", getProduct);

router.get("/storeproducts/:id", getProducts);

router.get("/findStore/:id", getStore);

router.get("/allStores", getStores);

router.get("/findStoreOrder/:orderid", getOrder);

router.get("/orders/:id", getOrders);

router.get("/ordersinstore/:id", getOrdersInstore);

router.get("/updateOrder/:id", updateOrder);

router.delete("/storeproducts/:id", deletestoreproduct);

export default router