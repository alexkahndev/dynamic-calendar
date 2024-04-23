import { useState } from "react";
import { CalendarHeader } from "../components/content/CalendarHeader";
import { CalendarContent } from "../components/content/CalendarContent";
import { CalendarNavbar } from "../components/utils/CalendarNavbar";

const About = () => {
	const [clickedStates, setClickedStates] = useState(Array(3).fill(false));
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
				<CalendarNavbar />
				<main
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<CalendarHeader  clickedStates={clickedStates} setClickedStates={setClickedStates} />
					<CalendarContent clickedStates={clickedStates} />
				</main>
			</body>
		</html>
	);
};

export default About;
