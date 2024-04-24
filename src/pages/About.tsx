import { useState } from "react";
import { CalendarNavbar, DateRange } from "../components/utils/CalendarNavbar";
import { useDate } from "../hooks/useDate";
import { Calendar } from "../components/content/Calendar";

const About = () => {
	const [filtersClicked, setFiltersClicked] = useState(Array(4).fill(false));

	const currentDate = useDate();

	const [daysInRange, setDaysInRange] = useState<number>(0);

	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<title>Awesome.Social</title>
				<meta name="description" content="Bun, Elysia & React" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="stylesheet" href="/styles/About.css" />
				<link rel="icon" href="/assets/favicon.ico" />
			</head>
			<body>
				<CalendarNavbar
					setFiltersClicked={setFiltersClicked}
					daysInRange={daysInRange}
					setDaysInRange={setDaysInRange}
				/>
				<main
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						width: "100%"
					}}
				>
					<Calendar
						filtersClicked={filtersClicked}
						setFiltersClicked={setFiltersClicked}
						currentDate={currentDate}
						daysInRange={daysInRange}
					/>
				</main>
			</body>
		</html>
	);
};

export default About;
