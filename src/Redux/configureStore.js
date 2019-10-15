import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';

import { Jobs } from './jobs';
import { Staff } from './staff';
import { InitalFeedback } from './forms';
import { InitalRating } from './forms';

import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            jobs: Jobs,
            staff: Staff,
            ...createForms({
                feedback: InitalFeedback,
                rating: InitalRating
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}