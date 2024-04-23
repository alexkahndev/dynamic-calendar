import { Dispatch, SetStateAction } from "react";
import { DateType } from "../hooks/useDate";

export const monthData = [
	{ name: "January", days: 31 },
	{ name: "February", days: 28, leapYearDays: 29 },
	{ name: "March", days: 31 },
	{ name: "April", days: 30 },
	{ name: "May", days: 31 },
	{ name: "June", days: 30 },
	{ name: "July", days: 31 },
	{ name: "August", days: 31 },
	{ name: "September", days: 30 },
	{ name: "October", days: 31 },
	{ name: "November", days: 30 },
	{ name: "December", days: 31 }
];

export function isLeapYear(year: number): boolean {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export const incrementDay = (setSelectedDate : Dispatch<SetStateAction<DateType>>) => {
	setSelectedDate((prevDate) => {
		const { day, month, year } = prevDate;

		if (day === undefined || month === undefined || year === undefined) {
			return prevDate;
		}

		const specialMonth = month === 1 && isLeapYear(year);
		const daysInMonth = specialMonth
			? monthData[month].leapYearDays!
			: monthData[month].days;

		if (day < daysInMonth) {
			return { day: day + 1, month, year };
		} else {
			if (month < 11) {
				return { day: 1, month: month + 1, year };
			} else {
				return { day: 1, month: 0, year: year + 1 };
			}
		}
	});
};

export const decrementDay = (setSelectedDate : Dispatch<SetStateAction<DateType>>) => {
	setSelectedDate((prevDate) => {
		const { day, month, year } = prevDate;

		if (day === undefined || month === undefined || year === undefined) {
			return prevDate;
		}

		const specialMonth = month === 1 && isLeapYear(year);
		const daysInMonth = specialMonth
			? monthData[month].leapYearDays!
			: monthData[month].days;

		if (day > 1) {
			return { day: day - 1, month, year };
		} else {
			if (month > 0) {
				return { day: daysInMonth, month: month - 1, year };
			} else {
				return { day: 31, month: 11, year: year - 1 };
			}
		}
	});
};

export const incrementWeek = (setSelectedDate: Dispatch<SetStateAction<DateType>>) => {
    setSelectedDate((prevDate) => {
        const { day, month, year } = prevDate;

        if (day === undefined || month === undefined || year === undefined) {
            return prevDate;
        }

        if (day + 7 <= monthData[month].days) {
            return { day: day + 7, month, year };
        } else {
            if (month < 11) {
                return { day: day + 7 - monthData[month].days, month: month + 1, year };
            } else {
                return { day: day + 7 - monthData[month].days, month: 0, year: year + 1 };
            }
        }
    });
}

export const decrementWeek = (setSelectedDate: Dispatch<SetStateAction<DateType>>) => {
    setSelectedDate((prevDate) => {
        const { day, month, year } = prevDate;

        if (day === undefined || month === undefined || year === undefined) {
            return prevDate;
        }

        if (day - 7 > 0) {
            return { day: day - 7, month, year };
        } else {
            if (month > 0) {
                return { day: monthData[month - 1].days + day - 7, month: month - 1, year };
            } else {
                return { day: monthData[11].days + day - 7, month: 11, year: year - 1 };
            }
        }
    });
}

export const incrementMonth = (setSelectedDate: Dispatch<SetStateAction<DateType>>) => {
	setSelectedDate((prevDate) => {
		const { day, month, year } = prevDate;

		if (day === undefined || month === undefined || year === undefined) {
			return prevDate;
		}

		if (month < 11) {
			return { day: 1, month: month + 1, year };
		} else {
			return { day: 1, month: 0, year: year + 1 };
		}
	});
};

export const decrementMonth = (setSelectedDate: Dispatch<SetStateAction<DateType>>) => {
	setSelectedDate((prevDate) => {
		const { day, month, year } = prevDate;

		if (day === undefined || month === undefined || year === undefined) {
			return prevDate;
		}

		if (month > 0) {
			return {
				day: monthData[month - 1].days,
				month: month - 1,
				year
			};
		} else {
			return { day: monthData[11].days, month: 11, year: year - 1 };
		}
	});
};
