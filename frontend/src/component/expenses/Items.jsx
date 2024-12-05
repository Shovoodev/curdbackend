import React, { useState } from "react";
import Button from "../ui/Button";
import { Trash2 } from "lucide-react";
import { NavLink } from "react-router";

const Items = ({ productId, product, price , refreshAllData  }) => {
 
  const handleDelete = async () => {
    await fetch("http://localhost:5500/product/" + productId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    refreshAllData()
  };

  return (
    <div className="flex-col p-3 gap-5 border rounded-lg">
      <div className="flex gap-3 items-baseline">
        <p className="text-lg">
          {product}
          <p>{price} euro</p>
        </p>
        <Button className="bg-blue-300 p-2 rounded"> 
          <NavLink to={`/edit/${productId}`} > Edit </NavLink>
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-600  p-2 rounded"
          onClick={handleDelete}>
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default Items;
