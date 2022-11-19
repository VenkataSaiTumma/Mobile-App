import styled from "styled-components"

const FooterMenu = ({link, icon}) => {
  return (
   <Wrapper>
      <li>
        <a href={link}>
            <span className='icon'>{icon}</span>
        </a>
     </li>
   </Wrapper>

  )
}

const Wrapper = styled.div`
.icon{
  position: relative;
  display: block;
  line-height: 70px;
  text-align: center;
}

.icon .MuiSvgIcon-root{
   font-size: 26px;
}

.icon:hover{
   transform: translateY(-26px);
   color: greenyellow;
}

@media (min-width: 950px){
  .icon:hover{
    color: orange;
  }
}

`

export default FooterMenu