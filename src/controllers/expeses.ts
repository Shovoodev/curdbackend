import express from "express";
import { allProducts, createProduct, deleteProduct, updateProductById } from "./../db/expenses";

export const expensesRegister = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const { product, price } = req.body;
    if (!product || !price) {
      return res.sendStatus(400);
    }
    const productdata = await createProduct({
      product,
      price,
    });
    return res.status(200).json(productdata).end();
  } catch (error) {
    console.error(error);
  }
};
export const getAllProducts = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const products = await allProducts();
    return res.status(200).json(products).end();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const deleteThisProduct = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  console.log("here");
  try {
    const { id } = req.params;
    console.log({ id });

    const deletedProduct = await deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(deletedProduct).end();
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
export const updateProduct = async(req: express.Request , res : express.Response) : Promise<any> => {

  try {
    const { id } = req.params
      const { product , price} = req.body
      const updatedProduct = await updateProductById(id , {product , price})
      updatedProduct.product = product
      updatedProduct.price = price
      console.log(product , price);
      await updatedProduct.save()
      return res.status(200).json(updatedProduct).end()
  } catch (error) {
      console.log(error);
      return res.sendStatus(400)
  }
}