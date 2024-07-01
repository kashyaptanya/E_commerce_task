import { PRODUCTS,SINGLE_PRODUCTS } from "../types";

const INITIAL_STATE = {
    product_data: null,
    single_product:null
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCTS:
            return {
                ...state,
                product_data: payload,
            }; 
             case SINGLE_PRODUCTS:
            return {
                ...state,
                single_product: payload,
            };

        default:
            return state;
    }
};
