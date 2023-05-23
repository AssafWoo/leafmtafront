import { Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BoxSize, BreakLine, Flex, SubHeader } from "../../Styles/styles";
import OrderSummary from "../../Components/Summaries/OrderSummary/OrderSummary";
import ModalWindow from "../../Components/Modal/modal_window";
import PaymentForm from "../../Components/Payment/PaymentForm";
import { MainPink } from "../../Styles/colors";
import TransactionStatus from "../../Components/Cards/TransactionStatus/TransactionStatus";

const Checkout = ({
	children,
	sideInputs,
	pageHeader,
	receivedPrice,
	price,
	orderFieldsSummary,
	handlePayment,
	handleGetTransactionID,
	loader,
	error,
	description,
	transactionID,
	openPaymentModal,
	transactionStatus,
	paymentProcessing,
	resetTransactionStatus,
	resetOpenModal,
}) => {
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		setOpenModal(openPaymentModal);
	}, [openPaymentModal]);

	const Content = () => {
		if (transactionStatus === null && paymentProcessing === false) {
			// if no payment is being made
			return <PaymentForm onSubmit={handlePayment} />;
		}
		if (paymentProcessing) {
			// if a payment is being made
			return <Spinner color={MainPink} />;
		}
		return <TransactionStatus status={transactionStatus} />; // after payment made
	};

	return (
		<Flex>
			<Heading {...SubHeader}>{pageHeader}</Heading>
			<BreakLine />
			<Flex>{description}</Flex>
			<BreakLine />
			<Flex>
				<BoxSize
					flexSize="2 0 60%"
					isInvisible={true}
					style={{ padding: "0", margin: "0" }}
				>
					{children}
				</BoxSize>
				<BoxSize
					flexSize="2 0 35%"
					isInvisible={true}
					style={{ padding: "0", margin: "0" }}
				>
					{sideInputs}
					<OrderSummary
						fields={orderFieldsSummary}
						receivedPrice={receivedPrice}
						handleGetTransactionID={handleGetTransactionID}
						totalPriceToCharge={price}
						loader={loader}
						resetTransactionStatus={resetTransactionStatus}
						error={error}
						shadow={true}
					/>
					{openModal && (
						<ModalWindow
							content={<Content />}
							header={"Payment"}
							open={openModal}
							setOpen={setOpenModal}
							handleClose={() => resetOpenModal && resetOpenModal()}
						/>
					)}
				</BoxSize>
			</Flex>
		</Flex>
	);
};

export default Checkout;
