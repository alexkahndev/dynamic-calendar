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
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100%"
			}}
		>
			<CalendarHeader
				filtersClicked={filtersClicked}
				setFiltersClicked={setFiltersClicked}
				currentDate={currentDate}
			/>
			<CalendarContent
				filtersClicked={filtersClicked}
				daysInRange={daysInRange}
			/>
		</div>
	);
};
