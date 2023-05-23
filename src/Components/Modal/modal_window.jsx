import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal";
import { SlideEffect } from "../../Styles/effects";
import { Image } from "@chakra-ui/react";
import { BreakLine, LittleBreakLine, Parag } from "../../Styles/styles";
import { MainPink } from "../../Styles/colors";

const ModalWindow = ({
	open,
	setOpen,
	content, // modal content
	header, // modal header
	buttons, // buttons has -> button.bg, button.colorScheme, bottom.color, buttom.title, button.link
	disableClose,
	handleClose,
	image,
	description,
}) => {
	return (
		<>
			<Modal
				isOpen={open}
				onClose={() => {
					setOpen(false);
					handleClose && handleClose();
				}}
				style={{ SlideEffect }}
			>
				<ModalOverlay />
				<ModalContent
					style={{
						maxWidth: "85%",
						width: "fit-content",
					}}
				>
					{header && <ModalHeader>{header}</ModalHeader>}
					<ModalCloseButton onClick={() => setOpen(false)} color={MainPink} />
					<LittleBreakLine />
					<ModalBody>
						{description && <Parag color="black">{description}</Parag>}
						{content}
						<BreakLine />
						{image && <Image style={{ borderRadius: "10px" }} src={image} />}
					</ModalBody>
					<ModalFooter>
						{buttons &&
							buttons.map((button) => (
								<Link to={button.link}>
									<Button
										background={button.bg}
										color={button.color}
										mr={3}
										onClick={button.function}
										colorScheme={button.colorScheme}
									>
										{button.title}
									</Button>
								</Link>
							))}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default ModalWindow;
