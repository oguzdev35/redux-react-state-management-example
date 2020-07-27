import { SET_BOOKS } from '../actions/books.action';

const initialState = [];

export default (books = initialState, action) => {
    switch(action.type){
        case SET_BOOKS:
            return action.payload;
        default:
            return books;
    }
};
