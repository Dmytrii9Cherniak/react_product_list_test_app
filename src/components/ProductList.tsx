import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../products_service/product.service';
import { RootState } from '../redux/all_reducers';
import { ProductActionModel } from '../models/product.action.model';
import { ThunkDispatch } from 'redux-thunk';
import { useTypesSelector } from '../hooks/useTypedSelector';
import { ProductModel } from '../models/product.model';
import './ProductsList.scss';

function ProductList(): JSX.Element {
    const { products, error, loading } = useTypesSelector(state => state.products);
    const dispatch: ThunkDispatch<RootState, void, ProductActionModel> = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products])

    return (<div className="listOfProducts">
        <header className="header">

        </header>
        <div className="productList">
            {products.map((el: ProductModel) =>
                <div key={el.id} className="productItem">
                    <img src={el.imageUrl} alt="image" />
                    <article>
                        <p> {el.name} </p>
                    </article>
                </div>
            )}
        </div>
            </div>);
}

export default ProductList;