import { JSXElementConstructor, ReactElement } from "react";

export interface IPageLayout {
	px?: number;
	py?: number;
	children: ReactElement<any, string | JSXElementConstructor<any>>;
}
