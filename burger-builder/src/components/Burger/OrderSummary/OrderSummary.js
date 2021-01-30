import React from "react";

import Aux from "../../../hoc/aux";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((obj) => {
    return (
      <li key={obj}>
        <span>{obj}: </span> {props.ingredients[obj]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
    </Aux>
  );
};

export default orderSummary;
