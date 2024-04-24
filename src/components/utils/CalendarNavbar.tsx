import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FilterModal } from "./FilterModal";
import { CalendarLogo } from "../content/CalendarLogo";
import { CalendarSearchBar } from "./CalendarSearchBar";
import { CalendarSubmitButton } from "./CalendarSubmitButton";
import { CalendarFilterButton } from "./CalendarFilterButton";
import { CalendarProfileIcon } from "./CalendarProfileIcon";

type DateRange = {
	start: string;
	end: string;
};

type CalendarNavbarProps = {
	setFiltersClicked: Dispatch<SetStateAction<boolean[]>>;
};

export const CalendarNavbar = ({ setFiltersClicked }: CalendarNavbarProps) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [dateRange, setDateRange] = useState<DateRange>({
		start: "",
		end: ""
	});
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
		setDateRange({ ...dateRange, [e.target.name]: e.target.value });
	};

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
				dateRange={dateRange}
				handleDateChange={handleDateChange}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				setFiltersClicked={setFiltersClicked}
			/>
		</header>
	);
};
