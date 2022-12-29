import Category from "./category";
import Tag from "./tag";

export default interface Restaurant {
    id : number;
    name : string;
    url : string;
    x : number;
    y : number;
    categories : Category[];
    tags : Tag[];
}