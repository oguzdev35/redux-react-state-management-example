import {deepFreeze} from '../utils/deepFreeze';


// this enhancer help us to enforce immutability
export default (reducer) => (state, action) => {
    // freezer this state and run the original reducer
    deepFreeze(state);
    const newState = reducer(state, action);

    // freeze and return the result state
    deepFreeze(newState);
    return newState;
}