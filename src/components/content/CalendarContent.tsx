import React from 'react';

type CalendarContentProps = {
    clickedStates: boolean[];
};

export const CalendarContent = ({clickedStates}: CalendarContentProps) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const currentDay = daysOfWeek[today.getDay()];

    let squares;
    let columns;
    let rows;

    if (clickedStates[0]) {
        squares = Array(1).fill(today.getDate());
        columns = "1fr";
        rows = "1fr";
    } else if (clickedStates[1]) {
        squares = Array.from({length: 7}, (_, i) => i + 1);
        columns = "repeat(7, 1fr)";
        rows = "1fr";
    } else {
        squares = Array.from({length: 35}, (_, i) => i + 1);
        columns = "repeat(7, 1fr)";
        rows = "repeat(5, 1fr)";
    }

    return (
        <div style={{height: "100%", width: "95%"}}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: clickedStates[0] ? "1fr" : "repeat(7, 1fr)",
                    gap: "1px",
                    backgroundColor: "black",
                    height: "5%",
                    width: "100%"
                }}
            >
                {clickedStates[0] ? 
                    <div
                        style={{
                            backgroundColor: "#ECF0F1",
                            borderColor: "black",
                            borderStyle: "solid",
                        }}
                    >
                        {currentDay}
                    </div>
                    : 
                    daysOfWeek.map((day, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "#ECF0F1",
                                borderColor: "black",
                                borderStyle: "solid",
                            }}
                        >
                            {day}
                        </div>
                    ))
                }
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: columns,
                    gridTemplateRows: rows,
                    gap: "1px",
                    backgroundColor: "black",
                    height: "95%",
                    width: "100%"
                }}
            >
                {squares.map((day, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "#ECF0F1",
                            borderColor: "black",
                            borderStyle: "solid",
                        }}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
};
