import type { IMainLayout } from "@interfaces/components/auth/MainLayout";

export interface IAuth {
	MainLayout: (props: IMainLayout) => JSX.Element;
}
