import express from "express";
import {
  createProduct,
  deletePro,
  getPro,
  getPros,
  updatePro,
} from "../controllers/product.js";
import { getUsers,
         deleteUser} from "../controllers/user.js"
import Product from "../models/Product.js";
import {verifyAdmin, verifyFactory} from "../utils/verifyToken.js"
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
router.get("/products",verifyFactory, getPros);
router.get("/users", getUsers);



export default router;