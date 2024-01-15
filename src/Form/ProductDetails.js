import React from "react";

const ProductDetails = (props) => {

  const deleteHandler = (index) => {
    
    const updatedItems = [...props.items];
   
    // Use array destructuring to get the deleted item
    const [toBeDeleted] = updatedItems.splice(index, 1);
    
    // Use the ProductID of the deleted item to remove it from localStorage
    localStorage.removeItem(toBeDeleted.ProductID);

    // Update the state with the new array
    props.onDelete(updatedItems);
  }

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {props.items.map((item, index) => (
        <li key={index} style={{marginRight: "10px" }}>
          <p>
            ProductID: {item.ProductID} |
            SellingPrice: {item.SellingPrice} |
            ProductName: {item.ProductName}
            <button type="button" onClick={() => deleteHandler(index)}> Delete </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductDetails;


