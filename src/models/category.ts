import Restaurant from "./restaurant";

export default interface Category {
    id : number;
    name : string;
    restaurants : Restaurant[];
}