import React, { useState } from 'react';
import { ModalWindowProps } from '../../models/modal.window.model';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/all_reducers';
import { ProductActionModel } from '../../models/product.action.model';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../products_service/product.service';
import '../CreateProductModal/CreateProductModal.scss';

function CreateProductModal({ active, setActive }: ModalWindowProps): JSX.Element {

    const dispatch: ThunkDispatch<RootState, void, ProductActionModel> = useDispatch();
    const [inputValues, setInputValues] = useState({
        imageUrl: '',
        name: '',
        count: '',
        width: '',
        height: '',
        weight: '',
    });

    const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) :void => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const addNewProduct = () :void => {
        const newProduct = {
            imageUrl: inputValues.imageUrl,
            name: inputValues.name,
            count: inputValues.count,
            size: {
                width: inputValues.width,
                height: inputValues.height,
            },
            weight: inputValues.weight,
        };
        dispatch(createProduct(newProduct));
        setActive(false);
    };

    const isAnyInputEmpty: boolean = Object.values(inputValues).some((value: string) :boolean => value === '');

    return (
        <div className={active ? 'createModalWindow active' : 'createModalWindow'}>
            <div
                className={active ? 'createProductModalContent active' : 'createProductModalContent'}
                onClick={(event) => event.stopPropagation()}
            >
                <h4> Create Product </h4>
                <div className="form">
                    <div>
                        <label>
                            <h4> Add product image url </h4>
                            <input type="text" onChange={inputOnChange} value={inputValues.imageUrl} name="imageUrl" />
                        </label>
                        <label>
                            <h4> Add product name </h4>
                            <input type="text" onChange={inputOnChange} value={inputValues.name} name="name" />
                        </label>
                        <label>
                            <h4> Add product count </h4>
                            <input type="text" onChange={inputOnChange} value={inputValues.count} name="count" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <h4> Add product width </h4>
                            <input type="text" onChange={inputOnChange} value={inputValues.width} name="width" />
                        </label>
                        <label>
                            <h4> Add product height </h4>
                            <input type="text" onChange={inputOnChange} value={inputValues.height} name="height" />
                        </label>
                        <label>
                            <h4> Add product weight </h4>
                            <input type="text" onChange={inputOnChange} value={inputValues.weight} name="weight" />
                        </label>
                    </div>
                </div>
                <article>
                    <button onClick={() => setActive(false)}>Cancel</button>
                    <button onClick={addNewProduct} disabled={isAnyInputEmpty}>
                        Create item
                    </button>
                </article>
            </div>
        </div>
    );
}

export default CreateProductModal;
