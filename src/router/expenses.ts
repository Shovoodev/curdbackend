import {
  deleteThisProduct,
  expensesRegister,
  getAllProducts,
  updateProduct,
} from "../controllers/expeses";
import express from "express";

export default (router: express.Router) => {
  router.post("/expenses", expensesRegister);
  router.get("/allproducts", getAllProducts);
  router.delete("/product/:id", deleteThisProduct);
  router.patch("/product/update/:id", updateProduct);
};
