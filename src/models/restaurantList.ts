import Category from "./category";
import Tag from "./tag";

export default interface RestaurantList {
    name : string;
    url : string;
    x : string;
    y : string;
    tags : Tag[];
}