import NumberPicker from "./NumberPicker";
import Score from "./Score";
import RollDice from "./RollDice";
import { styled } from "styled-components";
import { useState } from "react";

const GamePlay = () => {
	const [score, setScore] = useState(0);
	const [selectedNumber, setSelectedNumber] = useState(0);
	const [currentDice, setCurrentDice] = useState(1);
	const [error, setError] = useState("");
	const randomNumberGenerator = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	const rollDice = () => {
		if (!selectedNumber) {
			setError("Please select a number");
			return;
		}
		const randomNumber = randomNumberGenerator(1, 7);
		setCurrentDice(randomNumber);

		if (selectedNumber === randomNumber) {
			setScore((prev) => prev + randomNumber);
		} else {
			setScore((prev) => prev - 2);
		}

		setSelectedNumber(undefined);
	};

	const resetScore = () => {
		setScore(0);
	};
	return (
		<>
			<MainContainer>
				<div className='top_section'>
					<Score score={score} />
					<NumberPicker
						error={error}
						setError={setError}
						selectedNumber={selectedNumber}
						setSelectedNumber={setSelectedNumber}
					/>
				</div>
				<RollDice currentDice={currentDice} rollDice={rollDice} />
				<ResetButton onClick={resetScore}>ResetScore</ResetButton>
			</MainContainer>
		</>
	);
};
export default GamePlay;

const MainContainer = styled.div`
	.top_section {
		display: flex;
		justify-content: space-between;
		align-items: end;
	}
`;

const ResetButton = styled.div`
	height: 50px;
	width: 140px;
	display: flex;
	font-weight: 700;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	background-color: white;
	color: black;
	border: 3px solid black;
	cursor: pointer;
	&:hover {
		border: 2px solid red;
		color: red;
	}
`;
