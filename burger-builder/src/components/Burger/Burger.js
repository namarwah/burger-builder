import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  const transformedIngredient = Object.keys(props.ingredients).map((obj) => {
    return [...Array(props.ingredients[obj])].map((_, index) => {
      return <BurgerIngredient type={obj} key={obj + index} />;
    });
  });
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
