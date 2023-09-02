import { styled } from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
	return (
		<DiceContainer>
			<div className='dice' onClick={rollDice}>
				<img src={`/images/dice_${currentDice}.png`} alt='' />
			</div>
			<p>Click on Dice to roll</p>
		</DiceContainer>
	);
};

export default RollDice;

const DiceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 8rem;
	p {
		font-size: 1.4rem;
	}

	.dice {
		cursor: pointer;
	}
`;
