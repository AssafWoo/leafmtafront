import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(handler);
	}, [value, delay]);

	return debouncedValue;
}

export const debounce = (fn, delay) => {
	let timeout = -1;
	return (...args) => {
		if (timeout !== -1) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(fn, delay, ...args);
	};
};
