import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type FilterModalProps = {
	isModalOpen: boolean;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	setFiltersClicked: Dispatch<SetStateAction<boolean[]>>;
	setDaysInRange: Dispatch<SetStateAction<number>>;
	dateRange: { start: string; end: string };
	setDateRange: Dispatch<SetStateAction<{ start: string; end: string }>>;
};

export const FilterModal = ({
	isModalOpen,
	setIsModalOpen,
	setFiltersClicked,
	setDaysInRange,
	dateRange,
	setDateRange
}: FilterModalProps) => {
	if (!isModalOpen) return null;

	const closeModal = () => setIsModalOpen(false);

	const handleFilterSubmit = () => {
		const { start, end } = dateRange;
		const startDate = new Date(start);
		const endDate = new Date(end);

		if (endDate < startDate)
			return alert("End date cannot be before start date.");
		if (!start && !end) return alert("Please select a start and end date.");
		if (!start) return alert("Please select a start date.");
		if (!end) return alert("Please select an end date.");

		const timeDifference = Math.abs(
			endDate.getTime() - startDate.getTime()
		);
		const daysInRange = Math.ceil(timeDifference / (1000 * 3600 * 24));

		setFiltersClicked([true, false, false, false]);
		setDaysInRange(daysInRange);
		closeModal();
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
					{["Start", "End"].map((label) => (
						<label
							key={label}
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
								marginBottom: "1rem"
							}}
						>
							<span>{label} Date:</span>
							<input
								type="date"
								name={label.toLowerCase()}
								value={
									dateRange[
										label.toLowerCase() as keyof typeof dateRange
									]
								}
								placeholder={
									dateRange[
										label.toLowerCase() as keyof typeof dateRange
									]
								}
								onChange={(
									event: ChangeEvent<HTMLInputElement>
								) =>
									setDateRange((prev) => ({
										...prev,
										[label.toLowerCase() as keyof typeof dateRange]:
											event.target.value
									}))
								}
							/>
						</label>
					))}

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
							onClick={handleFilterSubmit}
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
