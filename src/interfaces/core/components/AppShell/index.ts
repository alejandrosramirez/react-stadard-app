import { JSXElementConstructor, ReactElement } from "react";

export interface IAppShell {
	children: ReactElement<any, string | JSXElementConstructor<any>>;
}
