import { combineReducers } from 'redux';
import { ProductReducer } from './product_reducer';

export const rootReducer = combineReducers({
    products: ProductReducer
})

export type RootState = ReturnType<typeof rootReducer>