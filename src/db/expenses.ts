import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema({
    product : { type : String , required : true },
    price : {type : Number , required : true}
})
const product = mongoose.model("Product", expenseSchema)

export const allProducts = () => product.find()

export const createProduct = (values : Record<string, any>) => new product(values).save().then((item) => item.toObject())
export const updateProduct = (id : string , values : Record<string ,any>) => product.findByIdAndDelete({id , values})
export const deleteProduct = (id: any)  => product.deleteOne({ _id: id })
export const updateProductById = (id : string , values : Record<string ,any>) => product.findByIdAndUpdate(id , values)