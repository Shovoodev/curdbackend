import React, { useState } from 'react'
import ExpendField from '../ui/ExpendFIeld'
import Button from '../ui/Button'
import {  NavLink, useParams } from 'react-router'

const EditExpense = () => {
    const [updatedExpense , setUpdatedExpense] = useState({product : "" , price : ""})
    let { id } = useParams();
    const handelEdit = async() => {
        console.log(updatedExpense);
    await fetch("http://localhost:5500/product/update/" +id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify({
            product : updatedExpense.product,
            price : updatedExpense.price 
        })
      })
    .then((response) => response.json())
    .then((data) => {
        setUpdatedExpense(data)
      })
      
    .catch((error) => {
      console.log(error);
    })
    }
  return (
    <div>
        <ExpendField
            label="update expens Name "
            onChange={(e)=>setUpdatedExpense({... updatedExpense, product: e.target.value})}
          />
          <ExpendField
          onChange={(e)=>setUpdatedExpense({... updatedExpense, price: e.target.value})}
            type="number"
            label="update new Price"/>
            <Button onClick={handelEdit} className="bg-blue-300 p-2 rounded"> 
          <NavLink to="/expenses"> Done </NavLink>
        </Button>
    </div>
  )
}

export default EditExpense