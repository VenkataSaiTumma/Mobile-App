import styled from "styled-components"
import BannerName from "./BannerName"
import { MenuCategory, MenuCard, ItemCard } from "./index"
import { MenuItems, Items } from '../Data'
import { useEffect, useState } from "react"
import Sidebar from "../Header/Sidebar"

const MainContainer = () => {

  // To display All "buger01" by Default
  const [ isMainData, setMainData ] = useState(
    Items.filter((element) => element.itemId === "Ordinary Drink")
  )

  useEffect(()=>{
   
  },[isMainData])

  // Filter All Items with itemId
  const setData = (itemId)=>{
    setMainData(Items.filter((element) => element.itemId === itemId))
  }

  return (
    <Wrapper>
        <section>
          {/* Banner Container */}
          <div className='maincontainer'>
            <div className='banner'>
                <BannerName name={"Venkat"} discount={"25"} link={"#"} />
            </div>

            {/* Dish Container */}
              <div className='dishContainer'>

                 {/* Menu Category */}
                <div className='menucard'>
                  <MenuCategory name={"Menu Category"} />
                </div>

                <div className='rowContainer'>
                    { MenuItems.map(data=>(
                      <div key={data.id} 
                      //  onClick filter all will apply
                      onClick={()=>setData(data.itemId)}> 
                        <MenuCard 
                          imgSrc={data.imgSrc} 
                          name={data.name} 
                          isActive={data.id === '1' ? true : false}
                        />
                      </div>
                    ))}
                </div>

                <div className='dishitemContainer'>
                  {
                     isMainData.map(data =>(
                      <ItemCard key={data.id} className='itemimg'
                        itemId={data.id}
                        imgSrc={data.imgSrc} 
                        name={data.name} 
                        rating={data.ratings} 
                        price={data.price} 
                      />
                    ))
                  }
                </div>
              </div>
          </div>
          
          {/* Sidebar Toggle */}
          <div>
            <Sidebar />
          </div>
        </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
color: white;
section{
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 60px;
}

.maincontainer{
  width: 90%;
  height: auto;
  background: black;
  padding: 10px;
  padding-right: 10px;
  padding-bottom: 100px;
}

@media (min-width: 1080px) {
  .maincontainer {
  width: 70%;
  height: auto;
  background: orange;
  padding: 10px;
  padding-right: 10px;
  padding-bottom: 100px;
}
} 

.banner{
  width: 97%;
  border-radius: 10px;
  background-image: linear-gradient(#61892F, #86C232);
  display: flex;
  align-items: center;
  padding: 0px 10px;
}

@media (min-width: 1080px){
  .banner{
    width: 97%;
  }
}

 /* Dish Container  */
.dishContainer{
  width: 100%;
}

.menucard{
  width: 100%;
}

@media (min-width: 1080px){
  .menucard{
    width: 97%;
  }
}

.rowContainer{
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 10px 0;
  padding: 10px 0;
}

.rowContainer::-webkit-scrollbar{
  display: none;
}

@media (min-width: 1080px){
  .rowContainer{
    justify-content: space-evenly;
  }
}

.dishitemContainer{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;  //if we don't have space it will wrap to down line
}
 
`

export default MainContainer