import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import booksReducer from './reducers/books.reducer';
import booksMiddleware from './middlewares/books.middleware';
import apiMiddleware from './middlewares/api.middleware';
import normalizeMiddleware from './middlewares/normalize.middleware';
import notificationMiddleware from './middlewares/notification.middleware';
import loggerMiddleware from './middlewares/logger.middleware';
import actionSplitterMiddleware from './middlewares/actionSplitter.middleware';
import uiReducer from './reducers/ui.reducer';
import notificationReducer from './reducers/notification.reducer';
import undoableEnhancer from './enhancers/undoable.enhancer';
import stateFreezerEnhancer from './enhancers/stateFreezer.enhancer';
import DevTools from '../ui/DevTools';

// shape the state structure
const rootReducer = combineReducers({
    books: undoableEnhancer(booksReducer),
    ui: uiReducer,
    notification: notificationReducer
})

// create the feature middleware
const featureMiddleware = [
    booksMiddleware
];

// create the core middleware
const coreMiddleware = [
    actionSplitterMiddleware,
    apiMiddleware,
    normalizeMiddleware,
    notificationMiddleware,
    loggerMiddleware
]

const enhancer = compose(
    applyMiddleware(...featureMiddleware, ...coreMiddleware),
    DevTools.instrument()
);

export default createStore( 
    stateFreezerEnhancer(rootReducer),
    {}, 
    enhancer
)