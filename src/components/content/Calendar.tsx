import { Dispatch, SetStateAction, useState } from "react";
import { CalendarContent } from "./CalendarContent";
import { CalendarHeader } from "./CalendarHeader";
import { DateType } from "../../hooks/useDate";

type CalendarProps = {
	filtersClicked: boolean[];
	setFiltersClicked: Dispatch<SetStateAction<boolean[]>>;
	currentDate: DateType;
	daysInRange: number;
};
export const Calendar = ({
	filtersClicked,
	setFiltersClicked,
	currentDate,
	daysInRange
}: CalendarProps) => {
	const [selectedDate, setSelectedDate] = useState<DateType>({
		year: currentDate.year,
		month: currentDate.month,
		day: currentDate.day
	});

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
				daysInRange={daysInRange}
			/>
		</div>
	);
};
