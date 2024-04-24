import { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const CalendarSearchBar = ({
	searchTerm,
	setSearchTerm
}: SearchBarProps) => (
	<input
		type="text"
		value={searchTerm}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
			setSearchTerm(e.target.value)
		}
		placeholder="Search..."
		style={{
			margin: "0 1rem",
			padding: "0.5rem",
			borderRadius: "4px",
			border: "1px solid #ccc"
		}}
	/>
);
