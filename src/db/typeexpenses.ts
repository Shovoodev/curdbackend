import mongoose from 'mongoose'

const typeExpenses = new mongoose.Schema({
    typeOfExpenses : {
        type : String,
         required : true,
    }
})
export const typeModel = mongoose.model("Types", typeExpenses)
export const allTypes = () => typeModel.find()
export const createType = (values : Record<string, any>) => new typeModel(values).save().then((type) => type.toObject())