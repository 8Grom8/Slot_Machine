import {initialState} from "./initialState";
import {v4} from "uuid";

export const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case "LOGIN":
            return {...state, profileData: action.payload};
        case "UPDATE_BALANCE":
            const newBalance = state.userBalance+action.payload
            return {...state, userBalance: newBalance, data: [...state.data, {id: v4(), Slot1: newBalance, time: Date.now()}]}
        default:
            return state;
    }
};
