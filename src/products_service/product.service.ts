import { Dispatch } from 'redux';
import { ProductActionModel } from '../models/product.action.model';
import { Action_types } from '../redux/action_types';
import { environment } from '../environments/environment';
import {ProductModel} from "../models/product.model";

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

export const deleteProduct = (id: number) => {
    return async (dispatch: Dispatch<ProductActionModel>) => {
        try {
            dispatch({ type: Action_types.DELETE_PRODUCT });
            await fetch(`${environment.apiUrl}/products/${id}`, { method: 'DELETE' });
            dispatch({ type: Action_types.DELETE_PRODUCT_SUCCESS, payload: id });
        } catch (e) {
            dispatch({ type: Action_types.DELETE_PRODUCT_ERROR, payload: 'Something went wrong' });
        }
    };
};

export const createProduct = (body: {
    size: { width: string; height: string };
    imageUrl: string;
    name: string;
    count: string;
    weight: string
}) => {
    return async (dispatch: Dispatch<ProductActionModel>) => {
        try {
            dispatch({ type: Action_types.CREATE_NEW_PRODUCT });
            const response = await fetch(`${environment.apiUrl}/products`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const newProduct = await response.json(); // Отримання нового продукту з відповіді сервера
            dispatch({
                type: Action_types.CREATE_NEW_PRODUCT_SUCCESS,
                payload: newProduct, // Використання отриманого нового продукту як payload
            });
        } catch (e) {
            dispatch({
                type: Action_types.CREATE_NEW_PRODUCT_ERROR,
                payload: 'Something went wrong',
            });
        }
    };
};