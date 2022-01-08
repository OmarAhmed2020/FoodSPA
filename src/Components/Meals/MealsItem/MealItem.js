/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import MealItemForm from "./MealsItemForm";
import classes from "./MealItem.Module.css";
import CartContext from "../../../Store/CartContext";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const AddItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={AddItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
