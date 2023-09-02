import PlayButton from "./Components/PlayButton";
import NumberPicker from "./Components/NumberPicker";
import styled from "styled-components"
function App() {

	return <>
	<Wrapper>
		<PlayButton/>
		<NumberPicker/>
	</Wrapper>
		
	</>;
}

export default App;

const Wrapper = styled.main`
	@import url('https://fonts.googleapis.com/css2?family=Lato&family=Mukta&family=MuseoModerno:ital@1&family=Open+Sans&family=Rubik+Iso&display=swap');
	padding: 0;
	margin:0;
	border:1px solid green;
	height:100vh;
	background-color:white;
	font-family: 'Rubik Iso', cursive;
`

