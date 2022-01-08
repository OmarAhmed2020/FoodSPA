/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import MealItem from "./MealsItem/MealItem";
import classes from "./AvailableMeals.Module.css";
import Card from "../UI/Card";

const MealsAvailable = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-e2621-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error(
          "Somthing went wrong with the server you cant try later!!!"
        );
      }

      const responseData = await response.json();
      const loadeddMeals = [];
      for (const key in responseData) {
        loadeddMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setIsLoading(false);
      setMeals(loadeddMeals);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        {" "}
        <p>is Loading</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>Somthing went wrong with the server you can try later !!!</p>
      </section>
    );
  }
  const MealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {" "}
        <ul>{MealsList}</ul>
        {isLoading && <p>is Loading</p>}
      </Card>
    </section>
  );
};
export default MealsAvailable;
