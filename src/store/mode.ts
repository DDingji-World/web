import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "./index";

export const modeSlice = createSlice({
    name: 'mode',
    initialState: true,
    reducers: {
        SHUFFLE: () => {
            return true
        },
        LIST: () => {
            return false
        }
    },
})
export const useModeSelector = () =>
    useSelector((state: RootState) => state.mode)
