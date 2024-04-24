type CalendarContentProps = {
	filtersClicked: boolean[];
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getCalendarSettings = (filtersClicked: boolean[], today: Date) => {
	let squares, columns, rows;

	if(filtersClicked[0]) {
		const length = Math.ceil(300 / 7) * 7;
		squares = Array.from({ length }, (_, i) => i + 1);
		columns = "repeat(7, 1fr)";
		rows = "1fr";
	} else if (filtersClicked[1]) {
		squares = Array(1).fill(today.getDate());
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
}

export const CalendarContent = ({ filtersClicked }: CalendarContentProps) => {
	const today = new Date();
	const currentDay = daysOfWeek[today.getDay()];

	const { squares, columns, rows } = getCalendarSettings(filtersClicked, today);

	return (
		<div style={{ height: "100%", width: "95%"}}>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: filtersClicked[1] ? "1fr" : "repeat(7, 1fr)",
					gap: "1px",
					height: "10%",
					maxHeight: "50px",
					width: "100%"
				}}
			>
				{filtersClicked[1] ? (
					<div style={{ backgroundColor: "#ECF0F1", borderColor: "black", borderStyle: "solid",  }}>
						{currentDay}
					</div>
				) : (
					daysOfWeek.map((day, index) => (
						<div key={index} style={{ backgroundColor: "#ECF0F1", borderColor: "black", borderStyle: "solid", }}>
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
					<div key={index} style={{ backgroundColor: "#ECF0F1", borderColor: "black", borderStyle: "solid", minHeight: "100px" }}>
						{day}
					</div>
				))}
			</div>
		</div>
	);
};
