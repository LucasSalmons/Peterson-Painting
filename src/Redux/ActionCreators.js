import * as ActionTypes from './ActionTypes';

import { baseUrl } from '../shared/baseUrl';

export const postFeedback = (feedback) => (dispatch) => {

    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin",
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { console.log('Feedback', response); alert('Thank you for your feedback!') })
        .catch(error => {
            console.log('post feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};

export const postRating = (rating) => (dispatch) => {

    return fetch(baseUrl + 'rating', {
        method: "POST",
        body: JSON.stringify(rating),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin",
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { console.log('rating', response); alert('Your rating has been sent thank you.') })
        .catch(error => {
            console.log('post rating', error.message);
            alert('Sorry we could not recieve your rating\nError: ' + error.message);
        });
};

export const fetchJobs = () => (dispatch) => {
    dispatch(jobsLoading(true));

    return fetch(baseUrl + 'jobs')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(jobs => dispatch(addJobs(jobs)))
        .catch(error => dispatch(jobsFailed(error.message)));
};

export const jobsLoading = () => ({
    type: ActionTypes.JOBS_LOADING
});

export const jobsFailed = (errmess) => ({
    type: ActionTypes.JOBS_FAILED,
    payload: errmess
});

export const addJobs = (jobs) => ({
    type: ActionTypes.ADD_JOBS,
    payload: jobs
});

export const fetchStaff = () => (dispatch) => {
    dispatch(staffLoading());

    return fetch(baseUrl + 'staff')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(staff => dispatch(addStaff(staff)))
        .catch(error => dispatch(staffFailed(error.message)));
};

export const staffLoading = () => ({
    type: ActionTypes.STAFF_LOADING
});

export const staffFailed = (errmess) => ({
    type: ActionTypes.STAFF_FAILED,
    payload: errmess
});

export const addStaff = (staff) => ({
    type: ActionTypes.ADD_STAFF,
    payload: staff
});