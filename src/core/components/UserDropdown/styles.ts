import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => {
	return {
		user: {
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[0]
					: theme.black,
			paddingLeft: theme.spacing.sm,
			transition: "background-color 100ms ease",
			borderLeft: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[5]
					: theme.colors.gray[3]
			}`,
			"&:hover": {
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[8]
						: theme.white,
			},
		},

		group: {
			display: "flex",
			gap: "0 15px",
		},

		dropdown: {
			boxShadow:
				"0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)",
		},

		userInfo: {
			lineHeight: "155%",
			[theme.fn.smallerThan("md")]: {
				display: "none",
			},
		},
	};
});

export default styles;
