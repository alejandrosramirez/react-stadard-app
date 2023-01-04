import { Outlet } from "react-router-dom";
import {
	AppShell as MantineAppShell,
	Container,
	useMantineTheme,
} from "@mantine/core";

const DashboardLayout = () => {
	const theme = useMantineTheme();

	return (
		<MantineAppShell
			padding={0}
			asideOffsetBreakpoint="sm"
			navbarOffsetBreakpoint="sm"
			header={<>Header</>}
			navbar={<>Navbar</>}
			styles={{
				main: {
					background:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[1],
					borderColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[4]
							: theme.colors.gray[3],
				},
			}}
		>
			<Outlet />
		</MantineAppShell>
	);
};

export default DashboardLayout;
