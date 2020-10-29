import { GET_DATA, ADD_DATA, ADD_COUNTER, RESET, IS_LOADING } from '../types'

const initialState = {
    product: [],
    cart: [],
    counter: 0,
    totalPrice: 0,
    isLoading: false
};

export default function (state = initialState, action) {
    switch(action.type){
        case GET_DATA:
        return {
            ...state,
            product: action.payload,
        }
        case ADD_DATA:
        const currentState = state.cart;
        const newCart = currentState.find((item) => action.payload.id === item.id )

        if (newCart === undefined ) {
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalPrice: state.totalPrice + action.payload.price,
            } 
        } else {
            const existingItem = Object.assign({}, newCart);
            existingItem.counter = existingItem.counter + 1;
            let cartObj = [...state.cart.filter((item) => item.id !== action.payload.id)];
            cartObj.push(existingItem);
    
            return {
              ...state,
              cart: cartObj,
              totalPrice: state.totalPrice + action.payload.price,
            };
        }
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case RESET:
            return {
                ...state,
                counter: 0,
                totalPrice:0,
                cart:[],
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}