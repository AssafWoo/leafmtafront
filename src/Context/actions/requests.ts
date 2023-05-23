import { RequestType } from "../../interfaces/request";
export const LOAD_REQUESTS = '[requests] load';
export const LOAD_REQUESTS_SUCCESS = '[requests] success';
export const LOAD_REQUESTS_FAILURE = '[requests] failure';
export const SET_REQUESTS = '[requests] set';

export const loadRequests = {
    type:LOAD_REQUESTS,
}



export const loadRequestsSuccess = (requests:Array<RequestType>) => ({
    type:LOAD_REQUESTS_SUCCESS,
    payload:requests
});

export const loadRequestsFailure = (error:any) => ({
    type:LOAD_REQUESTS_FAILURE,
    payload:error,
});

export const setRequests = (requests:Array<RequestType>) => ({
    type:SET_REQUESTS,
    payload:requests
});


