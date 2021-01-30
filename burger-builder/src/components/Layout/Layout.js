import React from "react";
import Aux from "../../hoc/aux";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Aux>
    <div>toolbar siderbar backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default layout;
