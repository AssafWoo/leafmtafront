/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { debounce, useDebounce } from "./useDebounce";
import { Input } from "@chakra-ui/react";
import { DarkerTheme, InputColor, LightTheme } from "../Styles/colors";
import { List } from "../Styles/styles";

const AutoCompleteInput = (props) => {
	const { suggestions, handleCountrySelect, control } = props;
	const [active, setActive] = useState(0);
	const [filtered, setFiltered] = useState([]);
	const [isShow, setIsShow] = useState(false);
	const [input, setInput] = useState();
	const [results, setResults] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [activeValue, setActiveValue] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

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

	const SearchItems = (mySearchTerm) => {
		const input = mySearchTerm;
		const newFilteredSuggestions = suggestions.filter(
			(suggestion) =>
				suggestion.name.toLowerCase().indexOf(input.toLowerCase()) > -1
		);
		setActive(0);
		setFiltered(newFilteredSuggestions);
		setIsShow(true);
		setInput(mySearchTerm);
	};

	const onChoosen = (e) => {
		setActiveValue(e.currentTarget.innerText);
		setActive(0);
		setFiltered([]);
		setIsShow(false);
		setInput(e.currentTarget.innerText);
		handleCountrySelect(e.currentTarget.id);
	};

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

	const renderAutocomplete = () => {
		if (isShow && input) {
			if (filtered.length) {
				return (
					<ul style={List}>
						{filtered.map((suggestion) => (
							<li
								key={suggestion.alpha2}
								id={suggestion.alpha2}
								onClick={(e) => onChoosen(e)}
								style={{ cursor: "pointer" }}
							>
								{suggestion.name}
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
				type="text"
				name="country"
				color={DarkerTheme}
				control={control}
				value={activeValue}
				onChange={(e) => {
					handleDebounce(e.target.value);
				}}
				// onKeyDown={onKeyDown}
				border="none"
				background={LightTheme}
			/>
			{renderAutocomplete()}
		</>
	);
};
export default AutoCompleteInput;
