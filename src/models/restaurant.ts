import Category from "./category";
import Tag from "./tag";

export default interface Restaurant {
    name : string;
    url : string;
    x : string;
    y : string;
    categories : Category[];
    tags : Tag[];
}