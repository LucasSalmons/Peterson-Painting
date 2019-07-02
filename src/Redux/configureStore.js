import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

import { Jobs } from './jobs';
import { Staff } from './staff';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            jobs: Jobs,
            staff: Staff,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}