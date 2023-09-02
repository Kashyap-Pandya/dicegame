import { styled } from "styled-components";
export const Button = styled.button`
	width: 220px;
	border: 2px solid black;
	height: 3rem;
	color: black;
	font-family: inherit;
	border-radius: 10px;
	background-color: inherit;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		background-color: black;
		color: white;
	}
`;
