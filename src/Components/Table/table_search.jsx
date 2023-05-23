/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import {
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const TableSearch = ({ filter, setGlobalFilter }) => {
	const [value, setValue] = useState(filter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 50);

	return (
		<>
			<FormControl variant="standard">
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<SearchIcon color="gray.700" />}
					/>
					<Input
						placeholder="Search Transactions"
						value={filter || ""}
						style={{
							background: "white",
							color: "black",
							borderRadius: "15px",
							marginBottom: "1rem",
						}}
						onChange={(e) => {
							setValue(e.target.value);
							onChange(e.target.value);
						}}
					/>{" "}
				</InputGroup>
			</FormControl>
		</>
	);
};

export default TableSearch;
