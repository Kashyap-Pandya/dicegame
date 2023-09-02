import { styled } from "styled-components";

const Score = ({ score }) => {
	return (
		<ScoreContainer>
			<h1>{score}</h1>
			<p>Total Score</p>
		</ScoreContainer>
	);
};

export default Score;

const ScoreContainer = styled.div`
	margin: 1rem;
	max-width: 200px;
	text-align: center;
	h1 {
		font-size: 4rem;
		line-height: 1.1rem;
	}

	p {
		font-size: 2rem;
	}
`;
