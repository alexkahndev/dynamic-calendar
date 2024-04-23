import { useEffect, useState } from "react";

export type DateType = {
	day: number | undefined;
	month: number | undefined;
	year: number | undefined;
};

export const useDate = () => {
	const now = new Date();
	const day = now.getDate();
	const month = now.getMonth();
	const year = now.getFullYear();

	const [date, setDate] = useState<DateType>({
		day,
		month,
		year
	});

	useEffect(() => {
		const now = new Date();
		const day = now.getDate();
		const week = Math.ceil(day / 7);
		const month = now.getMonth();
		const year = now.getFullYear();

		const currentDate: DateType = {
			day,
			month,
			year
		};
		setDate(currentDate);
	}, []);

	return date;
};
