import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { IPrivateRoute } from "@interfaces/core/components/PrivateRoute";
import { ISlice } from "@interfaces/store/slices";

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {
	const { isLogged } = useSelector(
		(state: ISlice) => state.authSlice,
		shallowEqual
	);

	return isLogged ? (
		<Component {...rest} />
	) : (
		<Navigate to={"/auth"} replace />
	);
};

export default PrivateRoute;
