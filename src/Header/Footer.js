import { AccountBalance, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material"
import styled from "styled-components"
import FooterMenu from './FooterMenu'

const Footer = () => {

  return (
    <Wrapper>
        <div className='Footermenu'>
          <ul id='menu'>
            <FooterMenu link={'#'} icon={<HomeRounded />}  />
            <FooterMenu link={'#'} icon={<Chat />} />
            <FooterMenu link={'#'} icon={<AccountBalance />} />
            <FooterMenu link={'#'} icon={<Favorite />} />
            <FooterMenu link={'#'} icon={<SummarizeRounded />} />
            <FooterMenu link={'#'} icon={<Settings />} />

            <div className='indicator'></div>
          </ul>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

/* Placing all icons in Box */
.Footermenu{
  margin-left: 0.6rem;
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 60px;
  background: #19181A;
  border-radius: 30px 30px 30px 30px;
  z-index: 101;
}

 ul{
  list-style: none;
  display: flex;
  margin-right: 2.7rem;
}

li{
  position: relative;
  width: 60px;
  height: 60px;
  z-index: 1;
  margin-left: 0.3rem;
}

a{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #D1D7E0;
  
  /* if we add extra icons in future below 3 will helpfull */
  flex-direction: column;
  text-align: center;
  font-weight: 500;
}

@media (min-width: 950px){
  .Footermenu{
    left: 25%;
    width: 40%;
    background: whitesmoke;
  }
  a{
    color: black;
  }
}

`

export default Footer