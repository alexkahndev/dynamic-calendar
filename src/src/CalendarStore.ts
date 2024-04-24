// import { create } from "zustand";
// import { DateType } from "../hooks/useDate";

// type CalendarState = {
// 	filtersClicked: boolean[];
// 	setFiltersClicked: (index: number) => void;
// 	currentDate: DateType;
// 	daysInRange: number;
// 	setDaysInRange: (daysInRange: number) => void;
// 	selectedDate: DateType;
// 	setSelectedDate: (selectedDate: DateType) => void;
// };

// const now = new Date();
// const day = now.getDate();
// const month = now.getMonth();
// const year = now.getFullYear();

// export const useCalendarStore = create<CalendarState>((set) => ({
// 	filtersClicked: [false,false, false, false],
// 	setFiltersClicked: (index: number) =>
// 		set((state: { filtersClicked: any[] }) => {
// 			const newFiltersClicked = state.filtersClicked.map(
// 				(state: any, i: number) => (i === index ? !state : false)
// 			);
// 			return { filtersClicked: newFiltersClicked };
// 		}),
// 	daysInRange: 0,
// 	currentDate: {
// 		day,
// 		month,
// 		year
// 	},
// 	setDaysInRange: (daysInRange: number) => set({ daysInRange }),
// 	selectedDate: {
// 		year: new Date().getFullYear(),
// 		month: new Date().getMonth(),
// 		day: new Date().getDate()
// 	},
// 	setSelectedDate: (selectedDate: any) => set({ selectedDate })
// }));
