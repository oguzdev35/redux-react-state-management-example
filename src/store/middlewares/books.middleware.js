import Axios from 'axios';
import { API_REQUEST, apiError, apiSuccess } from '../actions/api.action';


export const apiMiddleware = ({dispatch}) => next => action => {
    next(action);

    if(action.type.includes(API_REQUEST)){
        const { body, url, method, feature } = action.meta;

        Axios({url, method, data: body})
            .then( res => dispatch(apiSuccess({response, feature})))
            .catch( err => dispatch(apiError({error, feature})))
    
    }
};