import { ChevronRightRounded } from "@mui/icons-material"
import styled from "styled-components"

const MenuCategory = ({name}) => {
  return (
    <Wrapper>
        <div className='SubMenuContainer'>
            <h3>{name}</h3>
            <div className='viewAll'>
                <p>View All</p>
                <i> <ChevronRightRounded /> </i>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

.SubMenuContainer, .viewAll{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.SubMenuContainer, h3{
    font-size: 17px;
    font-weight: 500;
    color: white;
}

.SubMenuContainer, .viewAll p{
    font-size: 14px;
    color: lightgreen;
    font-weight: 400;
}

.SubMenuContainer i{
    background: #f8901c;
    width: 20px;
    height: 20px;
    min-width: 20px;
    border-radius: 5px;
    color: lightyellow;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
}
`

export default MenuCategory