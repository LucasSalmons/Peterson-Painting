import { STAFF } from '../shared/staff';
import { JOBS } from '../shared/jobs';

export const initialState = {
    staff: STAFF,
    jobs: JOBS
};

export const Reducer = (state = initialState, action) => {
    return state;
};