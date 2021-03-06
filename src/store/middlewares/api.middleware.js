import Axios from 'axios';
import { API_REQUEST, apiError, apiSuccess } from '../actions/api.action';


export default ({dispatch}) => next => action => {
    next(action);

    if(action.type.includes(API_REQUEST)){
        const { body, url, method, feature } = action.meta;

        Axios({url, method, data: body})
            .then( ({data}) => data)
            .then( response => dispatch(apiSuccess({response, feature})))
            .catch( error => dispatch(apiError({error, feature})))
    }
};
