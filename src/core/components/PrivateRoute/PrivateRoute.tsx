import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import type { IPrivateRoute } from "@interfaces/core/components/PrivateRoute";
import type { IAuthSlice } from "@interfaces/store/slices/authSlice";

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {
	const { isLogged } = useSelector((state: IAuthSlice) => state, shallowEqual);

	return isLogged
		? <Component {...rest} />
		: <Navigate to={"/auth"} replace />;
};

export default PrivateRoute;
