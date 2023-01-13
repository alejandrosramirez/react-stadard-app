import { Box } from "@mantine/core";

import { IPageContainer } from "@interfaces/core/layouts/PageLayout/PageContainer";

const PageContainer = ({ children, px = 20, py = 20 }: IPageContainer) => {
	return (
		<Box px={px} py={py}>
			{children}
		</Box>
	);
};

export default PageContainer;
