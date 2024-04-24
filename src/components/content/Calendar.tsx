import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CalendarContent } from "./CalendarContent";
import { CalendarHeader } from "./CalendarHeader";
import { DateType } from "../../hooks/useDate";
import { DateRange } from "../utils/CalendarNavbar";

type CalendarProps = {
	filtersClicked: boolean[];
	setFiltersClicked: Dispatch<SetStateAction<boolean[]>>;
	currentDate: DateType;
	daysInCurrentRange: number;
	dateRange: DateRange;
};
export const Calendar = ({
	filtersClicked,
	setFiltersClicked,
	currentDate,
	daysInCurrentRange,
	dateRange
}: CalendarProps) => {
	const [selectedDate, setSelectedDate] = useState<DateType>({
		year: currentDate.year,
		month: currentDate.month,
		day: currentDate.day
	});

	useEffect(()=>{

		console.log("Calendar.tsx: start: " + dateRange.start + " end: " + dateRange.end)
	},[dateRange])

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "95%",
				height: "95%",
				backgroundColor: "white",
				border: "2px solid black",
				padding: "2px"
			}}
		>
			<CalendarHeader
				filtersClicked={filtersClicked}
				setFiltersClicked={setFiltersClicked}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
			<CalendarContent
				filtersClicked={filtersClicked}
				daysInCurrentRange={daysInCurrentRange}
				dateRange={dateRange}
			/>
			
		</div>
	);
};
