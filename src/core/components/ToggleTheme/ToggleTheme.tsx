import { Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { IconMoonStars as MoonStars, IconSun as Sun } from "@tabler/icons";

const ToggleTheme = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();

	return (
		<Switch
			checked={colorScheme === "dark"}
			onChange={() => toggleColorScheme()}
			size="lg"
			onLabel={<Sun color={theme.white} size={20} stroke={1.5} />}
			offLabel={
				<MoonStars
					color={theme.colors.gray[6]}
					size={20}
					stroke={1.5}
				/>
			}
		/>
	);
};

export default ToggleTheme;
