import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => {
	return {
		// used for Navbar
		navbar: {
			backgroundColor:
				theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
			paddingBottom: 0,
		},

		header: {
			padding: theme.spacing.md,
			paddingTop: 0,
			marginLeft: -theme.spacing.md,
			marginRight: -theme.spacing.md,
			color: theme.colorScheme === "dark" ? theme.white : theme.black,
			borderBottom: `1px solid ${
				theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
			}`,
		},

		links: {
			marginLeft: -theme.spacing.xs,
			marginRight: -theme.spacing.xs,
		},

		linksInner: {
			paddingLeft: theme.spacing.lg - theme.spacing.xs,
			paddingRight: theme.spacing.lg - theme.spacing.xs,
			paddingBottom: theme.spacing.md,
		},

		footer: {
			marginLeft: -theme.spacing.md,
			marginRight: -theme.spacing.md,
			borderTop: `1px solid ${
				theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
			}`,
		},

		// used for NavLink and NavGroup
		control: {
			fontWeight: 500,
			display: "block",
			width: "100%",
			marginBottom: 1.5,
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
			paddingLeft: 30,
			marginLeft: 30,
			marginBottom: 2.5,
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

		active: {
			"&, &:hover": {
				backgroundColor: theme.fn.variant({
					variant: "light",
					color: theme.primaryColor,
				}).background,
				color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
					.color,
				borderRadius: theme.radius.md,
			},
		},

		activeSublink: {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.colors.gray[5],
			}).background,
			color: theme.fn.variant({ variant: "light", color: theme.colors.gray[5] })
				.color,
			borderRadius: theme.radius.md,
		},
	};
});

export default styles;
