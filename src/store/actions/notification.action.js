// action types
export const SET_NOTIFICATION = 'SET NOTIFICATION';

// action creators
export const setNotification = ({message, feature}) => ({
    type: `${feature} ${SET_NOTIFICATION}`,
    payload: message,
    meta: {feature}
});

