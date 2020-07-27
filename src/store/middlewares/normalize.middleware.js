import { dataNormalized } from '../actions/data.action';
import { setBooks } from '../actions/books.action';

export default ({dispatch}) => next => action => {
    // filter both by action type and metadata content
    if(action.type.includes('SET') && action.meta.normalizeKey){
        //notify about the transformation
        dispatch(dataNormalized({feature: action.meta.feature}));

        //transform the data structure
        const books = action.payload.reduce((acc, item) => {
            acc[item[action.meta.normalizeKey]] = item;
            return acc;
        }, {});

        //fire the books document action
        next(setBooks({books, normalizeKey: null}))
    } else {
        next(action);
    }
}