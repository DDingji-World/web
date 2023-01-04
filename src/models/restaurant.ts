import Category from "./category";
import Tag from "./tag";

export default interface Restaurant {
    id: number,
    name : string;
    x : string;
    y : string;
    url : string;
    categories : Category[];
    tags : Tag[];
}