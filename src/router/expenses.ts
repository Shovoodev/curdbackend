import { expensesRegister, getAllProducts } from '../controllers/expeses'
import express  from 'express'


export default (router: express.Router)=> { 
    router.post("/expenses", expensesRegister)
    router.get("/allproducts", getAllProducts)
}