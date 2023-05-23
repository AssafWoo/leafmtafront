import React, { useEffect, useState } from "react";
import {
	PieChart,
	Pie,
	Legend,
	Tooltip,
	Cell,
	Label,
	ResponsiveContainer,
} from "recharts";
import {
	DarkerTheme,
	LightBlue,
	MainBlue,
	MainPink,
	MainPurple,
} from "../../Styles/colors";
import { capitalizeFirstLetter } from "../../Utils/upperCase";
import { Wrapper } from "./styles";

const COLORS = [MainPink, MainPurple, MainBlue, LightBlue];

const LegenedText = (value) => {
	return <span style={{ color: DarkerTheme }}>{value}</span>;
};

const CustomLabel = ({ viewBox, value1, value2 }) => {
	const { cx, cy } = viewBox;
	return (
		<>
			<text
				fill={DarkerTheme}
				x={cx}
				y={cy}
				className="recharts-text recharts-label"
				textAnchor="middle"
				dominantBaseline="central"
			>
				<tspan alignmentBaseline="middle" fontSize="14">
					Offseting Projects
				</tspan>
			</text>
		</>
	);
};

// should get data object, custom values as props
const DoughNut = ({ width, data = [] }) => {
	const [projectTypes, setProjectTypes] = useState([]);

	const extractTypes = (myData) => {
		let finalArr = [];
		const types = myData.map((project) => {
			return project.offset_type			;
		});
		const occurrences = types.reduce(function (acc, curr) {
			return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
		}, {});
		Object.keys(occurrences).map((el) => {
			let currObj = {
				name: capitalizeFirstLetter(el),
				value: occurrences[el],
			};
			finalArr.push(currObj);
		});
		return finalArr;
	};

	useEffect(() => {
		if (data.length > 0) {
			const finalArr = extractTypes(data);
			setProjectTypes([...finalArr]);
		}
	}, [data]);

	return (
		<Wrapper>
			<ResponsiveContainer width={width} height={250}>
				<PieChart>
					<Pie
						data={projectTypes}
						cx={width / 2 - width / 4}
						cy={120}
						innerRadius={60}
						outerRadius={80}
						paddingAngle={0}
						dataKey="value"
						strokeWidth="0"
					>
						{data.map((entry, index) => (
							<Cell
								cursor="pointer"
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
						<Label
							width={30}
							position="center"
							content={<CustomLabel />}
						></Label>
					</Pie>
					<Tooltip
						position={{ x: width - 200, y: 150 }}
						animationEasing="linear"
					/>
					<Legend verticalAlign="top" height={36} formatter={LegenedText} />
				</PieChart>
			</ResponsiveContainer>
		</Wrapper>
	);
};
export default DoughNut;
