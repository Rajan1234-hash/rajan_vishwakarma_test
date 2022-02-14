

import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {ProductListselected} from "./productlistselected.js";
import {TotalItemSelected} from "./totalitemselected.js";



const persistConfig = {
    key: "root",
    storage,
    whitelist: ["ProductListselected","TotalItemSelected"],
  };

const rootReducer= combineReducers({
    ProductListselected,TotalItemSelected
})

export default persistReducer(persistConfig, rootReducer);