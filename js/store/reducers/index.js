import { combineReducers } from 'redux';

import nav from './nav';
import initiates from './initiates';
import templates from './templates';
import monsters from './monsters';

export default combineReducers({
    nav,
    initiates,
    templates,
    monsters
});

