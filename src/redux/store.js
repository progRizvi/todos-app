import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const rootReducers = combineReducers({
	todos: todoReducer
});
const store = createStore(rootReducers, composeWithDevTools());

export default store;
