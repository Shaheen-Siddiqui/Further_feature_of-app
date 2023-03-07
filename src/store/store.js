import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist';
 import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [process.env.NODE_ENV !=="production" && logger].filter(Boolean);
const composeEnhanser=(process.env.NODE_ENV !=="production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const compresedEnhance = composeEnhanser(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, compresedEnhance);
export const persistor = persistStore(store);

