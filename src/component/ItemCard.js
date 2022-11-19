import { AddRounded, Favorite, StarRounded } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Items } from "../Data";

// Storing the cart data with ItemId
// and exporting it to SidebarProvider
export let cartData = [];

const ItemCard = ({ imgSrc, name, rating, price, itemId }) => {

    // For Wishlist the item
    const [ isFavourite, setisFavourite ] = useState(false)
    // For Rating
    const [ currentValue, setCurrentValue ] =useState(Math.floor(rating))

    //For Adding the items in Cart
    const [ isCart, setCart ] = useState(null)

    useEffect(()=>{
        if(isCart){
            // console.log(isCart);
            // Pushing the data to cartData to assign it to [ initialState: cart which is in SidebarProvider ]
           cartData.push(isCart); 
        //    console.log(cartData);
        }
    },[isCart])

    const handleClick = (value)=>{
        setCurrentValue(value)
    }

  return (
    <Wrapper>
        <div className='itemCard' id={itemId}>
            <div className={`isfavourite ${isFavourite ? 'active' : null}`}
               onClick={()=>setisFavourite(!isFavourite)}>
                {/* Wishlist Icon  */}
                <Favorite />
            </div>
            
            <div className='imgBox'>
                <img src={imgSrc} alt="" className='itemImg'/>
            </div>

            <div className='itemContent'>
                <h3 className='itemName'>{name}</h3>
                 <div className='bottom'>
                    <div className='ratings'>
                        {Array.apply(null, {length : 5}).map((e,i)=>(
                            <i key={i}
                                //For Rating 
                               className={`rating ${currentValue > i ? "orange" : "gray"}`}
                               onClick={()=>handleClick(i+1)}>
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className='price'>
                            <span>$ </span>
                            {price}
                        </h3>
                    </div>
                      <i className='addtoCart' 
                        //Getting the Data from "Items" and Adding it to the setCart 
                        onClick={()=>{
                            setCart(Items.find(n=>n.id === itemId))
                        }}>
                            {/* <Testing cartData={cartData}/> */}
                         <AddRounded />   {/* + symbol */}
                      </i>
                 </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
color: white;

h3,.imgBox,span{
    margin-top: 0.1rem;
    margin-bottom: 0.2rem;
    position: relative;
}

.itemCard{
  width: 160px;
  height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 100px;
  margin: 10px;
  /* margin: 10px 0; */
}

.isfavourite{
   position: absolute;
   top: 80px;
   right: 10px;
}

.isfavourite .MuiSvgIcon-root{
    font-size: 18px;
    color: lightgray;
}

.isfavourite.active .MuiSvgIcon-root{
    color: #ff0000;
    filter: drop-shadow(0px 0px 8px #ff0000);
}

.itemCard .imgBox{
    width: 80px;
    height: 80px;
    border-radius: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: #19181A; */
    padding: 5px;
    position: absolute;
    top: 10px;
    
}

.itemCard .imgBox img{
    width: 80%;
    height: 80%;
    border-radius: 20px;
    object-fit: contain;
}

.itemImg{
    position: absolute;
    top: 0;
    width: 60%;
}

.itemContent{
    width: 100%;
    background: #19181A;;
    /* box-shadow: 0px 0px 20px rgba(#19181A); */
    border-radius: 20px;
    padding: 10px;
    padding-top: 50px;
}

.itemContent .itemName{
    font-size: 16px;
}

.itemContent .bottom{
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.itemContent .bottom .rating .MuiSvgIcon-root{
    font-size: 16px;
}

.orange{
    color: #f8901c;
}

.gray{
    color: #373848;
}

.itemContent .bottom .price{
    font-size: 16px; 
}

.itemContent .bottom .price span{
  color: orange;
  font-size: 12px;
}

.itemContent .addtoCart{
    background: #f8901c;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    color: black;
}
`

export default ItemCard