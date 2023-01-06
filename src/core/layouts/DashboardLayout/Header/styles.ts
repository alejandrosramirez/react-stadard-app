import { createStyles } from "@mantine/core";

import { headerSmWidth, headerBaseWidth} from "@core/constants";

const styles = createStyles((theme) => ({
	header: {
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
	},

	inner: {
		height: 70,
		display: "flex",
		alignItems: "center",
	},

	brand: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		width: `calc(100% - ${theme.spacing.md}px)`,
		maxWidth: headerBaseWidth - theme.spacing.md,
		borderRight: `1px solid
			${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,

		[theme.fn.smallerThan("md")]: {
			maxWidth: headerSmWidth - 15.99,
			paddingLeft: 5,
		},

		[theme.fn.smallerThan("sm")]: {
			paddingLeft: 0,
			border: "none",
		},
	},

	tools: {
		display: "flex",
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",

		[theme.fn.smallerThan("sm")]: {
			justifyContent: "end",
		},
	},

	leftTools: {
		flex: "60% 1 0",
	},

	search: {
		width: "55%",
		maxWidth: "550px",
		fontSize: "14px !important",
		fontWeight: 500,
	},

	rightTools: {
		display: "flex",
		width: "100%",
		alignItems: "center",
		gap: "25px",
		justifyContent: "flex-end",

		[theme.fn.smallerThan("sm")]: {
			justifyContent: "end",
		},
	},
}));

export default styles;
