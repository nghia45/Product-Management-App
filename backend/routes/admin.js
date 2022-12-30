import express from "express";
import {
  createProduct,
  deletePro,
  getPro,
  getPros,
  updatePro,
} from "../controllers/product.js";
import {
  getUsers,
  deleteUser,
  getIncomeMonthly,
  countUser,
  countOrder,
  //getTotalIncome,
} from "../controllers/user.js";
import Product from "../models/Product.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { getOrders, getAllOrders } from "../controllers/store.js";
const router = express.Router();

//CREATE
router.post("/createProduct", createProduct);

//UPDATE
router.put("/updateProduct/:id", updatePro);
//DELETE
router.delete("/products/:id", deletePro);
router.delete("/users/:id", deleteUser);
//GET

router.get("/findProduct/:id", getPro);
//GET ALL
router.get("/products", getPros);
router.get("/users", getUsers);
router.get("/product", getAllOrders);

//COUNT
router.get("/countUser", countUser);
router.get("/countOrder", countOrder);
router.get("/countIncome", getIncomeMonthly);
//router.get("/countTotalIncome", getTotalIncome);
export default router;
