import { BOOKS, FETCH_BOOKS, setBooks } from '../actions/books.action';
import { API_ERROR, API_SUCCESS, apiRequest } from '../actions/api.action';
import { setLoader } from '../actions/ui.action';
import { setNotification } from '../actions/notification.action';

const BOOKS_URL = 'https://sdwww.googleapis.com/books/v1/volumes?q=redux';

export default () => next => action => {
    next(action);
    switch(action.type){
        case FETCH_BOOKS:
            next(apiRequest({body: null, method: 'GET', url: BOOKS_URL, feature: BOOKS}));
            next(setLoader({state: true, feature: BOOKS}));
            break;
        case `${BOOKS} ${API_SUCCESS}`:
            next(setBooks({books: action.payload.items, normalizeKey: 'id'}));
            next(setLoader({state: false, feature: BOOKS}));
            break;
        case `${BOOKS} ${API_ERROR}`:
            next(setNotification({message: action.payload, feature: BOOKS}))
            next(setLoader({state: false, feature: BOOKS}))
            break;
        default:
            break;
    }
}