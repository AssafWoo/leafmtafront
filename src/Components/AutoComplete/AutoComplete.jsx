/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Input } from "@chakra-ui/react";
import { debounce, useDebounce } from "../../Utils/useDebounce";
import { List } from "../../Styles/styles";
import { DarkerTheme, LightTheme } from "../../Styles/colors";

const AutoCompleteInput = ({
	suggestions,
	handleAutoCompleteSelect,
	control,
	inputDetails,
	clear,
}) => {
	const [active, setActive] = useState(0);
	const [filtered, setFiltered] = useState([]);
	const [isShow, setIsShow] = useState(false);
	const [input, setInput] = useState();
	const [results, setResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [activeValue, setActiveValue] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	useEffect(() => {
		if (clear) {
			setActiveValue("");
			setSearchTerm("");
		}
	}, [clear]);

	useEffect(() => {
		if (debouncedSearchTerm.length > 0) {
			setResults(results);
			SearchItems(debouncedSearchTerm);
		} else {
			setResults([]);
		}
	}, [debouncedSearchTerm]);

	const handleDebounce = useMemo(() => {
		return debounce((value) => {
			setActiveValue(value);
			setSearchTerm(value);
		}, 50);
	}, []);

	const SearchItems = useCallback((mySearchTerm) => {
		const input = mySearchTerm;
		const newFilteredSuggestions = suggestions.filter(
			(suggestion) =>
				suggestion.code.toLowerCase().indexOf(input.toLowerCase()) > -1
		);
		setActive(0);
		setFiltered(newFilteredSuggestions);
		setIsShow(true);
		setInput(mySearchTerm);
	}, []);

	const onChoosen = useCallback((id, e) => {
		setActiveValue(e.currentTarget.innerText);
		setActive(0);
		setFiltered([]);
		setIsShow(false);
		setInput(e.currentTarget.innerText);
		handleAutoCompleteSelect(id, e.currentTarget.innerText);
	}, []);

	// const onKeyDown = (e) => {
	// 	if (e.keyCode === 13) {
	// 		// enter key
	// 		setActive(0);
	// 		setIsShow(false);
	// 		setInput(filtered[active]);
	// 	} else if (e.keyCode === 38) {
	// 		// up arrow
	// 		return active === 0 ? null : setActive(active - 1);
	// 	} else if (e.keyCode === 40) {
	// 		// down arrow
	// 		return active - 1 === filtered.length ? null : setActive(active + 1);
	// 	}
	// };

	const renderAutocomplete = (inputDetails) => {
		if (isShow && input) {
			if (filtered.length) {
				return (
					<ul style={List}>
						{filtered.map((suggestion) => (
							<li
								key={suggestion.code}
								id={suggestion.code}
								onClick={(e) => onChoosen(inputDetails.name, e)}
								style={{ cursor: "pointer" }}
							>
								{suggestion.code}
							</li>
						))}
					</ul>
				);
			} else {
				return (
					<ul style={List}>
						<li>No results...</li>
					</ul>
				);
			}
		}
		return <></>;
	};
	return (
		<>
			<Input
				type={inputDetails.type}
				name={inputDetails.name}
				mb="3"
				color={DarkerTheme}
				width={inputDetails.width}
				control={control}
				value={activeValue}
				defaultValue={inputDetails.value ? inputDetails.value : ""}
				placeholder={inputDetails.placeholder}
				onChange={(e) => {
					handleDebounce(e.target.value);
				}}
				// onKeyDown={onKeyDown}
				border="none"
				id={inputDetails.name}
				background={LightTheme}
			/>
			{renderAutocomplete(inputDetails)}
		</>
	);
};
export default AutoCompleteInput;
