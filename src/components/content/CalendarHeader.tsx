import { Dispatch, SetStateAction, useState } from "react";
import {
	arrowButtonStyle,
	buttonGroupStyle,
	containerStyle,
	filterButtonStyle
} from "../../styles/CalendarStyles";
import {
	decrementDay,
	decrementMonth,
	decrementWeek,
	incrementDay,
	incrementMonth,
	incrementWeek
} from "../../utils/CalendarUtils";
import { DateType } from "../../hooks/useDate";
import { DateHeader } from "./DateHeader";

type CalendarHeaderProps = {
	filtersClicked: boolean[];
	setFiltersClicked: Dispatch<SetStateAction<boolean[]>>;
	selectedDate: DateType;
	setSelectedDate: Dispatch<SetStateAction<DateType>>;
};
export const CalendarHeader = ({
	filtersClicked,
	setFiltersClicked,
	selectedDate,
	setSelectedDate
}: CalendarHeaderProps) => {
	const [hoverStates, setHoverStates] = useState(Array(5).fill(false));

	const handleMouseHover = (index: number) => {
		setHoverStates((prevHoverStates) =>
			prevHoverStates.map((state, i) => (i === index ? !state : state))
		);
	};

	const handleArrowUpClick = () => {
		if (filtersClicked[1]) {
			incrementDay(setSelectedDate);
		} else if (filtersClicked[2]) {
			incrementWeek(setSelectedDate);
		} else {
			incrementMonth(setSelectedDate);
		}
	};

	const handleArrowDownClick = () => {
		if (filtersClicked[1]) {
			decrementDay(setSelectedDate);
		} else if (filtersClicked[2]) {
			decrementWeek(setSelectedDate);
		} else {
			decrementMonth(setSelectedDate);
		}
	};

	const handleFilterClick = (index: number) => {
		setFiltersClicked((prevfiltersClicked) =>
			prevfiltersClicked.map((state, i) => (i === index ? !state : false))
		);
	};

	return (
		<div style={containerStyle}>
			<div style={buttonGroupStyle}>
				{["<", ">"].map((symbol, index) => (
					<button
						key={symbol + " Arrow Button"}
						style={arrowButtonStyle(hoverStates[index])}
						onMouseEnter={() => handleMouseHover(index)}
						onMouseLeave={() => handleMouseHover(index)}
						onClick={
							index === 0
								? handleArrowDownClick
								: handleArrowUpClick
						}
					>
						{symbol}
					</button>
				))}
			</div>
			<DateHeader
				filtersClicked={filtersClicked}
				selectedDate={selectedDate}
			/>

			<div style={buttonGroupStyle}>
				{["Day", "Week", "Month"].map((label, index) => (
					<button
						key={label + " Button"}
						style={filterButtonStyle(
							hoverStates[index + 2],
							filtersClicked[index + 1]
						)}
						onMouseEnter={() => handleMouseHover(index + 2)}
						onMouseLeave={() => handleMouseHover(index + 2)}
						onClick={() => handleFilterClick(index + 1)}
					>
						{label}
					</button>
				))}
			</div>
		</div>
	);
};
