import { Dispatch } from 'redux';
import { ProductActionModel } from '../models/product.action.model';
import { Action_types } from '../redux/action_types';
import { environment } from '../environments/environment';

export const getAllProducts = () => {
    return async (dispatch: Dispatch<ProductActionModel>) => {
        try {
            dispatch({ type: Action_types.GET_ALL_PRODUCTS });
            const response = await fetch(`${environment.apiUrl}/products`).then(response => response.json());
            dispatch({ type: Action_types.GET_PRODUCTS_SUCCESS, payload: response });
        } catch (e) {
            dispatch({ type: Action_types.GET_PRODUCTS_ERROR, payload: 'Something went wrong' });
        }
    };
};
