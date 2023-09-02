import styled from "styled-components";
import { Button } from "../styled/Button";
const PlayButton = ({ handleClick }) => {
	return (
		<Container>
			<div className='img'>
				<img src='/images/dices.png' alt='' />
			</div>
			<div className='button'>
				<h1>DICE GAME</h1>
				<Button className='btn' onClick={handleClick}>
					Play Now
				</Button>
			</div>
		</Container>
	);
};

export default PlayButton;

const Container = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Lato&family=Mukta&family=MuseoModerno:ital@1&family=Open+Sans&family=Rubik+Iso&display=swap");
	max-width: 1280px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	margin: 0 auto;
	background-color: white;
	font-family: "Rubik Iso", cursive;

	h1 {
		font-size: 96px;
	}

	.button {
		display: flex;
		flex-direction: column;
	}

	.btn {
		align-self: end;
		font-size: 1.5rem;
	}
`;
