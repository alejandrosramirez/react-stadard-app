import { createStyles } from "@mantine/core";

const styles = createStyles(() => {
	return {
		spinnerContainer: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
		auth: {
			width: "100vw",
			height: "100vh",
			position: "relative",
		},
		dashboard: {
			width: "100%",
			height: "100%",
			position: "relative",
		},
	};
});

export default styles;
