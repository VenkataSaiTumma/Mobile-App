import { AddRounded, RemoveRounded } from "@mui/icons-material"
import React ,{ useState } from "react"
import { useEffect } from "react";
import styled from "styled-components"
import { SidebarContext } from "../context/sidebar_context";

let cartItems=[]

const CartItem = ({ name, imgSrc, price, itemId}) => {
    const [ qty, setQty ] = useState(1);

   // Upadting the Item Price as per the Quantity    
   const [ itemPrice, setItemPrice ] = useState(parseInt(qty) * parseFloat(price))

    const {cart} = React.useContext(SidebarContext)

    useEffect(()=>{
          cartItems = cart;
          setItemPrice(parseInt(qty) * parseFloat(price));
    },[qty])

    const updateQuantity=(action, id)=>{
        if(action === 'add'){
            setQty(qty+1)
        }else{
            setQty(qty-1)
        }
    }

  return (
    <Wrapper>
        <div className='cartItem'>
            <div className='imgBox'>
                <img src={imgSrc} alt="" />
            </div>

            <div className='itemSection'>
                <h2 className='itemName'>{name}</h2>
                <div className='itemQuantity'>
                    <span>x {qty} </span>
                    <div className='quantity'>
                        {/* - & + Symbol */}
                        <RemoveRounded className='itemRemove' onClick={()=> updateQuantity('remove', itemId)} /> 
                        <AddRounded className='itemAdd' onClick={()=> updateQuantity('add', itemId)}/>
                    </div>
                </div>
            </div>
            <p className='itemPrice'>
                <span className='dollarSign'>$</span>
                <span className='itemPriceValue'>{itemPrice}</span>
            </p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
color: white;
.cartItem{
    display: flex;
    align-items: center;
    margin: 8px 0;
}

.cartItem .imgBox{
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
}

.cartItem .imgBox img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.cartItem .itemSection{
    margin-left: 10px;
}

.cartItem .itemSection .itemName{
    font-size: 20px;
}

.cartItem .itemSection .itemQuantity{
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
}

.cartItem .itemSection .itemQuantity span{
    color: orange;
}

.cartItem .itemSection .itemQuantity .quantity{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 60px;
}

.cartItem .itemPrice{
    font-size: 17px;
    font-weight:600;
    margin-left: auto;
}

.cartItem .itemPrice .dollarSign{
   font-size: 13px;
   color: orange;
}

.cartItem .itemPrice .itemPriceValue{
    font-size: 16px;
}

@media (min-width: 1080px){
    .cartItem{
        display: flex;
    align-items: center;
    margin: 8px 0;
    }
    .cartItem .imgBox{
        width: 30px;
        min-width: 30px;
        height: 30px;
        min-height: 30px;
    }
    .cartItem .imgBox img{
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
    .cartItem .itemSection .itemName{
        font-size: 15px;
    }
    .cartItem .itemSection .itemQuantity{
        font-size: 15px;
        margin-top: -0.5rem;
    }
}

`

export default CartItem