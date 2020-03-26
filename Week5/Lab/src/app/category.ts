import { Product } from './product';

export interface Category {
    products: Product[],
    name: string,
    id: number
}