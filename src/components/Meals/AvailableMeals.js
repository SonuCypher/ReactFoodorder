import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./Mealitem/MealItem";

// const DUMMY = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

function AvailableMeals() {
  const [meals, setMeals] = useState([])

  useEffect(()=> {
    const fetchMeals = async()=>{
     const response = await fetch('https://reactfoodcart-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')
     const responseData = await response.json()

     const loadedMeals = []
    //  console.log(responseData)
     
      for(const key in responseData) {
      //  console.log(`${key} ${responseData[key].name} ${responseData.m1.name}`)
        loadedMeals.push({
          id:key,
          name:responseData[key].name,
          description: responseData[key].description,
          price:responseData[key].price
        })
      }
      setMeals(loadedMeals)
    }
    fetchMeals()
  },[])

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
