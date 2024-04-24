import { Dispatch, SetStateAction } from "react";

type CalendarSubmitButtonProps = {
	setFiltersClicked: Dispatch<SetStateAction<boolean[]>>;
};

export const CalendarSubmitButton = ({
	setFiltersClicked
}: CalendarSubmitButtonProps) => {
	const handleFilterSubmit = (index: number) => {
		setFiltersClicked((prevFiltersClicked) => {
			return prevFiltersClicked.map((state, i) =>
				i === index ? !state : false
			);
		});
	};

	return (
		<button
			style={{
				padding: "0.5rem 1rem",
				borderRadius: "4px",
				border: "none",
				backgroundColor: "#007BFF",
				color: "white"
			}}
			onClick={() => handleFilterSubmit(0)}
		>
			Submit
		</button>
	);
};
