import { reducer as formReducer} from "redux-form";


const { combineReducers, createStore } = require("redux");
const { default: gradientsReducer } = require("./gradientsReducer");

let reducers = combineReducers({
    gradients:gradientsReducer,
    form:formReducer
})
const store = createStore(reducers)
window.store = store
export default store
