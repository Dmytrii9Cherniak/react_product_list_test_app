import React from 'react';
import { ModalWindowProps } from '../../models/modal.window.model';
import '../ModalWindow/ModalWindow.scss';

function ModalWindow({ active, setActive, handleConfirm }: ModalWindowProps): JSX.Element {

    return (
        <div className={active ? 'modalWindow active' : 'modalWindow'}>
            <div className={active ? 'modalContent active' : 'modalContent'} onClick={event => event.stopPropagation()}>
                <h4> Are you sure you want to delete the item? </h4>
                <article>
                    <button onClick={() => setActive(false)}> No </button>
                    <button onClick={handleConfirm}> Yes </button>
                </article>
            </div>
        </div>
    );
}

export default ModalWindow;