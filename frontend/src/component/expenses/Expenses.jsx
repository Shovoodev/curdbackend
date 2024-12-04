import React, { useState, useEffect } from "react";
import ExpendField from "../ui/ExpendFIeld";
import Button from "../ui/Button";

const Expenses = () => {
  const [expenseData, setExpenseData] = useState({ product: "", price: "" });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5500/allproducts")
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });

        setData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className="w-full">
        <ExpendField
          label="Your expens Name "
          onChange={(e) =>
            setExpenseData({ ...expenseData, product: e.target.value })
          }
        />
        <ExpendField
          label="Enter Your Price"
          onChange={(e) =>
            setExpenseData({ ...expenseData, price: e.target.value })
          }
        />
        <Button type="submit"> ADD Entry </Button>
      </form>
      <div className="flex justify-center p-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {!data?.length ? (
              <p>No Products found</p>
            ) : (
              data?.map(({ id, product, price }) => {
                return (
                  <ul key={id}>
                    {" "}
                    <li>{product} </li> <li>{price}</li>
                  </ul>
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
