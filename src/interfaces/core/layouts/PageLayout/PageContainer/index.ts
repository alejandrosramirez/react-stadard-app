import { JSXElementConstructor, ReactElement } from "react";

export interface IPageContainer {
	px?: number;
	py?: number;
	children: ReactElement<any, string | JSXElementConstructor<any>>;
}
