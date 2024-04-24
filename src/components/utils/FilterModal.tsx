import { ChangeEvent, Dispatch, SetStateAction } from "react";

type FilterModalProps = {
	dateRange: { start: string; end: string };
	handleDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
	isModalOpen: boolean;
	setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
	setFiltersClicked: Dispatch<SetStateAction<boolean[]>>;
};

export const FilterModal = ({
	dateRange,
	handleDateChange,
	isModalOpen,
	setIsModalOpen,
	setFiltersClicked
}: FilterModalProps) => {
	if (!isModalOpen) {
		return null;
	}

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleFilterSubmit = (index: number) => {
		setFiltersClicked((prevfiltersClicked) =>
			prevfiltersClicked.map((state, i) => (i === index ? !state : false))
		);
		setIsModalOpen(false);
	};

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<div
				style={{
					backgroundColor: "white",
					padding: "2rem",
					borderRadius: "4px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<h2>Select Date Range</h2>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginTop: "1rem",
						width: "100%"
					}}
				>
					<label
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							marginBottom: "1rem"
						}}
					>
						<span>Start Date:</span>
						<input
							type="date"
							name="start"
							value={dateRange.start}
							onChange={handleDateChange}
						/>
					</label>
					<label
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
							marginBottom: "1rem"
						}}
					>
						<span>End Date:</span>
						<input
							type="date"
							name="end"
							value={dateRange.end}
							onChange={handleDateChange}
						/>
					</label>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%"
						}}
					>
						<button
							type="button"
							onClick={closeModal}
							style={{
								padding: "0.5rem 1rem",
								borderRadius: "4px",
								border: "none",
								backgroundColor: "#007BFF",
								color: "white"
							}}
						>
							Close
						</button>
						<button
							type="button"
							onClick={() => handleFilterSubmit(0)}
							style={{
								padding: "0.5rem 1rem",
								borderRadius: "4px",
								border: "none",
								backgroundColor: "#007BFF",
								color: "white"
							}}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
