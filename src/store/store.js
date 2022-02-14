// import { configureStore, createStore } from '@reduxjs/toolkit';
import {createStore} from "redux";
import counterReducer from '../features/counter/counterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from "../reducer/index.js";


const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export const store =createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export const persistor = persistStore(store);
// return { store, persistor }
// export default () => {
   
//     return { store, persistor }
//   }
export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
