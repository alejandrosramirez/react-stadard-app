import { IMainLayout } from "./MainLayout";

export interface IAuth {
	MainLayout: (props: IMainLayout) => JSX.Element;
}
