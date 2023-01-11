import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
	colorScheme: "dark",
	primaryColor: "blue",
	fontFamily: "'Montserrat', sans-serif",
	primaryShade: 6,
	breakpoints: {
		xl: 1600,
		lg: 1200,
		md: 1000,
		sm: 768,
		xs: 576,
	},
};
