import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
	${reset};
	a{
		cursor:pointer;
	}
	*{
		box-sizing:border-box;
	}
`;

export default GlobalStyles;
