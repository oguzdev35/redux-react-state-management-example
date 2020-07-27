import { createStore, compose } from 'redux';
import DevTools from '../ui/DevTools';

const enhancer = compose(
    DevTools.instrument()
);

export default createStore( state => state, {
    message: 'React-Redux-Example'
}, enhancer)