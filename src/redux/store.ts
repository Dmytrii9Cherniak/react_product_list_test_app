import  { createStore } from 'redux';
import { rootReducer } from './all_reducers';

export const store = createStore(rootReducer)