import { GET_DATA, ADD_DATA, ADD_COUNTER } from '../types'

const initialState = {
    product: [],
    cart: [],
    counter: 0,
    totalPrice: 0
};

export default function (state = initialState, action) {
    switch(action.type){
        case GET_DATA:
        return {
            ...state,
            product: action.payload
        }
        case ADD_DATA:
        const currentState = state.cart;
        var newCart = currentState.filter(function(item) {
            return action.payload.id === item.id
        })

        if (newCart.length === 0 ) {
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalPrice: state.totalPrice + action.payload.price
            } 
        } else {
            const test = newCart[0].counter + 1
            newCart[0].counter = test ;
            const temp = newCart[0];
            let cartObj = state.cart.filter((item) => item.id !== action.payload.id );
            console.log('cart obj',cartObj)
            cartObj.push(temp);
            return {
                ...state,
                cart: cartObj,
                totalPrice: state.totalPrice + action.payload.price
            } 
        }
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case "RESET":
            return {
                ...state,
                counter: 0,
                totalPrice:0,
                cart:[]
            }
        default:
            return state;
    }
}