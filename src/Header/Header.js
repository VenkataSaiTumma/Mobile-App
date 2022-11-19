import styled from "styled-components" 
import React from "react"
import { SearchRounded, ShoppingCartRounded } from "@mui/icons-material"
import ViewHeadlineRoundedIcon from '@mui/icons-material/ViewHeadlineRounded';
import avatar from '../photos/avatar.png'
import { SidebarContext } from "../context/sidebar_context"

const Header = () => {
  const { openSidebar } = React.useContext(SidebarContext);

  return (
    <Wrapper>

        <div className='inputfield'> 
           <SearchRounded className='searchicon'/>
           <input type='text' placeholder='Search a dish'/> 
        </div>

        <div className='shoppingcart'>
            <ShoppingCartRounded className='cart' />
            <div className='cart-number'>
                <p className='num'>12</p>
            </div>
        </div>

        <div className='profilefield'>
            <div className='imgBox'>
                <img src={avatar} alt='profile' className='profilephoto'/>
            </div>
            <h2 className='userName'>Venkat</h2>
        </div>

        <div className='toggleMain'>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
              <ViewHeadlineRoundedIcon className='toggleicon' />
          </button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5px 15px;
 height: 60px;
 width: 100%;
 background: #7395AE;
 /* background: #E98074; */
 position: fixed;
 top: 0;
 left: 0;
 z-index: 101;
 
 .headerlogo{
  width: 40px;
 }

 .inputfield{
  background: #7395AE;
  /* background: #EDF5E1; */
  border-radius: 30px;
  box-shadow: 0px 3px 20px rgba(0,0,0,0.30);
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 8px 15px;
  width: 120px;
 }

 .inputfield .searchicon{
     color: black;
     font-size: 25px;
 }

 .inputfield input{
  width: 100%;
  height: 100%;
  /* outline, border for hiding the box */
  outline: none;
  border: none;
  background: transparent;
  color: black;
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
 }

 .shoppingcart{
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
 }

 .shoppingcart .cart{
   font-size: 30px;
   color: black;
 }

 .shoppingcart .cart-number{
   width: 20px;
   height: 20px;
   background: orange;
   border-radius: 100%;
   min-width: 18px;
   min-height: 20px;
   position: absolute;
   top: -8px;
   /* bottom: -4px; */
   right: 0.5;
   display: flex;
   align-items: center;
   justify-content: center;
 }

 .shoppingcart .cart-number p{
  font-weight: lighter;
 }

 .profilefield{
   display: flex;
   align-items: center;
 }

 .profilefield .imgBox{
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: #C2CAD0;
  display: flex;
  align-items: center;
  justify-content: center;
 }

 .profilephoto{
  width: 40px;
  height: 40px;
 }

 .profilefield .userName{
    font-size: 18px;
    margin-left: 8px;
    font-weight: 900;
    display: none;
 }

 .toggleMain{
  margin-right: 20px;
  transform: rotate(180deg);
 }

 /* Some Scripts */
 .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }

  @media (min-width: 805px) {
    .nav-toggle {
      display: none;
    }

    .profilefield .userName{
      display: block;
    }
  }

  .toggleicon{
  color: black;
  font-size: 30px;
 }

 @media (min-width: 650px) {
  .inputfield {
    width: 60%;
  }
}

`
export default Header