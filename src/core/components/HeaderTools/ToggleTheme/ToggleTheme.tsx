import { Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { IconMoonStars as MoonStars, IconSun as Sun } from "@tabler/icons";

import styles from "./styles";

const ToggleTheme = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();

	const { classes } = styles();

	return (
		<Switch
			checked={colorScheme === "dark"}
			onChange={() => toggleColorScheme()}
			size="xl"
			onLabel={<Sun color={theme.colors.yellow[4]} size={25} stroke={1.5} />}
			offLabel={<MoonStars color={theme.colors.gray[6]} size={24} stroke={1.5} />}
			className={classes.switch}
		/>
	);
};

export default ToggleTheme;
