import { TablerIcon } from "@tabler/icons";

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
