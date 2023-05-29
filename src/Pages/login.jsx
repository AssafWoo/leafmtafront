import { useContext, useRef, useState } from "react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import {
	DarkerTheme,
	LightTheme,
	MainGreen,
	MainPink,
	White,
} from "../Styles/colors";
import { BoxSize, BreakLine, LeafIcon, Parag } from "../Styles/styles";
import { Flex, FormControl, FormLabel } from "@chakra-ui/react";
import LeafLogo from "../Assets/images/newLeaf.png";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/global/global-context";
import { loginUser } from "../Context/actions/user";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Spinner } from "@chakra-ui/react";
import axios from "../axiosConfig";

const Login = () => {
	const { userDispatch } = useContext(GlobalContext);
	const [isDisabled, setIsDisabled] = useState(false);
	const [loader, setLoader] = useState(false);
	const { control, handleSubmit, reset, getValues } = useForm({
		defaultValues: {
			email: "",
			password: "",
			error: "",
		},
	});
	const toast = useToast();
	const toastIdRef = useRef();

	const handleLogin = async () => {
		setLoader(true);
		if (toastIdRef.current) {
			toast.close(toastIdRef.current);
		}
		setIsDisabled(true);
		try {
			const data = await axios.post(`/login`, {
				email: getValues("email"),
				password: getValues("password"),
			});
			
			const realRes = data.data;
			setLoader(false);
			setIsDisabled(false);
			if(!realRes) {
				toastIdRef.current = toast({
					title: 'Error',
					description: 'Username / Password is incorrect, please recheck.',
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			} else {
				const accessToken = realRes.accessKey;
				toastIdRef.current = toast({
					title: `So good to see you again!`,
					description: "",
					status: "success",
					duration: 3000,
					isClosable: true,
				});
				userDispatch(loginUser(accessToken));
			}

		} catch (e) {
			setLoader(false);
			setIsDisabled(false);
			let header = e.name;
			let message = e.message;
			reset({ ...getValues(), error: e });
			toastIdRef.current = toast({
				title: header,
				description: message.includes("401") ? "User doesn't exists" : message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};
	return (
		<form onSubmit={handleSubmit(() => handleLogin())}>
			<BreakLine />
			<Flex Flex justify="center" align="center" m="auto" w="fit-content">
				<BoxSize isInvisible={true}>
					<LeafIcon src={LeafLogo} style={{ width: "10rem" }} />
				</BoxSize>
			</Flex>
			<Flex Flex justify="center" align="center" m="auto" w="fit-content">
				{loader ? (
					<Spinner color={MainGreen} />
				) : (
					<BoxSize flexSize="5" shadow={true}>
						<Flex>
							<BoxSize
								flexSize="1"
								style={{ padding: "1.5rem" }}
								isInvisible={true}
							>
								<FormControl id="email" isRequired>
									<FormLabel
										color={DarkerTheme}
										fontSize="1.1rem"
										textAlign="left"
										pb="2"
									>
										Email address
									</FormLabel>
									<Input
										value={getValues("email")}
										control={control}
										name="email"
										onChange={(e) =>
											reset({ ...getValues(), email: e.target.value })
										}
										border="1px solid DarkerTheme"
										bg={LightTheme}
										color="black"
										mb="5"
									/>
								</FormControl>

								<FormControl id="password" isRequired>
									<FormLabel
										color={DarkerTheme}
										fontSize="1.1rem"
										textAlign="left"
										pb="2"
									>
										Password
									</FormLabel>
									<Input
										value={getValues("password")}
										type="password"
										control={control}
										name="password"
										onChange={(e) =>
											reset({ ...getValues(), password: e.target.value })
										}
										border="1px solid DarkerTheme"
										color={DarkerTheme}
										bg={LightTheme}
										mb="8"
									/>
								</FormControl>
								<Button
									disabled={isDisabled}
									type="submit"
									w="100%"
									bg={MainGreen}
									color={White}
									colorScheme="green"
								>
									Lets roll
								</Button>
								<Flex>
									<BoxSize flexSize="3" isInvisible={true}>
										<Parag color="black">New around?</Parag>
									</BoxSize>
									<BoxSize flexSize="1" isInvisible={true}>
										<Link to="/signup">
											<Button
												bg={MainPink}
												color={White}
												type="submit"
												colorScheme="pink"
											>
												Sign up
											</Button>
										</Link>
									</BoxSize>
								</Flex>
							</BoxSize>
						</Flex>
					</BoxSize>
				)}
			</Flex>
		</form>
	);
};

export default Login;
