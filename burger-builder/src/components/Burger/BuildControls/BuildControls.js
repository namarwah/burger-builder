import React from "react";

import BuildControl from "../BuildControls/BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Meat",
    type: "meat",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
];

const buildControls = (props) => (
  <div className={classes.buildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((obj) => (
      <BuildControl
        key={obj.label}
        label={obj.label}
        disabled={props.disabled[obj.type]}
        removed={() => props.ingredientRemoved(obj.type)}
        added={() => props.ingredientAdded(obj.type)}
      />
    ))}
    <button
      disabled={!props.purchasable}
      className={classes.orderButton}
      onClick={props.ordered}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
