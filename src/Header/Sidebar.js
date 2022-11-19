import styled from "styled-components"
import React, { useEffect } from "react"
import { SidebarContext } from "../context/sidebar_context"
import CloseIcon from '@mui/icons-material/Close';
import { ATMCard, SubMenuContainer, CartItem } from "../component/index";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, cart } = React.useContext(SidebarContext)
  // console.log(cart);

  useEffect(()=>{

  },[cart])

  return (
    <Wrapper>
      <main>
        <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' }`}>
            <button type='button' className='close-btn' onClick={closeSidebar}>
                <CloseIcon className="closebar"/>
            </button>
      
            {/* ATM CardComponent */}
            <section className='rightMenu'>
                <ATMCard />
            </section>
            {/* <MenuCategory /> */}

            {!cart ? (
              <h1>No Data</h1>
            ) : (
              //  Cart Conatiner
              <div className='cartCheckOutContainer'>
                 <div className='cartContainer'>
                  <SubMenuContainer />
                    <div className='cartItems'>
                      {
                        cart.map(data=>(
                          <CartItem
                            key={data.id} 
                            itemId={data.id}
                            name={data.name} 
                            imgSrc={data.imgSrc} 
                            price={data.price}
                          />
                        ))
                      }
                  </div>
                </div>

                    {/* Amount Field */}
                    <div className='totalSection'>
                      <h3>Total</h3>
                      <p>
                        <span>$ </span>40
                      </p>
                    </div>

                    <button className='checkout'>
                      Checkout
                    </button>
              </div>
            )}         
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
/* color: white; */
h1{
  color: white;
  margin-top: 13rem;
}

section{
  display: flex;
text-align: center;
}

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 83%;
    height: 90%;
    background: #19181A;
    transition: all 0.3s linear;
    transform: translate(200%);
    z-index: -1;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media (min-width: 1080px){
  .sidebar{
    width: 25%;
    height: 80%;
    margin-top: 4.5rem;
    margin-right: 0.6rem;
    transform: translate(0);
    z-index: 1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 1;
  }
}

  .close-btn {
    font-size: 2px;
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    color: hsl(360, 67%, 44%);
    margin-top: 0.1rem;
    margin-right: 20rem;
  }
  .close-btn:hover {
    color: hsl(360, 71%, 66%);
  }
  .closebar{
    font-size: 30px;
  }

  @media (min-width: 1080px){
    .closebar{
      display: none;
    }
  }

  /* Cart Container */
.cartCheckOutContainer{
  width: 100%;
  min-width: 320px;
  margin-top: 8rem;
}

.cartContainer{
  width: 100%;
  min-height: 250px;
  max-height: 280px;
  margin-top: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}

@media (min-width: 1080px){
  .cartContainer{
    overflow-y: scroll;
  overflow-x: hidden;
  }
}

.cartContainer::-webkit-scrollbar{
  display: none;
}

img{
  width: 50px;
}

.totalSection{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 8px;
  margin: 15px 0px;
}

@media (min-width: 1080px){
  .totalSection{
    margin-top: -4.9rem;
    margin-right: 0.5rem;
  }
}

.totalSection h3{
  font-size: 18px;
  font-weight: 600;
}

@media (min-width: 1080px){
  .totalSection h3{
    font-size: 13px;
    font-weight: 600;
    margin-bottom: -3rem;
  }
}

.totalSection p{
  font-size: 18px;
  font-weight: 600;
}

.totalSection p span{
  font-size: 14px;
  color: orange;
}

.checkout{
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 20px;
  background: lightyellow;
  border-radius: 100vw;
  color: orange;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
}

`

export default Sidebar