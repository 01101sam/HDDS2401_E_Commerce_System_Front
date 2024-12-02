import {GeneralIcon} from './icon';

interface RatingType {
    average: number;
    one_star_count: number;
    two_star_count: number;
    three_star_count: number;
    four_star_count: number;
    five_star_count: number;
}

export interface ProductType {
    id: string;
    sku: string;
    name: string;
    description_html: string;
    thumbnail_url: string;
    media_url: string;
    category_names: string[];
    price: number;
    tags: string[];
    rating: RatingType;
    stock: number;
    qty: number;
}

export interface ProductFilterType {
    id: number;
    filterbyTitle?: string;
    name?: string;
    sort?: string;
    icon?: GeneralIcon | any;
    devider?: boolean;
}
