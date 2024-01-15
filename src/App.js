import FormPage from "./Form/FormPage";
import React, { useState, useEffect } from "react";
import ProductDetails from "./Form/ProductDetails";
import ExpenseDetail from "./Form/ExpenseDetail";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = Object.keys(localStorage).map((key) => {
      return JSON.parse(localStorage.getItem(key));
    });

    setUserData(storedData);
  }, []);

  function addItemsHandler(data) {
    const retrievedData = JSON.parse(data);

    setUserData((prevData) => [...prevData, retrievedData]);
  }

  const handleDelete = (updatedItems) => {
    setUserData(updatedItems);
  }

  return (
    <div>
      <FormPage addItems={addItemsHandler}></FormPage>
      <ProductDetails items={userData} onDelete={handleDelete}></ProductDetails>
      <ExpenseDetail item={userData}></ExpenseDetail>
    </div>
  );
}

export default App;
