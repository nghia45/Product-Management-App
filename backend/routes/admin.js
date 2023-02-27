import express from "express";
import {
  createProduct,
  deletePro,
  getPro,
  getPros,
  updatePro,
} from "../controllers/product.js";
import { getUsers,
         deleteUser, 
         countOrder,
          countUser,
          getIncomeMonthly} from "../controllers/user.js"
import {getAllOrders} from "../controllers/store.js"
import Product from "../models/Product.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/createProduct", verifyAdmin, createProduct);

//UPDATE
router.put("/updateProduct/:id", verifyAdmin,  updatePro);
//DELETE
router.delete("/products/:id", verifyAdmin, deletePro);
router.delete("/users/:id", verifyAdmin, deleteUser);
//GET

router.get("/findProduct/:id", verifyAdmin, getPro);
//GET ALL
router.get("/products", verifyAdmin, getPros);
router.get("/users", verifyAdmin, getUsers);
router.get("/product", verifyAdmin, getAllOrders);

//COUNT
router.get("/countUser", verifyAdmin, countUser);
router.get("/countOrder", verifyAdmin, countOrder);
router.get("/countIncome", verifyAdmin, getIncomeMonthly);


export default router;