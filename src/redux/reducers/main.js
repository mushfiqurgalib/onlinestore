import { combineReducers } from "redux";
import {cartreducer} from './reducer';
import { itemreducers } from "./itemreducer";
const rootred = combineReducers({

    cartreducer,itemreducers
});

export default rootred