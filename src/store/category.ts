import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "./index";

export const categorySlice = createSlice({
    name: 'category',
    initialState: "?",
    reducers: {
        SELECT: (state,action) => {
            return action.payload;
        },
    },
})
export const useCategorySelector = () =>
    useSelector((state: RootState) => state.category)
