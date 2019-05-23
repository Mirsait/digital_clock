import { createStore } from 'redux';

import reducer from './reducers/time';

export const store = createStore(reducer);
