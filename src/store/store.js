import { compose, createStore, applyMiddleware } from "redux";
// import { Logger } from "sass";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";

const middlewares=[logger]
const compresEnhance=compose(applyMiddleware(...middlewares))

export const store=createStore(rootReducer,undefined,compresEnhance)