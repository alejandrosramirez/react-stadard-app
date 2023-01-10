import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { IPublicRoute } from "@interfaces/core/components/PublicRoute";
import { ISlice } from "@interfaces/store/slices";

const PublicRoute = ({ component: Component }: IPublicRoute) => {
	const { isLogged } = useSelector(
		(state: ISlice) => state.authSlice,
		shallowEqual
	);

	return isLogged ? (
		<Navigate to={"/dashboard"} replace />
	) : (
		<Component />
	);
};

export default PublicRoute;
