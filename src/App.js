import styled from "styled-components"
import { MainContainer } from './component/index'
import Footer from "./Header/Footer"
import Header from "./Header/Header"

const App = () => {

  return (
    <Wrapper>
      <div className='mainApp'>
        {/* Header Component */}
          <Header />

        {/* Main Component */}
          <MainContainer />

        {/* Footer Component */}
           <Footer />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 
.mainApp{
  width: 100vw;
  height: 100vh;
  margin-left: -0.6rem;
  top: 0;
  bottom: 0;
  background: black;
  overflow-x: hidden;
}

.mainApp::-webkit-scrollbar {
  display: none;
}

`

export default App