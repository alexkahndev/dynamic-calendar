import { Dispatch, SetStateAction, useState } from "react";
import {
	arrowButtonStyle,
	buttonGroupStyle,
	containerStyle,
	dateHeaderStyle,
	filterButtonStyle
} from "../../styles/CalendarStyles";
import {
	decrementDay,
	decrementMonth,
	decrementWeek,
	incrementDay,
	incrementMonth,
	incrementWeek,
  monthData
} from "../../utils/CalendarUtils";
import { DateType, useDate } from "../../hooks/useDate";

type CalendarHeaderProps = {
  clickedStates: boolean[];
  setClickedStates: Dispatch<SetStateAction<boolean[]>>;
};
export const CalendarHeader = ({clickedStates,setClickedStates}: CalendarHeaderProps) => {
	const [hoverStates, setHoverStates] = useState(Array(5).fill(false));
	

	const currentDate = useDate();

	const [selectedDate, setSelectedDate] = useState<DateType>(currentDate);

	const handleMouseHover = (index: number) => {
		setHoverStates((prevHoverStates) =>
			prevHoverStates.map((state, i) => (i === index ? !state : state))
		);
	};

	const handleArrowUpClick = () => {
		if (clickedStates[0]) {
			incrementDay(setSelectedDate);
		} else if (clickedStates[1]) {
			incrementWeek(setSelectedDate);
		} else {
			incrementMonth(setSelectedDate);
		}
	};

	const handleArrowDownClick = () => {
		if (clickedStates[0]) {
			decrementDay(setSelectedDate);
		} else if (clickedStates[1]) {
			decrementWeek(setSelectedDate);
		} else {
			decrementMonth(setSelectedDate);
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
      {clickedStates[0] ? (
        <h2
          style={dateHeaderStyle}
        >{`${monthData[selectedDate.month!].name} ${selectedDate.day}, ${selectedDate.year}`}</h2>
      ) : clickedStates[1] ? (
        <h2
          style={dateHeaderStyle}
        >{`${monthData[selectedDate.month!].name} ${selectedDate.day} - ${selectedDate.day! + 6}, ${selectedDate.year}`}</h2>
      ) : (
        <h2
          style={dateHeaderStyle}
        >{`${monthData[selectedDate.month!].name} ${selectedDate.year}`}</h2>
      )}

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
