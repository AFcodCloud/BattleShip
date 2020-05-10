import { createStore, combineReducers } from "redux";
import logicGameReducer from "./reducers/logicGameReducer";

const reducers = combineReducers({logic:logicGameReducer})

const store = createStore(reducers)


export default store;



window.store=store;