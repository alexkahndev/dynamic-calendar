import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FilterModal } from "./FilterModal";
import { CalendarLogo } from "../content/CalendarLogo";
import { CalendarSearchBar } from "./CalendarSearchBar";
import { CalendarSubmitButton } from "./CalendarSubmitButton";
import { CalendarFilterButton } from "./CalendarFilterButton";
import { CalendarProfileIcon } from "./CalendarProfileIcon";

export type DateRange = {
	start: string;
	end: string;
};

type CalendarNavbarProps = {
	setFiltersClicked: Dispatch<SetStateAction<boolean[]>>;
	dateRange: DateRange;
	setDateRange: Dispatch<SetStateAction<DateRange>>;
	setDaysInCurrentRange: Dispatch<SetStateAction<number>>;
};

export const CalendarNavbar = ({
	setFiltersClicked,
	setDaysInCurrentRange,
	dateRange,
	setDateRange
}: CalendarNavbarProps) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<header>
			<nav
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 2fr 1fr",
					alignItems: "center",
					padding: "2rem 1.5rem",
					backgroundColor: "white"
				}}
			>
				<CalendarLogo />

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<CalendarFilterButton setIsModalOpen={setIsModalOpen} />

					<CalendarSearchBar
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>

					<CalendarSubmitButton
						setFiltersClicked={setFiltersClicked}
					/>
				</div>

				<CalendarProfileIcon />
			</nav>
			<FilterModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				setFiltersClicked={setFiltersClicked}
				setDaysInRange={setDaysInCurrentRange}
				dateRange={dateRange}
				setDateRange={setDateRange}
			/>
		</header>
	);
};
