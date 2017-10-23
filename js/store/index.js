import { createStore } from 'redux';
import combinedReducers from './reducers';

import nav from './reducers/nav';

export default createStore(combinedReducers);

