/**
 * Created by feichongzheng on 17/10/23.
 */
import {combineReducers} from 'redux';


export default function createReducer(asyncReducers) {
    const reducers = {
        ...asyncReducers,
    };
    return combineReducers(reducers);
}