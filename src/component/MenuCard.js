import { ChevronRightRounded } from "@mui/icons-material"
import styled from "styled-components"

const MenuCard = ({ imgSrc, name, isActive }) => {
  return (
    <Wrapper>
        <div className={`rowMenuCard ${isActive ? `active` : null }`}>
            <div className='imgBox'>
                <img src={imgSrc} alt="" />
            </div>
            <h3>{name}</h3>
            <i className='loadMenuicon'>
              {/* Right Arrow Marks  */}
                <ChevronRightRounded />  
            </i>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
/* Remove Active class if not used */

.rowMenuCard{
  width: 80px;
  min-width: 80px;
  height: 100px;
  border-radius: 10px;
  background: #19181A;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1px;
  margin-top: -0.3rem;
  cursor: pointer;
  margin-right: 14px;
  /* box-shadow: 10px 10px 20px rgba(red); */
}

.rowMenuCard:hover, .rowMenuCard.active{
  background: lightgreen;
  transform: scale(1.1); //For Effect
  border-radius: 10px;
}

.rowMenuCard .imgBox{
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 10px;
  /* background: white; */ //add any background color
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.rowMenuCard:hover .imgBox, .rowMenuCard.active .imgBox{
  background: lightgreen;
}

.rowMenuCard .imgBox img{
  object-fit: contain;
  width: 125px;
  height: 100%;
}

.rowMenuCard:hover .imgBox img, .rowMenuCard.active .imgBox img{
  width: 125px;
  height: 100%;
}

h3{
  color: #ffffff;
  margin-top: 8px;
  font-size: 16px;
  font-weight: lighter;
}

.rowMenuCard:hover h3, .rowMenuCard.active h3{
  color: orange;
  margin-top: 8px;
  font-size: 16px;
  font-weight: lighter;
}

.loadMenuicon{
  color: lightyellow;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 5px;
  background: #f8901c;
  margin-top: -0.5rem;
}
`

export default MenuCard