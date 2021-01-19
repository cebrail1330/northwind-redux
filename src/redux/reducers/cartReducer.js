import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function cartReeducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //ürün sepette var mı diye bakacak varsa addedItem'a eklenecek
            var addedItem = state.find(c => c.product.id === action.payload.product.id);
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, {quantity: addedItem.quantity + 1})
                    }
                    return cartItem; //map sırasında her gezdiğinde toplar cartItem'a atacak
                })
                return newState;
            } else {
                return [...state, {...action.payload}] //statein kopyasını alacak ve actionla gelenin kopyasını ekleyecek
            }
        case actionTypes.REMOVE_FROM_CART:
            const newState2 = state.filter(cartItem =>cartItem.product.id !== action.payload.id)
            return newState2;
        default:
            return state;
    }

}

