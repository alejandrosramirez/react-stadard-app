import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { IPublicRoute } from "@interfaces/core/components/PublicRoute";
import { IAuthSlice } from "@interfaces/store/slices/authSlice";

const PublicRoute = ({ component: Component }: IPublicRoute) => {
	const { isLogged } = useSelector(
		(state: IAuthSlice) => state,
		shallowEqual
	);

	return isLogged ? <Navigate to={"/dashboard"} replace /> : <Component />;
};

export default PublicRoute;
