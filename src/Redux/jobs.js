import * as ActionTypes from './ActionTypes';

export const Jobs = (state = {
    isLoading: true,
    errMess: null,
    jobs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_JOBS:
            return { ...state, isLoading: false, errMess: null, jobs: action.paylaod };

        case ActionTypes.JOBS_LOADING:
            return { ...state, isLoading: true, errMess: null, jobs: [] };

        case ActionTypes.JOBS_FAILED:
            return { ...state, isLoading: false, errMess: action.paylaod };

        default:
            return state;
    }
};