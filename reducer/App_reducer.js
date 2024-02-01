import { CLOSE_CART, OPEN_CART } from "@/Actions"

const app_reducer = (state, action) => {

    // CART FUNCTIONS
     if (action.type === OPEN_CART) {
        return {...state, isCartOpened : true}
    }
     if (action.type === CLOSE_CART) {
        return {...state, isCartOpened : false}
    }
    return state
}

export default app_reducer