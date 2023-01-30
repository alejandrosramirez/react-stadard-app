import { createStyles } from "@mantine/core";

const styles = createStyles((theme) => {
	return {
		title: {
			fontWeight: 600,
			fontSize: "16px",
			lineHeight: "155%",
		},
		subtitle: {
			fontWeight: 500,
			fontSize: "14px",
			lineHeight: "155%",
			color:
				theme.colorScheme === "dark"
					? theme.colors.dark[0]
					: theme.colors.gray[7],
			[theme.fn.smallerThan("sm")]: {
				fontSize: "12px",
			},
		},
	};
});

export default styles;
