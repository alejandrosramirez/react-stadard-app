import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => {
	return {
		container: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100vw",
			height: "100vh",
		},
		card: {
			width: "450px",
			boxShadow:
				"0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)",
			[theme.fn.smallerThan("sm")]: {
				width: "320px",
			},
		},
	};
});

export default styles;
