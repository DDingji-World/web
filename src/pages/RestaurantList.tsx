import RestaurantListTitle from "../components/RestaurantListTitle";
import RestaurantListBody from "../components/RestaurantListBody";
import {useLocation} from "react-router";
import Category from "../models/category";


const getLocationCategory = (): Category => {
  const category = useLocation().state?.category as Category
  if (category.name == '?' || !category.name) return {name: "ALL"} as Category
  if(category.name == '양식\n아시안') return {name: "양식/아시안"} as Category
  if(category.name == '카페\n디저트') return {name: "카페/디저트"} as Category
  return category
}


export default function RestaurantList() {
  const category = getLocationCategory()

  return <>
    <RestaurantListTitle _category={category}/>
    <RestaurantListBody _category={category}/>
  </>
}