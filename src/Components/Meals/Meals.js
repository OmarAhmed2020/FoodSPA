import MealsAvailable from "./AvailableMeals.js";
import MealsSummary from "./MealsSummary";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsAvailable />
    </Fragment>
  );
};
export default Meals;
