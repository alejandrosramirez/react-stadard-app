import { Outlet } from "react-router-dom";

import PageContainer from "./PageContainer";

const PageLayout = () => {
	return (
		<PageContainer px={20} py={20}>
			<Outlet />
		</PageContainer>
	);
};

export default PageLayout;
