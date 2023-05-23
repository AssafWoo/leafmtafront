import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal";
import { DarkerTheme, MainGreen } from "../../Styles/colors";
import { SlideEffect } from "../../Styles/effects";

const ModalComponent = ({
	openButtonContent,
	item,
	trigger,
	content,
	goToActionButton,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	// add offset box and name box
	// move the id to the header

	return (
		<>
			<p style={{ cursor: "pointer" }} onClick={onOpen}>
				{openButtonContent}
			</p>
			<Modal isOpen={isOpen} onClose={onClose} style={{ SlideEffect }}>
				<ModalOverlay />
				<ModalContent
					color="white"
					bg={DarkerTheme}
					transform={"translate(-50%, -50%) !important"}
					style={{ position: "absolute", top: "50%", left: "50%", margin: "0" }}
				>
					<ModalHeader>ID: {item.id}</ModalHeader>
					<ModalCloseButton />
					<ModalBody display="contents">{content}</ModalBody>
					{goToActionButton !== "empty" && (
						<ModalFooter>
							<Button
								background={MainGreen}
								color="white"
								mr={3}
								onClick={onClose}
								colorScheme="blue"
							>
								{goToActionButton}
							</Button>
						</ModalFooter>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};
export default ModalComponent;
