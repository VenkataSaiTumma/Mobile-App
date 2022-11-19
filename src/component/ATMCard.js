import styled from "styled-components"

const ATMCard = () => {

  return (
    <Wrapper>
      <div className="card-group">
          <div className="card">
            <div className="logo">
              <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png" alt="Visa" />
            </div>
            <div className="chip">
              <img src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png" 
                alt="chip" className='chipcolor'/>
            </div>
            <div className="number">1234 5678 9012 3456</div>
            <div className="name">Venkat</div>
            <div className="from">4/22</div>
            <div className="to">06/30</div>
            <div className="ring"></div>
          </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
text-align: center;
.card-group {
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card {
  position: relative;
  height: 200px;
  width: 350px;
  border-radius: 25px;
  background: linear-gradient(125deg, #C2CAD0, #557A95);
  overflow: hidden;
}

.logo img,
.chip img,
.number,
.name,
.from,
.to,
.ring {
  position: absolute; /* All items inside card should have absolute position */
}

.logo img {
  top: 30px;
  right: 40px;
  width: 80px;
  height: auto;
  opacity: 0.8;
  
}

.chip img {
  top: 75px;
  left: 40px;
  width: 50px;
  height: auto;
  opacity: 0.8;
}

.chipcolor{
  color: red;
}

.number,
.name,
.from,
.to {
  color: black;
  /* color: rgba(255, 255, 255, 0.8); */
  font-weight: 400;
  letter-spacing: 2px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
}

.number {
  left: 40px;
  bottom: 65px;
  font-family: "Nunito", sans-serif;
}


.name {
  font-size: 0.8rem;
  left: 40px;
  bottom: 35px;
}

.from {
  font-size: 0.8rem;
  bottom: 35px;
  right: 110px;
}

.to {
  font-size: 0.8rem;
  bottom: 35px;
  right: 40px;
}

/* The two rings on the card background */
.ring {
  height: 500px;
  width: 500px;
  border-radius: 50%;
  background: transparent;
  border: 50px solid rgba(255, 255, 255, 0.2);
  bottom: -250px;
  right: -250px;
  box-sizing: border-box;
}

.ring::after {
  content: "";
  position: absolute;
  height: 600px;
  width: 600px;
  border-radius: 50%;
  background: transparent;
  border: 30px solid rgba(255, 255, 255, 0.2);
  bottom: -80px;
  right: -110px;
  box-sizing: border-box;
}

@media (min-width: 1080px){
  .card{
    width: 350px;
    height: 180px;
    margin-bottom: 2rem;
  }
  .number{
    margin-left: 4rem;
  }
}

`

export default ATMCard