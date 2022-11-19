import styled from "styled-components" 

const BannerName = ({ name, discount, link }) => {
  return (
    <Wrapper>
        <div className='bannerContent'>
          <h3>Hello {name}</h3>
          <p>
            <span>{discount}% </span>
              discount on Your First order
          </p>
          <a href={link}> Learn More </a>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
h3,p,span,a{
  text-decoration: none;
  color: white;

  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.bannerContent{
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.bannerContent h3{
  font-size: 20px;
  font-weight: 500;
  margin: 6px;
}

.bannerContent p{
  font-size: 15px;
  width: 200px;
  margin: 5px 0;
}

.bannerContent span{
  color: orange;
  font-size: medium;
}

.bannerContent a{
  background: lightseagreen;
  padding: 5px 15px;
  border-radius: 100vw;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

a:hover{
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
}
`

export default BannerName