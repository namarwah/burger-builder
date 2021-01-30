import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients)
    .map((obj) => {
      return [...Array(props.ingredients[obj])].map((_, index) => {
        return <BurgerIngredient type={obj} key={obj + index} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please start adding ingredients!!!</p>;
  }
  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
