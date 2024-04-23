import { useState } from "react";
import {
	arrowButtonStyle,
	buttonGroupStyle,
	containerStyle,
	dateHeaderStyle,
	filterButtonStyle
} from "../../styles/CalendarStyles";
import { isLeapYear, monthData } from "../../utils/CalendarUtils";
import { DateType, useDate } from "../../hooks/useDate";

export const CalendarHeader = () => {
	const [hoverStates, setHoverStates] = useState(Array(5).fill(false));
	const [clickedStates, setClickedStates] = useState(Array(3).fill(false));

	const currentDate = useDate();

	const [selectedDate, setSelectedDate] = useState<DateType>(currentDate);

	const handleMouseHover = (index: number) => {
		setHoverStates((prevHoverStates) =>
			prevHoverStates.map((state, i) => (i === index ? !state : state))
		);
	};

	const incrementDay = () => {
		setSelectedDate((prevDate) => {
			const { day, month, year } = prevDate;

			if (
				day === undefined ||
				month === undefined ||
				year === undefined
			) {
				return prevDate;
			}

			const specialMonth = month === 1 && isLeapYear(year);
			const daysInMonth = specialMonth
				? monthData[month].leapYearDays!
				: monthData[month].days;

			if (day < daysInMonth) {
				return { day: day + 1, month, year };
			} else {
				if (month < 11) {
					return { day: 1, month: month + 1, year };
				} else {
					return { day: 1, month: 0, year: year + 1 };
				}
			}
		});
	};

	const decrementDay = () => {
		setSelectedDate((prevDate) => {
			const { day, month, year } = prevDate;

			if (
				day === undefined ||
				month === undefined ||
				year === undefined
			) {
				return prevDate;
			}

			const specialMonth = month === 1 && isLeapYear(year);
			const daysInMonth = specialMonth
				? monthData[month].leapYearDays!
				: monthData[month].days;

			if (day > 1) {
				return { day: day - 1, month, year };
			} else {
				if (month > 0) {
					return { day: daysInMonth, month: month - 1, year };
				} else {
					return { day: 31, month: 11, year: year - 1 };
				}
			}
		});
	};

	const incrementMonth = () => {
		setSelectedDate((prevDate) => {
			const { day, month, year } = prevDate;

			if (
				day === undefined ||
				month === undefined ||
				year === undefined
			) {
				return prevDate;
			}

			if (month < 11) {
				return { day: 1, month: month + 1, year };
			} else {
				return { day: 1, month: 0, year: year + 1 };
			}
		});
	};

	const decrementMonth = () => {
		setSelectedDate((prevDate) => {
			const { day, month, year } = prevDate;

			if (
				day === undefined ||
				month === undefined ||
				year === undefined
			) {
				return prevDate;
			}

			if (month > 0) {
				return {
					day: monthData[month - 1].days,
					month: month - 1,
					year
				};
			} else {
				return { day: monthData[11].days, month: 11, year: year - 1 };
			}
		});
	};

	const handleArrowUpClick = () => {
		if (clickedStates[0]) {
			incrementDay();
		} else if (clickedStates[1]) {
		} else {
			incrementMonth();
		}
	};

	const handleArrowDownClick = () => {
		if (clickedStates[0]) {
			decrementDay();
		} else if (clickedStates[1]) {
		} else {
			decrementMonth();
		}
	};

	const handleFilterClick = (index: number) => {
		setClickedStates((prevClickedStates) =>
			prevClickedStates.map((state, i) => (i === index ? !state : false))
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
			<h2
				style={dateHeaderStyle}
			>{`${selectedDate.month! + 1}/${selectedDate.day}/${selectedDate.year}`}</h2>

			<div style={buttonGroupStyle}>
				{["Day", "Week", "Month"].map((label, index) => (
					<button
						key={label + " Button"}
						style={filterButtonStyle(
							hoverStates[index + 2],
							clickedStates[index]
						)}
						onMouseEnter={() => handleMouseHover(index + 2)}
						onMouseLeave={() => handleMouseHover(index + 2)}
						onClick={() => handleFilterClick(index)}
					>
						{label}
					</button>
				))}
			</div>
		</div>
	);
};
