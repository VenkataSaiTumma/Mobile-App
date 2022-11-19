import React,{ useReducer } from "react"
import reducer from '../reducer/products_reducer'
import { 
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    SET_CART,
    SET_TOTAL
} from '../Actions'

// Getting the cartData with ItemId and assigning it to cart 
import { cartData } from "../component/ItemCard"

export const initialState={
    isSidebarOpen:false,
    // From Here We are sending the cart to the components "Sidebar"
    cart:cartData,
    total:null,
}

// UseContext
const SidebarContext = React.createContext()

const SidebarProvider = ({ children })=>{

    // useReducer
    const [ state, dispatch ] = useReducer(reducer, initialState)
    

    const openSidebar = () =>{
        dispatch({ type: SIDEBAR_OPEN })
      }
    
      const closeSidebar = () =>{
        dispatch({ type: SIDEBAR_CLOSE })
      }

      const setCart = () =>{
        dispatch({ type: SET_CART })
      }

      const setTotal = () =>{
        dispatch({ type: SET_TOTAL })
      }


      return(
        <SidebarContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar,
            setCart,
            setTotal
        }}>
            {children}
        </SidebarContext.Provider>
      )
}


export { SidebarContext, SidebarProvider }