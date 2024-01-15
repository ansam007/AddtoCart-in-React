import FormPage from "./Form/FormPage";
import React, {useState} from "react";

function App() {
  const [userData, setUserData] = useState([]);

  function addItemsHandler(data) {
    setUserData((prevData) => [
      ...prevData,
      data
    ]);
    console.log(data);
  }
  

  return (
    <div>
      <FormPage addItems={addItemsHandler}></FormPage>
      {userData.map((item, index) => (
        <div key={index}>
          <p>{item.ProductID}</p>
          <p>{item.SellingPrice}</p>
          <p>{item.ProductName}</p>
        </div>
      ))}
    </div>
  );
  
}

export default App;
