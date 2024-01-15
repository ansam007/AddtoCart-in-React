import React, {useState} from "react";

const FormPage = (props) => {
    const [currentID, setCurrentID] = useState('');
    const [sellingCost, setsellingCost] = useState('');
    const [name, setName] = useState('');

    const ProductIDHandler = (event) => {
        setCurrentID(event.target.value);
    }

    const SellingPriceHandler = (event) => {
        setsellingCost(event.target.value);
    }

    const ProductNameHandler = (event) => {
        setName(event.target.value);
    }

    const SubmitHandler = (event) => {
        event.preventDefault();

        var data = {
            ProductID : currentID,
            SellingPrice : sellingCost,
            ProductName : name,
        }

        const jsonString = JSON.stringify(data);

        localStorage.setItem(data.ProductID, jsonString);
        props.addItems(jsonString);

        setCurrentID('');
        setsellingCost('');
        setName('');
    }

    return (
        <form onSubmit={SubmitHandler}>
            <label for="ProductID" style={{marginRight: "0.25rem"}}>ProductID:</label>
            <input type="number" id="ProductID" style={{marginRight:"1rem"}} value={currentID} onChange={ProductIDHandler}></input>
            <label for="SellingPrice" style={{marginRight: "0.25rem"}}>SellingPrice:</label>
            <input type="number" id="SellingPrice" style={{marginRight:"1rem"}} value={sellingCost} onChange={SellingPriceHandler}></input>
            <label for="ProductName" style={{marginRight: "0.25rem"}}>ProductName:</label>
            <input type="text" id="ProductName" style={{marginRight:"0.50rem"}} value={name} onChange={ProductNameHandler}></input>
            <button type="submit">Add Product</button>
        </form>
    )
}
export default FormPage;