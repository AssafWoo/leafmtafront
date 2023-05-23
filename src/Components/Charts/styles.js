import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: inline-block;

	.recharts-responsive-container {
		height: 100%;
		display: inline-block;
	}

	.recharts-default-tooltip {
		border-radius: 15px;
		font-size: 1.3rem;
		border: none;
		color: black;
	}
	.recharts-default-legend {
		text-align: left;
		color: "black";
	}
	/* .recharts-tooltip-label{
        color:white !important;
    } */
	.recharts-sector {
		width: 10rem;
		color: "black";
	}
`;
