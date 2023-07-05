import { CommentModel } from './comment.model';

export interface ProductModel {
    id: number,
    imageUrl: string,
    name: string,
    count: string,
    size: {
        width: number,
        height: number
    },
    weight: number,
    comments?: CommentModel[]
}