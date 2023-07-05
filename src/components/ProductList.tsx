import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../products_service/product.service';
import { RootState } from '../redux/all_reducers';
import { ProductActionModel } from '../models/product.action.model';
import { ThunkDispatch } from 'redux-thunk';
import {useTypesSelector} from "../hooks/useTypedSelector";

function ProductList(): JSX.Element {
    const { products, error, loading } = useTypesSelector(state => state.products);
    const dispatch: ThunkDispatch<RootState, void, ProductActionModel> = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    useEffect(() => {
        console.log(products)
    }, [products])

    return (<div>

            </div>);
}

export default ProductList;