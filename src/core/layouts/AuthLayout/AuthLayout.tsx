import { Outlet } from "react-router-dom";
import { useMantineTheme, Box } from "@mantine/core";

const AuthLayout = () => {
	const theme = useMantineTheme();

	return (
		<Box
			style={{
				background:
					theme.colorScheme === "dark"
						? theme.colors.dark[8]
						: theme.colors.gray[1],
			}}
		>
			<Outlet />
		</Box>
	);
};

export default AuthLayout;
