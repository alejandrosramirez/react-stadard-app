import { Box, useMantineTheme } from "@mantine/core";

import { IPageLayout } from "@/interfaces/core/layouts/PageLayout";

const PageLayout = ({ children, px = 20, py = 20 }: IPageLayout) => {
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
			{children}
		</Box>
	);
};

export default PageLayout;
