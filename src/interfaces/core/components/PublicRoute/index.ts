import { ReactElement, JSXElementConstructor } from "react";

export interface IPublicRoute {
	component: (
		props: any
	) => ReactElement<any, string | JSXElementConstructor<any>> | null;
}
