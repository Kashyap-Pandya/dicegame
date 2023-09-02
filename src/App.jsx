import PlayButton from "./Components/PlayButton";
import styled from "styled-components";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";
function App() {
	const [isGameStarted, setIsGameStarted] = useState(false);

	const toggle = () => {
		setIsGameStarted((prev) => !prev);
	};

	return (
		<>
			<Wrapper>
				{isGameStarted ? (
					<GamePlay />
				) : (
					<PlayButton handleClick={toggle} />
				)}
			</Wrapper>
		</>
	);
}

export default App;

const Wrapper = styled.main`
	@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
	padding: 0;
	margin: 0 auto;
	height: 100vh;
	background-color: white;
	font-family: "Lato", sans-serif;
	max-width: 1280px;
`;
