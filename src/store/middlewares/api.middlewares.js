import { BOOKS, FETCH_BOOKS, setBooks } from '../actions/books.action';
import { API_ERROR, API_SUCCESS, apiRequest } from '../actions/api.action';
import { setLoader } from '../actions/ui.action';
import { setNotification } from '../actions/notification.action';

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=redux';

export const booksMiddleware = () => next => action => {
    next(action);
    switch(action.type)
}