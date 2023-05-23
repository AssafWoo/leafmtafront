import { Badge, Button, Image } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { LightBlue, MainPink } from "../../../Styles/colors";
import {
	BoxSize,
	BreakLine,
	Flex,
	LittleBreakLine,
	Parag,
} from "../../../Styles/styles";
import ColorCircle from "../../Color_circle/color_circle";
import ModalWindow from "../../Modal/modal_window";

const PopupCard = ({
	handlePickedTemplate,
	templates,
	onChoose,
	disableChoose,
}) => {
	const [currentActive, setCurrentActive] = useState(0);
	const [currentPicked, setCurrentPicked] = useState(0);
	const [open, setOpen] = useState(false);

	const onClick = useCallback(
		(index, choose) => {
			setCurrentActive(index);
			if (choose) {
				setCurrentPicked(index);
				onChoose && onChoose(index);
			}
		},
		[onChoose]
	);

	return (
		<div style={{ textAlign: "left" }}>
			<Flex style={{ width: "100%" }}>
				{templates &&
					templates.map((template, index) => (
						<BoxSize
							shadow={true}
							id={template.id}
							isInvisible={false}
							style={{
								color: "white",
								position: "relative",
								cursor: "pointer",
								boxShadow: template.choosen
									? `0px 0px 12px -2px ${LightBlue}`
									: "",
							}}
						>
							{!disableChoose && currentPicked === index && (
								<Badge
									textTransform="none"
									borderRadius="50%"
									px="1"
									marginInlineStart="1rem"
									py="1"
									color="white"
									cursor="pointer"
									top="1rem"
									right="1rem"
									position="absolute"
									colorScheme="green"
									bg={MainPink}
									marginRight=".2rem"
									width="1.2rem"
									height="1.2rem"
								>
									<FaCheck
										color={"white"}
										style={{
											position: "absolute",
											top: "50%",
											fontSize: ".7rem",
											left: "50%",
											transform: "translate(-50%, -50%)",
										}}
									/>
								</Badge>
							)}
							<BreakLine />
							<Parag color="black">{template.title}</Parag>

							<LittleBreakLine />
							<div
								onClick={() => {
									onClick(index, false);
									setOpen(!open);
								}}
								style={{ width: "16rem" }}
							>
								<Image src={template.src} />
							</div>
							<LittleBreakLine />
							<Parag color="black">Colors:</Parag>
							<LittleBreakLine />
							<ul style={{ display: "inline-block", width: "100%" }}>
								{template.colors.map((color) => (
									<li style={{ display: "inline" }}>
										<ColorCircle color={color} />{" "}
									</li>
								))}
							</ul>
							<LittleBreakLine />
							{!disableChoose && (
								<Flex style={{ width: "100%", justifyContent: "center" }}>
									<Button
										colorScheme={"pink"}
										bg={MainPink}
										onClick={() => onClick(index, true)}
									>
										Pick me
									</Button>
								</Flex>
							)}
						</BoxSize>
					))}
				{open && (
					<ModalWindow
						open={open}
						content={templates[currentActive].desc}
						image={templates[currentActive].src}
						header={templates[currentActive].title}
						setOpen={setOpen}
					/>
				)}
			</Flex>
		</div>
	);
};

export default PopupCard;
