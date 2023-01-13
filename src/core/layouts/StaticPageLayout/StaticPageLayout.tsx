import { Outlet as MainContentPage } from "react-router-dom";
import { Box, useMantineTheme } from "@mantine/core";

import { IStaticPageLayout } from "@interfaces/core/layouts/StaticPageLayout";

const StaticPageLayout = ({ px = 20, py = 20 }: IStaticPageLayout) => {
	const theme = useMantineTheme();

	return (
		<Box
			px={px}
			py={py}
			style={{
				background:
					theme.colorScheme === "dark"
						? theme.colors.dark[8]
						: theme.colors.gray[1],
			}}
		>
			<MainContentPage />
		</Box>
	);
};

export default StaticPageLayout;
