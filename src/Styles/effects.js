import styled from "styled-components";
import {
	Blue600,
	LeafGreen3,
	LightBlue,
	MainGreen,
	MainGreenBlue,
	MainPink,
	MainPurple,
	SidemenuPurple,
} from "./colors";

export const ShadowEffect = `
	box-shadow: 17px 10px 22px -11px rgba(215,215,215,0.63)
`;
export const Ripple = `
    animation: at-ripple 1s linear infinite;
    overflow: hidden;
    @keyframes at-ripple {
        0% {
            box-shadow: 0 3px 7px rgba(109, 185, 102, 0.2), 0 0 0 5px rgba(109, 185, 102, 0.2), 0 0 0 3.5px rgba(109, 185, 102, 0.3), 0 0 3px 7.5px rgba(109, 185, 102, 0.2);
        }
        100% {
            box-shadow: 0 3px 7.5px rgba(109, 185, 102, 0.3), 0 0 0 5px rgba(109, 185, 102, 0.3), 0 0 0 7.5px rgba(109, 185, 102, 0.2), 0 0 0 15px rgba(109, 185, 102, 0.1);
        }
    }
`;
export const TransitionEffect = `
	transition:.3s all ease-in-out;
`;
export const SlideEffect = `
	animation: slide 0.5s forwards;
	animation-delay: 2s;
	@keyframes slide {
		100% { left: 0; }
	}

`;

export const FadeIn = styled.div`
	animation: fadein 2s;
	-moz-animation: fadein 2s; /* Firefox */
	-webkit-animation: fadein 2s; /* Safari and Chrome */
	-o-animation: fadein 2s; /* Opera */

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-moz-keyframes fadein {
		/* Firefox */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-webkit-keyframes fadein {
		/* Safari and Chrome */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@-o-keyframes fadein {
		/* Opera */
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

// leafs effect
export const CirclesEffect = styled.div`
	position: relative;
	.circles {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* z-index: -1; */
	}

	.circles li {
		position: absolute;
		display: block;
		list-style: none;
		width: 10px;
		height: 10px;
		background: ${Blue600};
		animation: animate 1s linear infinite;
		bottom: calc(-1px - 1vh);
	}

	.circles li:nth-child(1) {
		left: 30%;
		width: 15px;
		height: 15px;
		animation-delay: 0s;
		animation-duration: 10s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${MainPink};
	}

	.circles li:nth-child(2) {
		left: 7%;
		width: 15px;
		height: 15px;
		animation-delay: 0s;
		animation-duration: 6s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${MainGreen};
	}

	.circles li:nth-child(3) {
		left: 65%;
		width: 14px;
		height: 14px;
		animation-delay: 0s;
		animation-duration: 8s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${Blue600};
	}

	.circles li:nth-child(4) {
		left: 89%;
		width: 14px;
		height: 14px;
		animation-delay: 0s;
		animation-duration: 5s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${SidemenuPurple};
	}
	.circles li:nth-child(5) {
		left: 80%;
		width: 15px;
		height: 15px;
		animation-delay: 0s;
		animation-duration: 9s;
		border-radius: 50%;
		border-top-left-radius: 0 !important;
		background: ${MainGreen};
	}

	@keyframes animate {
		0% {
			transform: translateY(20px) rotate(0deg);
			opacity: 0;
		}
		50% {
			transform: translateY(-10px) rotate(360deg);
			opacity: 0.5;
		}
		100% {
			transform: translateY(18px) rotate(720deg);
			opacity: 0;
		}
	}
`;
