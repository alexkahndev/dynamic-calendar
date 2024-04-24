import { Dispatch, SetStateAction } from "react";

type FilterButtonProps = {
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const CalendarFilterButton = ({ setIsModalOpen }: FilterButtonProps) => (
	<button
		onClick={() => setIsModalOpen((prevState) => !prevState)}
		style={{
			padding: "0.25rem 1rem",
			borderRadius: "4px",
			border: "none",
			backgroundColor: "#007BFF",
			color: "white"
		}}
	>
		<img
			src="/assets/svg/sliders.svg"
			alt="Calendar Icon"
			style={{ height: "1.5rem" }}
		/>
	</button>
);
