import { TablerIcon } from "@tabler/icons-react";

export interface INavGroupLink {
	icon: TablerIcon;
	label: string;
	to: string;
}

export interface INavGroup {
	icon: TablerIcon;
	label: string;
	root: string;
	links: INavGroupLink[];
}
