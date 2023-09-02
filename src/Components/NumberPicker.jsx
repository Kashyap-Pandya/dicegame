import { styled } from "styled-components";

const NumberPicker = ({
	selectedNumber,
	setSelectedNumber,
	error,
	setError,
}) => {
	const boxArr = [1, 2, 3, 4, 5, 6];

	const numberSelectorHandler = (box) => {
		setSelectedNumber(box);
		setError("");
	};
	return (
		<NumberSelectorContainer>
			<p className='error'>{error}</p>
			<div className='flex'>
				{boxArr.map((box, i) => {
					return (
						<Box
							isSelected={box === selectedNumber}
							key={i}
							onClick={() => numberSelectorHandler(box)}
						>
							{box}
						</Box>
					);
				})}
			</div>
			<p>Select Number</p>
		</NumberSelectorContainer>
	);
};

export default NumberPicker;

const Box = styled.div`
	height: 72px;
	width: 72px;
	border: 1px solid black;
	font-size: 1.5rem;
	font-weight: 700;
	display: grid;
	place-items: center;
	background-color: ${(props) => (props.isSelected ? "black" : "white")};
	color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const NumberSelectorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	margin-top: 4rem;
	.flex {
		display: flex;
		gap: 1.5rem;
	}

	p {
		font-size: 1.4rem;
		font-weight: 700;
	}

	.error {
		color: red;
		font-size: 1.3rem;
	}
`;
