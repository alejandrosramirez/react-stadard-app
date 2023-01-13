import { TablerIcon } from "@tabler/icons";

export interface INavGroupLinks {
	label: string;
	to: string;
}

export interface INavGroup {
	icon: TablerIcon;
	label: string;
	links: INavGroupLinks[];
}
