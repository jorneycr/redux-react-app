import { createStore, combiseReducers } from "redux";
import * as reducers from '../reducers';

const rootReducer = combiseReducers(reducers);

export const store = createStore(rootReducer);