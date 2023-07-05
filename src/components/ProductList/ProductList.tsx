import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../products_service/product.service';
import { RootState } from '../../redux/all_reducers';
import { ProductActionModel } from '../../models/product.action.model';
import { ThunkDispatch } from 'redux-thunk';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { ProductModel } from '../../models/product.model';
import './ProductsList.scss';

function ProductList(): JSX.Element {
    const { products, error, loading } = useTypesSelector(state => state.products);
    const dispatch: ThunkDispatch<RootState, void, ProductActionModel> = useDispatch();
    const [sortType, setSortType] = useState('name');

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    useEffect(() => {
        sessionStorage.setItem('sortType', sortType);
    }, [sortType]);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    };

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortType) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'count':
                return a.count - b.count;
            case 'weight':
                return a.weight - b.weight;
            default:
                return 0;
        }
    });

    return (
        <div className="listOfProducts">
            <header className="header">
                <select className="sortSelect" value={sortType} onChange={handleSortChange}>
                    <option value="name">Sort by Name</option>
                    <option value="count">Sort by Count</option>
                    <option value="weight">Sort by Weight</option>
                </select>
            </header>
            <div className="productList">
                {error && !loading && <div className="errorLoadingOrNoProductsFound">{error}</div>}
                {!error && !loading && sortedProducts.length === 0 && (
                    <div className="errorLoadingOrNoProductsFound">No products found</div>
                )}
                {loading && sortedProducts.length <= 0 && !error && (
                    <div className="errorLoadingOrNoProductsFound">Loading...</div>
                )}
                {!error && !loading && sortedProducts.length > 0 && sortedProducts.map((el: ProductModel) => (
                    <div key={el.id} className="productItem">
                        <img src={el.imageUrl} alt="image" />
                        <article>
                            <h4>{el.name}</h4>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;