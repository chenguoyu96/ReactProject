import {ADD_USER_LIST} from "./actionTypes";
import {combineReducers} from "redux/es/redux";

const initData = {
    userList: []
};

const userList = (state = initData.userList, action) => {
    switch (action.type) {
        case ADD_USER_LIST:
            return action.userList;
        default:
            return []
    }
};
const user = combineReducers(userList);
export default user;
