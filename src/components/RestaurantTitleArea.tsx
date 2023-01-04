import RestaurantTitleButtonArea from "./RestaurantTitleButtonArea";
import RestaurantTitleTextArea from "./RestaurantTitleTextArea";
import Category from "../models/category";
import restaurant from "../models/restaurant";

interface RestaurantTitleAreaProps {
    onExitButtonClicked : () => void;
    onTitleButtonClicked : (id:number, category : Category) => void;
    category : Category;
    restaurant : restaurant;
}

export default function RestaurantTitleArea({onExitButtonClicked,onTitleButtonClicked, category, restaurant}:RestaurantTitleAreaProps)
:JSX.Element{
    return <>
        <RestaurantTitleButtonArea onExitButtonClicked={onExitButtonClicked} category={category}/>
        <RestaurantTitleTextArea onTitleButtonClicked={onTitleButtonClicked} category = {category} restaurant={restaurant}/>
    </>
}