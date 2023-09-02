import styled from "styled-components"

const PlayButton = () => {
  return (
    <Container>
      <div className="img">
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="button">
        <h1>DICE GAME</h1>
        <button className="btn">Play Now</button>
      </div>
    </Container>
  )
}

export default PlayButton

const Container = styled.div`
    max-width:1280px;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    margin:0 auto;

    h1 {
      font-size:96px;
    }

    button {
      width:220px;
      border:1px solid black;
      height:2rem;
      color:black;
      font-family:inherit;
      border-radius:10px;
      background-color:inherit;
      cursor: pointer;
      align-items:end;

    }

    .button {
      display:flex;
      flex-direction:column;
    }

    .btn {
      align-self:end;
    }
    button:hover {
      color:white;
      background-color:black;
    }
`
