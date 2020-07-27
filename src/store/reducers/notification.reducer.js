import { SET_NOTIFICATION } from '../actions/notification.action';

const initialState = [];

export default (notifications = initialState, action) => {
    switch(true){
        case action.type.includes(SET_NOTIFICATION):
            return [...notifications, action.payload];
        default:
            return notifications;
    }
}