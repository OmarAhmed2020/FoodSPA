/* eslint-disable no-unused-vars */
import classes from "./Card.Module.css";
const Card = (props) => {
  return <div className={classes.card}>{props.children} </div>;
};
export default Card;
