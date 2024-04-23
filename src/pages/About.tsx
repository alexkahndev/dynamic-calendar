import { CalendarHeader } from "../components/content/CalendarHeader";
import { CalendarNavbar } from "../components/utils/CalendarNavbar";

const About = () => {
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
					<CalendarHeader />
					<div
						style={{
							backgroundColor: "red",
							borderColor: "black",
							borderStyle: "solid",
							height: "82.5%",
							width: "95%"
						}}
					></div>
				</main>
			</body>
		</html>
	);
};

export default About;
