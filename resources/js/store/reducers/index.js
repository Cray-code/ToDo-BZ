import { combineReducers } from "redux";
import listsReducer from './lists';
import tasksReducer from './tasks';
import termsReducer from './terms';
import repeatsReducer from './repeats';
import userReducer from './user';
import visibilityFilterReducer from './visibilityFilter';
export default combineReducers({ listsReducer, tasksReducer, termsReducer, repeatsReducer, userReducer, visibilityFilterReducer });
