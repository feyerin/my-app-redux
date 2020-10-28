import { GET_DATA, ADD_DATA } from '../types'

const initialState = {
    product: [],
    cart: [{
        id: '',
    }],
    counter: 0,
};

export default function (state = initialState, action) {
    switch(action.type){
        case GET_DATA:
        return {
            ...state,
            product: action.payload
        }
        case ADD_DATA:
            const cartItem = state.cart;
            cartItem.forEach(element => {
                if (cartItem.id === element.id){
                    console.log("true");
                } else{
                    console.log("false")
                }
            });
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }
        default:
            return state;
    }
}