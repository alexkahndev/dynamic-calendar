import { DateRange } from "../utils/CalendarNavbar";

type CalendarContentProps = {
	filtersClicked: boolean[];
	dateRange: DateRange;
	daysInCurrentRange: number;
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const CalendarContent = ({
	filtersClicked,
	dateRange,
	daysInCurrentRange
}: CalendarContentProps) => {
	const getCalendarSettings = () => {
		let squares, columns, rows;

		if (filtersClicked[0]) {
			const length = Math.ceil(daysInCurrentRange / 7) * 7;
			squares = Array.from({ length }, (_, i) => i + 1);
			columns = "repeat(7, 1fr)";
			rows = "1fr";
		} else if (filtersClicked[1]) {
			squares = Array(1).fill(1);
			columns = "1fr";
			rows = "1fr";
		} else if (filtersClicked[2]) {
			squares = Array.from({ length: 7 }, (_, i) => i + 1);
			columns = "repeat(7, 1fr)";
			rows = "1fr";
		} else {
			const length = Math.ceil(35 / 7) * 7;
			squares = Array.from({ length }, (_, i) => i + 1);
			columns = "repeat(7, 1fr)";
			rows = "repeat(5, 1fr)";
		}

		return { squares, columns, rows };
	};

	const { squares, columns, rows } = getCalendarSettings();

	
	return (
		<div style={{ height: "100%", width: "100%" }}>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: filtersClicked[1]
						? "1fr"
						: "repeat(7, 1fr)",
					gap: "1px",
					height: "10%",
					maxHeight: "50px",
					width: "100%",
					marginTop: "0.1rem",
					marginBottom: "0.1rem"
				}}
			>
				{filtersClicked[1] ? (
					<div style={{ border: "2px solid black" }}>test-number</div>
				) : (
					daysOfWeek.map((day, index) => (
						<div
							key={index}
							style={{
								border: "2px solid black"
							}}
						>
							{day}
						</div>
					))
				)}
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: columns,
					gridTemplateRows: rows,
					gap: "1px",
					height: "90%",
					width: "100%"
				}}
			>
				{squares.map((day, index) => (
					<div
						key={index}
						style={{
							border: "2px solid black",
							minHeight: "100px"
						}}
					>
						{day}
					</div>
				))}
			</div>
		</div>
	);
};
