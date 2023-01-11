import { TablerIcon } from "@tabler/icons";

export interface ILink {
	label: string;
	to: string;
}

export interface INavLinks {
	icon: TablerIcon;
	label: string;
	initiallyOpened?: boolean;
	links?: ILink[];
}
