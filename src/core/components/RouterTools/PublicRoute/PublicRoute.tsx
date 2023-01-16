import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { IPublicRoute } from "@interfaces/core/components/RouterTools/PublicRoute";
import { ISlice } from "@interfaces/store/slices";

const PublicRoute = ({ component: Component }: IPublicRoute) => {
	const { isLogged } = useSelector((state: ISlice) => state.authSlice, shallowEqual);

	if (isLogged) {
		return <Navigate to={"/home"} replace />;
	}

	return <Component />;
};

export default PublicRoute;
