import {createStore} from "redux";
import createReducer from "./reducers";

export default function initStore() {
    let store = createStore(createReducer());
    return store;
}