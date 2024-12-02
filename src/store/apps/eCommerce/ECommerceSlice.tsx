import axios from '../../../utils/axios';
import {filter, map} from 'lodash';
import {createSlice} from '@reduxjs/toolkit';
import {AppDispatch} from 'src/store/Store';

const API_URL = '/api/products';

interface StateType {
    products: any[];
    productSearch: string;
    cart: any[];
    total: number;
    filters: {
        category: string;
    };
    error: string;
}

const initialState = {
    products: [],
    productSearch: '',
    cart: [],
    total: 0,
    filters: {
        category: 'All',
    },
    error: '',
};

export const EcommerceSlice = createSlice({
    name: 'ecommerce',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state: StateType, action) {
            state.error = action.payload;
        },

        // GET PRODUCTS
        getProducts: (state, action) => {
            state.products = action.payload;
        },
        SearchProduct: (state, action) => {
            state.productSearch = action.payload;
        },

        //  FILTER PRODUCTS
        filterProducts(state, action) {
            state.filters.category = action.payload.category;
        },

        //  FILTER Reset
        filterReset(state) {
            state.filters.category = 'All';
        },

        // ADD TO CART
        addToCart(state: StateType, action) {
            const product = action.payload;

            // find
            const findProduct = state.cart.find((item) => item.id === product.id);
            if (findProduct) {
                EcommerceSlice.caseReducers.increment(state, {type: 'increment', payload: product.id});
                return;
            }

            state.cart = [...state.cart, Object.assign({qty: 1}, product)];
            axios
                .patch(`/api/cart/${product.id}?qty=1`)
                .catch((error) => console.error('Error incrementing product:', error));
        },

        // qty increment
        increment(state: StateType, action) {
            const productId = action.payload;
            state.cart = map(state.cart, (product) => {
                if (product.id === productId) {
                    axios
                        .patch(`/api/cart/${productId}?qty=${product.qty + 1}`)
                        .catch((error) => console.error('Error incrementing product:', error));
                    return {
                        ...product,
                        qty: product.qty + 1,
                    };
                }

                return product;
            });
        },

        // qty decrement
        decrement(state: StateType, action) {
            const productId = action.payload;
            state.cart = map(state.cart, (product) => {
                if (product.id === productId) {
                    axios
                        .patch(`/api/cart/${productId}?qty=${product.qty - 1}`)
                        .catch((error) => console.error('Error incrementing product:', error));

                    return {
                        ...product,
                        qty: product.qty - 1,
                    };
                }

                return product;
            });
        },

        // delete Cart
        deleteCart(state: StateType, action) {
            state.cart = filter(state.cart, (item) => item.id !== action.payload);
            axios
                .delete(`/api/cart/${action.payload}`)
                .catch((error) => console.error('Error deleting product:', error));
        },
    },
});


export const {
    hasError,
    getProducts,
    SearchProduct,
    filterProducts,
    increment,
    deleteCart,
    decrement,
    addToCart,
    filterReset,
} = EcommerceSlice.actions;

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(API_URL);
        dispatch(getProducts(response.data));
    } catch (error) {
        dispatch(hasError(error));
    }
};

export const fetchCart = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get('/api/cart');
        dispatch(getProducts(response.data));
    } catch (error) {
        dispatch(hasError(error));
    }
}

export default EcommerceSlice.reducer;
