import styled from "styled-components";
import { DarkerTheme, MainGreen, MainGrey } from "../../Styles/colors";

export const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

export const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  columns={columns}
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableWrapper = styled.table`
	border: none;
	padding: 0.1rem;
	overflow: hidden;
	align-self: center;
	border-radius: 15px;
	display: inline-table;
	width: 100%;
`;

export const TableRow = styled.tr`
	background: transparent;
	color: ${DarkerTheme} !important;
	flex: 1;
	overflow: clip;
	padding: 0.5rem;
`;

export const TableHeader = styled.th`
	background: ${MainGreen};
	color: white;
	font-size: 1.1rem;
	padding: 0.5rem;
	margin: 0;
	font-weight: 300;
	border: 1px solid ${MainGrey};
	cursor: pointer;
	&:hover: {
		color: black;
	}
`;

export const SelectWrapper = styled.select`
	display: flex;
`;
