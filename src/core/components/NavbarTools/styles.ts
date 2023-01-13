import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => {
	return {
		control: {
			fontWeight: 500,
			display: "block",
			width: "100%",
			padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
			color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
			fontSize: theme.fontSizes.sm,
			borderRadius: theme.radius.md,
			"&:hover": {
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.gray[8]
						: theme.colors.gray[2],
				color: theme.colorScheme === "dark" ? theme.white : theme.black,
			},
		},

		link: {
			fontWeight: 500,
			display: "block",
			textDecoration: "none",
		},

		sublink: {
			fontWeight: 500,
			display: "block",
			textDecoration: "none",
			padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
			paddingLeft: 25,
			marginLeft: 25,
			fontSize: theme.fontSizes.sm,
			borderRadius: theme.radius.md,
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[0]
					: theme.colors.gray[7],
			"&:hover": {
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.gray[8]
						: theme.colors.gray[2],
				color: theme.colorScheme === "dark" ? theme.white : theme.black,
			},
		},

		chevron: {
			transition: "transform 200ms ease",
		},
	};
});

export default styles;
