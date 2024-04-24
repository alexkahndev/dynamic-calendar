export const arrowButtonStyle = (isHovered: boolean) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "0 10px",
	backgroundColor: isHovered ? "#2C3E50" : "#BDC3C7",
	border: "none",
	borderRadius: "4px",
	padding: "10px 20px",
	fontSize: "16px",
	fontWeight: "bold",
	color: isHovered ? "#BDC3C7" : "#2C3E50",
	cursor: "pointer",
	width: "80px",
	transition: "all 0.3s ease"
});

export const filterButtonStyle = (isHovered: boolean, isClicked: boolean) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "0 10px",
	backgroundColor: isHovered ? "#2C3E50" : "#BDC3C7",
	border: isClicked ? "2px solid #3498DB" : "none",
	boxShadow: isClicked ? "0 0 10px #3498DB" : "none",
	borderRadius: "4px",
	padding: "10px 20px",
	fontSize: "16px",
	fontWeight: "bold",
	color: isHovered ? "#BDC3C7" : "#2C3E50",
	cursor: "pointer",
	width: "80px",
	transition: "all 0.3s ease"
});

export const containerStyle = {
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	alignItems: "center",
	justifyContent: "center",
	alignContent: "center",
	padding: "10px 10px"
};

export const buttonGroupStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
};

export const dateHeaderStyle = {
	margin: "0",
	textAlign: "center" as const,
	color: "#2C3E50",
	fontSize: "48px",
	fontWeight: "bold" as const
};
