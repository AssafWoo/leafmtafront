import { Heading, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Blue600, DarkerTheme, MainGrey, White } from "../../../Styles/colors";
import { useScreenSize } from "../../../Utils/useScreenSize";
import { BigButton, SmallButton } from "../Offsets/style";
import { useEffect, useState } from "react";
import ModalWindow from "../../Modal/modal_window";
import { BreakLine, LittleBreakLine, Parag } from "../../../Styles/styles";
import { isObjEmpty } from "../../../Utils/isObjEmpty";
import OffsetSummary from "../../Summaries/OffsetSummary/Offset_summary";

const BlogCard = (props) => {
	const { item, headerImage, justDisplay = false } = props;
	const [currProject, setCurrProject] = useState({});
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!isObjEmpty(item)) {
			setCurrProject({ ...item });
		}
	}, [item]);

	const size = useScreenSize();

	const handleReadMore = (link) => {
		window.open(link, "_blank");
	};

	const cutDesc = (parag) => {
		return parag.substring(0, 200) + "...";
	};

	return (
		<>
			{!isObjEmpty(currProject) && (
				<>
					<Box
						maxW="md"
						m={justDisplay ? "auto" : ".5rem"}
						borderWidth="1px"
						borderRadius="25px"
						boxShadow="17px 10px 22px -11px rgba(0,0,0,0.07)"
						overflow="hidden"
						border="none"
						position="relative"
						background={White}
						flex={
							size === "1-cols" || size === "fullscreen"
								? "0 0 100%"
								: "0 0 30%"
						}
						color="white"
					>
						<Box p="3">
							<Heading
								color={DarkerTheme}
								padding=".5rem"
								fontWeight="600"
								height="3rem"
								fontSize="1.3rem"
								textAlign="left"
							>
								{item.name}
							</Heading>
							<LittleBreakLine />
							<Parag
								style={{
									padding: ".5rem",
									color: MainGrey,
									fontSize: "1rem",
								}}
							>
								{item.writer}
							</Parag>
							<Parag
								style={{
									padding: ".5rem",
									color: MainGrey,
									fontSize: ".9rem",
								}}
							>
								{item.mins} Mins
							</Parag>
							<hr />
							<Parag
								style={{ padding: ".5rem", fontSize: ".9rem" }}
								color="black"
							>
								{cutDesc(item.description)}
							</Parag>
							<BreakLine />
							<Button
								className={
									size === "1-cols" || size === "fullscreen"
										? SmallButton
										: BigButton
								}
								colorScheme="cyan"
								color="white"
								bg={Blue600}
								onClick={() => handleReadMore(item.link)}
							>
								Read more
							</Button>
						</Box>
					</Box>
					{open && (
						<ModalWindow
							open={open}
							setOpen={setOpen}
							content={
								<OffsetSummary offset={item} headerImage={headerImage} />
							}
						/>
					)}
				</>
			)}
		</>
	);
};

export default BlogCard;
