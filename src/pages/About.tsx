import { useState } from "react";
import { CalendarHeader } from "../components/content/CalendarHeader";
import { CalendarContent } from "../components/content/CalendarContent";
import { CalendarNavbar } from "../components/utils/CalendarNavbar";
import { useDate } from "../hooks/useDate";

const About = () => {
	const [filtersClicked, setFiltersClicked] = useState(Array(4).fill(false));

	const currentDate = useDate();

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
				<CalendarNavbar setFiltersClicked={setFiltersClicked} />
				<main
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<CalendarHeader
						filtersClicked={filtersClicked}
						setFiltersClicked={setFiltersClicked}
						currentDate={currentDate}
					/>
					<CalendarContent filtersClicked={filtersClicked} />
				</main>
			</body>
		</html>
	);
};

export default About;
