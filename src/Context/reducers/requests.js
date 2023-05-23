import {LOAD_REQUESTS_SUCCESS, SET_REQUESTS, LOAD_REQUESTS_FAILURE} from '../actions/requests';

const reducer = (state, action) => {
    switch(action.type){
        case LOAD_REQUESTS_FAILURE:
            return {error:action.payload}
        case LOAD_REQUESTS_SUCCESS:
            return {allTransactions: action.payload, error:null}
        case SET_REQUESTS:
            return {allTransactions: action.payload, error:null}
        default:
            return state;
    }
}

export default reducer;