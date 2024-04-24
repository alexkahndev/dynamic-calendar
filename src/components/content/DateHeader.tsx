// DateHeader.tsx
import { DateType } from "../../hooks/useDate";
import { monthData } from "../../utils/CalendarUtils";
import { dateHeaderStyle } from "../../styles/CalendarStyles";

type DateHeaderProps = {
	filtersClicked: boolean[];
	selectedDate: DateType;
};

const getDayDisplay = (selectedDate: DateType) => {
	return `${monthData[selectedDate.month!].name} ${selectedDate.day}, ${selectedDate.year}`;
};

const getMonthDisplay = (selectedDate: DateType) => {
	return `${monthData[selectedDate.month!].name} ${selectedDate.year}`;
};

const getWeekDisplay = (selectedDate: DateType) => {
	const endDate = new Date(
		selectedDate.year!,
		selectedDate.month!,
		selectedDate.day!
	);
	endDate.setDate(endDate.getDate() + 6);

	if (selectedDate.month! === endDate.getMonth()) {
		return `${monthData[selectedDate.month!].name} ${selectedDate.day} - ${endDate.getDate()}, ${selectedDate.year}`;
	} else {
		return `${monthData[selectedDate.month!].name} ${selectedDate.day} - ${monthData[endDate.getMonth()].name} ${endDate.getDate()}, ${selectedDate.year}`;
	}
};

export const DateHeader = ({
	filtersClicked,
	selectedDate
}: DateHeaderProps) => {
	let displayDate;

	if (filtersClicked[1]) {
		displayDate = getDayDisplay(selectedDate);
	} else if (filtersClicked[2]) {
		displayDate = getWeekDisplay(selectedDate);
	} else {
		displayDate = getMonthDisplay(selectedDate);
	}

	return <h2 style={dateHeaderStyle}>{displayDate}</h2>;
};
