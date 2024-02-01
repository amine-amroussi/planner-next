"use client"
import { createContext, useContext, useReducer } from "react"
import app_reducer from "@/reducer/App_reducer"
import { CLOSE_CART, OPEN_CART } from "@/Actions"

const initialSate = {
    isCartOpened: false,
    products: [],
    loading: false,
    isAuth: false
}

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(app_reducer, initialSate)

    // Cart Functions
    const openCart = () => {
        dispatch({ type: OPEN_CART })
    }

    const closeCart = () => {
        dispatch({ type: CLOSE_CART })
    }

    return <AppContext.Provider value={{ ...state, openCart, closeCart }} >
        {children}
    </AppContext.Provider>
}


export const useAppContext = () => useContext(AppContext)