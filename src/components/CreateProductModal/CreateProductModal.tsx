import React from 'react';
import { ModalWindowProps } from '../../models/modal.window.model';
import '../CreateProductModal/CreateProductModal.scss';

function CreateProductModal({ active, setActive, }: ModalWindowProps) : JSX.Element {

    return (<div className={active ? 'createModalWindow active' : 'createModalWindow'}>
        <div className={active ? 'createProductModalContent active' : 'createProductModalContent'}
             onClick={event => event.stopPropagation()}>
            <h4> Create Product </h4>
            <article>
                <button onClick={() => setActive(false)}> Cancel </button>
                <button> Create item </button>
            </article>
        </div>
    </div>);
}

export default CreateProductModal;


