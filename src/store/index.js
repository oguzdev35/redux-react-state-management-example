import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './reducers/books.reducer';
import booksMiddleware from './middlewares/books.middleware';
import apiMiddleware from './middlewares/api.middleware';
import normalizeMiddleware from './middlewares/normalize.middleware';
import notificationMiddleware from './middlewares/notification.middleware';
import uiReducer from './reducers/ui.reducer';
import notificationReducer from './reducers/notification.reducer';
import DevTools from '../ui/DevTools';

// shape the state structure
const rootReducer = combineReducers({
    books: booksReducer,
    ui: uiReducer,
    notification: notificationReducer
})

// create the feature middleware
const featureMiddleware = [
    booksMiddleware
];

// create the core middleware
const coreMiddleware = [
    apiMiddleware,
    normalizeMiddleware,
    notificationMiddleware
]

const enhancer = compose(
    applyMiddleware(...featureMiddleware, ...coreMiddleware),
    DevTools.instrument()
);

export default createStore( rootReducer, {}, enhancer)