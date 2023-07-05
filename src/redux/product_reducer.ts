import { ProductActionModel } from '../models/product.action.model';
import { ProductStateModel } from '../models/product.state.model';
import { Action_types } from './action_types';


const initialState: ProductStateModel = {
    products: [],
    loading: false,
    error: null
}

export const ProductReducer =(state: ProductStateModel = initialState, action: ProductActionModel) => {

    switch (action.type) {

        case Action_types.GET_ALL_PRODUCTS:
            return { loading: true, error: null, products: [] }
        case Action_types.GET_PRODUCTS_ERROR:
            return { loading: false, error: action.payload, products: [] }
        case Action_types.GET_PRODUCTS_SUCCESS:
            return { loading: false, error: null, products: action.payload }

        case Action_types.CREATE_NEW_PRODUCT:
            return { ...state, loading: true };
        case Action_types.CREATE_NEW_PRODUCT_ERROR:
            return { loading: false, error: action.payload, products: [...state.products] };
        case Action_types.CREATE_NEW_PRODUCT_SUCCESS:
            return { ...state, loading: false, products: [...state.products, action.payload] };

        default:
            return state;
    }
}