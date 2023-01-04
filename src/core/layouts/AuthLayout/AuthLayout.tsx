import { Outlet } from "react-router-dom";
import { useMantineTheme, Container } from "@mantine/core";

const AuthLayout = () => {
	const theme = useMantineTheme();

	return (
		<Container
			styles={{
				background:
					theme.colorScheme === "dark"
						? theme.colors.dark[8]
						: theme.colors.gray[1],
			}}
		>
			<Outlet />
		</Container>
	);
};

export default AuthLayout;
