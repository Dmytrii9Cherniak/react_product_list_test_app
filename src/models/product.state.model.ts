import { ProductModel } from './product.model';

export interface ProductStateModel {
    products: ProductModel[],
    loading: boolean,
    error: string | null
}