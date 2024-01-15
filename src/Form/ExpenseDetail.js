import React from "react";

const ExpenseDetail = (props) => {
  let sum = 0;

  // Calculate the sum outside JSX
  props.item.forEach((item) => {
    sum += parseInt(item.SellingPrice);
  });

  return (
    <div>
      <h3>Total cart value: {sum}</h3>
    </div>
  );
};

export default ExpenseDetail;

