"use client"
import { createContext, useContext, useReducer } from "react"
import app_reducer from "@/reducer/App_reducer"
import { CLOSE_CART, CLOSE_SIDEBAR, OPEN_CART, OPEN_SIDEBAR } from "@/Actions"

const initialSate = {
    isCartOpened: false,
    products: [],
    loading: false,
    isAuth: false,
    isSidebarActive: false
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

    // Sidebar menu
    const openSidebar = () => {
        dispatch({ type: OPEN_SIDEBAR })
    }
    const closeSidebar = () => {
        dispatch({ type: CLOSE_SIDEBAR })
    }

    return <AppContext.Provider value={{ ...state, openCart, openSidebar, closeSidebar, closeCart }} >
        {children}
    </AppContext.Provider>
}


export const useAppContext = () => useContext(AppContext)