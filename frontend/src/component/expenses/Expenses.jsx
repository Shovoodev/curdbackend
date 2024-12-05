import React, { useState, useEffect } from "react";
import ExpendField from "../ui/ExpendFIeld";
import Button from "../ui/Button";
import Items from "./Items";

const Expenses = () => {
  const [expenseData, setExpenseData] = useState({
    id: "",
    product: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    await fetch("http://localhost:5500/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });
    console.log(data)
    refreshAllData()
    setData(data)
    setLoading(false);
  };

const refreshAllData = async()=> {
  await fetch("http://localhost:5500/allproducts")
  .then((response) => response.json())
  .then((data) => {
    setData(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    setLoading(false);
  });
}

  useEffect(() => {
    setLoading(true);
    refreshAllData()
   setLoading(false)
  }, [setData]);

  return (
    <>
      <div className="flex justify-center border rounded-xl ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-full max-w-xs md:flex md:justify-center mb-6 pt-4"
        >
          <ExpendField
            label="Your expens Name "
            onChange={(e) =>
              setExpenseData({ ...expenseData, product: e.target.value })
            }
          />
          <ExpendField
            type="number"
            label="Enter Your Price"
            onChange={(e) =>
              setExpenseData({ ...expenseData, price: e.target.value })
            }
          />
          <Button type="submit"> ADD Entry </Button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-1 p-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {!data?.length ? (
              <p>No Products found</p>
            ) : (
              data?.map(({ _id, product, price }) => {
                return (
                  <Items
                    key={_id}
                    productId={_id}
                    product={product}
                    price={price}
                    refreshAllData={refreshAllData}
                  />
                );
              })
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Expenses;
