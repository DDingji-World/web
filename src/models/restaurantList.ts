import Category from "./category";
import Tag from "./tag";

export default interface RestaurantList {
    id : number;
    name : string;
    url : string;
    x : string;
    y : string;
    tags : Tag[];
}