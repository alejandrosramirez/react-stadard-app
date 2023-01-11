/**
 * Route interface used for PrivateRoute and PublicRoute compoents
 */
import { JSXElementConstructor, ReactElement } from "react";

export interface IRoute {
	component: (
		props: any,
	) => ReactElement<any, string | JSXElementConstructor<any>> | null;
}
