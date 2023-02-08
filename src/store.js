import { legacy_createStore as createStore } from "redux";
import rootred  from "./redux/reducers/main";

const store = createStore(
    rootred,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store

