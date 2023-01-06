import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { IPublicRoute } from "@interfaces/core/components/PublicRoute";
import { ISlice } from "@interfaces/store/slices";

const PublicRoute = ({ component: Component }: IPublicRoute) => {
	const { isLogged } = useSelector(
		(state: ISlice) => state.authSlice,
		shallowEqual
	);

	console.log(isLogged);

	return isLogged ? (
		<Navigate to={"dashboard"} replace={true} />
	) : (
		<Component />
	);
};

export default PublicRoute;
