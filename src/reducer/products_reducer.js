import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    SET_CART,
    SET_TOTAL
} from '../Actions'

export const sidebar_reducer = (state, action)=>{
    if(action.type === SIDEBAR_OPEN){
        return { ...state, isSidebarOpen: true}
    }

    if(action.type === SIDEBAR_CLOSE){
        return { ...state, isSidebarOpen: false}
    }

    if(action.type === SET_CART ){
        return { ...state, cart: action.cart }
    }

    if(action.type === SET_TOTAL ){
        return { ...state, total: action.cart }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default sidebar_reducer