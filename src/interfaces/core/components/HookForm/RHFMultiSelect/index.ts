import { RefAttributes } from "react";
import { MultiSelectProps, SelectItem } from "@mantine/core";

export interface IRHFMultiSelect
	extends MultiSelectProps,
		RefAttributes<HTMLInputElement> {
	label?: string;
	name: string;
	clearable?: boolean;
	data: string[] | SelectItem[];
}
