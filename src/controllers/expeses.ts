import express from 'express'
import { allProducts, createProduct } from './../db/expenses';
export const expensesRegister = async(req: express.Request , res : express.Response) : Promise<any> => {
    try {
        const { product , price } = req.body; 
        if(!product || !price ) {
            return res.sendStatus(400);
        }
    const productdata = await createProduct({
        product,
        price
    })
    return res.status(200).json(productdata).end();

    } catch (error) {
        console.error(error);
        
    }
}
export const getAllProducts = async(req: express.Request , res: express.Response) : Promise<any> => {
    try {
        const products = await allProducts()
        return res.status(200).json(products).end()
    }
    catch(error){
        console.log(error);
        res.sendStatus(400)
        
    }
}