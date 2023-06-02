import { BoxSize, Flex, LittleBreakLine, Parag } from "../../../Styles/styles";
import SuccessIcon from "../../../Assets/images/success_icon.svg";
import ErrorIcon from "../../../Assets/images/error_icon.svg";
import { Image } from "@chakra-ui/react";

const TransactionStatus = ({ transaction, user, status }) => {
	return (
		<Flex>
			<BoxSize style={{ textAlign: "center" }} flexSize="100%">
				<Parag color="black" align="center">
					<Image
						src={status ? SuccessIcon : ErrorIcon}
						width="13rem"
						margin="auto"
					/>
					<LittleBreakLine />
				</Parag>
				{status ? (
					<Parag color="black" align="center">
						Thank you for your purchase! <br />Your support has made a significant impact. An email will be sent to the registered email address shortly, containing your certification.
					</Parag>
				) : (
					<Parag color="black" align="center">
						Woops... seems like we've had a problem with your transaction
						<br />
						Please try again soon!
					</Parag>
				)}
			</BoxSize>
		</Flex>
	);
};

export default TransactionStatus;
