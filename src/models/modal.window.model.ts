import { SetStateAction } from 'react';

export interface ModalWindowProps {
    active: boolean;
    setActive: React.Dispatch<SetStateAction<boolean>>;
}