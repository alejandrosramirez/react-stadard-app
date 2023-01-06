import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import { ICustomMantineProvider } from "@interfaces/core/providers/CustomMantineProvider";

const CustomMantineProvider = ({ children, theme }: ICustomMantineProvider) => {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "color-scheme",
		defaultValue: "dark",
	});

	const toggleColorScheme = () =>
		setColorScheme((current) => (current === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ ...theme, colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

export default CustomMantineProvider;
