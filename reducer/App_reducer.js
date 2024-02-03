import { CLOSE_CART, CLOSE_SIDEBAR, OPEN_CART, OPEN_SIDEBAR } from "@/Actions"

const app_reducer = (state, action) => {

    // CART FUNCTIONS
     if (action.type === OPEN_CART) {
        return {...state, isCartOpened : true}
    }
     if (action.type === CLOSE_CART) {
        return {...state, isCartOpened : false}
    }


    // Sidebar Functions
    if (action.type === OPEN_SIDEBAR) {
        return {...state, isSidebarActive : true}
    }
    if (action.type === CLOSE_SIDEBAR) {
        return {...state, isSidebarActive : false}
    }
    return state
}

export default app_reducer