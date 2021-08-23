import {LOGIN, UPDATE_BALANCE} from "./constants";
export const createLogin = (payload) =>{
    const action = {
        type: LOGIN,
        payload
    }
    return action
}

export const createUpdateBalance = (payload) =>{
    const action = {
        type: UPDATE_BALANCE,
        payload
    }
    return action
}
