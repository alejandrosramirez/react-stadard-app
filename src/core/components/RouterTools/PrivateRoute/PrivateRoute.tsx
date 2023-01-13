import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { AppShell } from "@core/components";
import { IPrivateRoute } from "@interfaces/core/components/PrivateRoute";
import { ISlice } from "@interfaces/store/slices";

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRoute) => {
	const { isLogged } = useSelector((state: ISlice) => state.authSlice, shallowEqual);

	if (!isLogged) {
		return <Navigate to={"/auth"} replace />;
	}
	return (
		<AppShell>
			<Component {...rest} />
		</AppShell>
	);
};

export default PrivateRoute;
