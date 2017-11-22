import { combineReducers } from 'redux';

import nav from './nav';
import initiates from './initiates';
import templates from './templates';

export default combineReducers({
    nav,
    initiates,
    templates
});

