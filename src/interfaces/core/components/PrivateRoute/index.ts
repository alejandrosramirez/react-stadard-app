import { ReactElement, JSXElementConstructor } from "react";

export interface IPrivateRoute {
	component: (
		props: any
	) => ReactElement<any, string | JSXElementConstructor<any>> | null;
}
